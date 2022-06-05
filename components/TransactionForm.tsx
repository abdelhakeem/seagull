import Instructions from './Instructions'
import {InstructionType} from './Instruction'
import styles from '../styles/TransactionForm.module.css'
import {useWallet} from '@solana/wallet-adapter-react';
import {useState, MouseEventHandler, useEffect} from 'react'
import {dataTypes} from './DataField'

interface Props {
  preset: String;
}

function TransactionForm({preset}: Props) {
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
  }

  const handleDeleteInstruction = (id: number) => {
    setInstructions(instructions.filter((inst) => inst.id !== id));
  }

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
          <button className="btn btn-primary">Go!</button>
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
