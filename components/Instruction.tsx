import AccountField, { Account } from './AccountField'
import DataField, { Data } from './DataField'
import styles from '../styles/Instruction.module.css'

interface Instruction {
  'id': number,
  'programId': string,
  'accounts': Account[],
  'data': Data[]
}

function Instruction({ instruction }: { instruction: Instruction }) {
  return (
    <div className="collapse collapse-arrow">
      <input type="checkbox" />
      <h2 className="font-bold text-white collapse-title">
        Instruction {instruction.id}
      </h2>
      <div className={`collapse-content ${styles.instruction}`}>
        <input
          type="text"
          value={instruction.programId}
          placeholder="Program ID"
          className="input input-bordered input-primary w-full max-w-x"
        />
        <div>
          <h3 className="font-bold text-white my-2">Accounts</h3>
          {
            instruction.accounts.map((account, index) =>
              <AccountField
                key={account.id}
                last={index === instruction.accounts.length - 1}
                account={account} />
            )
          }
        </div>
        <div>
          <h3 className="font-bold text-white my-2">Data</h3>
          {
            instruction.data.map((data, index) =>
              <DataField
                key={data.id}
                last={index === instruction.data.length - 1}
                data={data} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Instruction
