import Instructions from './Instructions'
import {InstructionType} from './Instruction'
import styles from '../styles/TransactionForm.module.css'
import {useConnection, useWallet} from '@solana/wallet-adapter-react';
import {useState, MouseEventHandler, useEffect} from 'react'
import {dataTypes} from './DataField'
import { PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';
import { struct } from '@solana/buffer-layout';

interface Props {
  preset: String;
  updateResult: Function;
}

function TransactionForm({preset, updateResult}: Props) {
  const {publicKey} = useWallet()

  const createTransferInstruction = (id: number): InstructionType => {

    return {
      'id': id,
      'programId': '11111111111111111111111111111111',
      'accounts': [{
        id: 1,
        pubKey: publicKey?.toBase58() || ' ',
        signer: true,
        writable: true
      }],
      'data': [{
        id: 1,
        type: Object.keys(dataTypes)[0],
        value: ''
      }]
    }
  }

  const createDefaultInstruction = (id: number): InstructionType => {
    return {
      'id': id,
      'programId': '',
      'accounts': [{
        id: 1,
        pubKey: '',
        signer: false,
        writable: false
      }],
      'data': [{
        id: 1,
        type: Object.keys(dataTypes)[0],
        value: ''
      }]
    }
  }
  const [nextId, setNextId] = useState(2);
  const [instructions, setInstructions] = useState([createDefaultInstruction(1)]);
  const { connection } = useConnection();
  const { sendTransaction } = useWallet();

  useEffect(() => {
    if (preset == 'transfer') {
      setInstructions([createTransferInstruction(1)])
    } else {
      setInstructions([createDefaultInstruction(1)])
    }
  }, [preset])

  const addInstruction: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setInstructions([...instructions, createDefaultInstruction(nextId)]);
    setNextId(nextId + 1);
  };

  const handleEditInstruction = (instruction: InstructionType) => {
    setInstructions(instructions.map((inst) =>
      inst.id === instruction.id ? instruction : inst)
    );
  };

  const handleDeleteInstruction = (id: number) => {
    setInstructions(instructions.filter((inst) => inst.id !== id));
  };

  const submit: MouseEventHandler = async (e) => {
    e.preventDefault();

    updateResult({ status: 'info', msg: "Sending transaction..." });

    try {
      const signature = await sendAndConfirmTransaction();
      updateResult({ status: 'success', msg: signature });
    } catch(error: any) {
      updateResult({ status: 'error', msg: error.message });
    }
  }

  const sendAndConfirmTransaction = async () => {
    const transaction = new Transaction();

    for (const instruction of instructions) {
      const dataLayout = struct(instruction.data.map(d =>
        dataTypes[d.type][0](d.id)
      ));

      const dataBuffer = Buffer.alloc(dataLayout.span);

      const values: { [key: string]: any } = {}

      for (const dataItem of instruction.data) {
        values[dataItem.id] = dataTypes[dataItem.type][1](dataItem.value)
      }

      dataLayout.encode(values, dataBuffer)

      transaction.add(new TransactionInstruction({
        programId: new PublicKey(instruction.programId),
        keys: instruction.accounts.map(acc => {
          return {
            pubkey: new PublicKey(acc.pubKey),
            isSigner: acc.signer,
            isWritable: acc.writable
          }
        }),
        data: dataBuffer
      }));
    }

    const signature = await sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature, 'processed');

    return signature
  };

  return (
    <form className="container flex flex-col h-4/5">
      <div className={`flex flex-row justify-between items-center mb-4 ${styles.header}`}>
        <h1 className="font-bold text-white">Transaction</h1>
        <div>
          <button
            className="btn btn-secondary"
            onClick={addInstruction}
          >
            Add Instruction
          </button>
          <button
            className="btn btn-primary"
            onClick={submit}>
            Go!
          </button>
        </div>
      </div>
      <div className="h-full overflow-y-scroll">
        <Instructions
          instructions={instructions}
          editInstruction={handleEditInstruction}
          deleteInstruction={handleDeleteInstruction}
        />
      </div>

    </form>
  )
}

export default TransactionForm
