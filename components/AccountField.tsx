import { FaPlus, FaTrash } from "react-icons/fa"

export interface Account {
  'id': number
  'pubKey': string,
  'signer': boolean,
  'writable': boolean
}

function AccountField({ account, last }: {
  'account': Account,
  'last': boolean
}) {
  return (
    <div className="flex flex-row justify-between items-center">
      <input
        type="text"
        value={account.pubKey}
        placeholder="Public Key"
        className="input input-bordered input-primary w-full"
      />
      <label className="label cursor-pointer ml-4">
        <span className="label-text mr-2">Signer</span>
        <input type="checkbox" className="toggle toggle-primary" />
      </label>
      <label className="label cursor-pointer mx-4">
        <span className="label-text mr-2">Writable</span>
        <input type="checkbox" className="toggle toggle-primary" />
      </label>
      {!last ?
        <button className="ml-2 btn bg-red-500 hover:bg-red-600 text-white">
          <FaTrash />
        </button> : ''}
      {last ?
        <button className="ml-2 btn bg-green-500 hover:bg-green-600 text-white">
          <FaPlus />
        </button> : ''}
    </div>
  )
}

export default AccountField
