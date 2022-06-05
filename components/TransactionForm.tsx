import Instructions from './Instructions'
import styles from '../styles/TransactionForm.module.css'

function TransactionForm() {
  return (
    <form className="container flex flex-col">
      <div className={`flex flex-row justify-between items-center mb-4 ${styles.header}`}>
        <h1 className="font-bold text-white">Transaction</h1>
        <div>
          <button className="btn btn-secondary">Add Instruction</button>
          <button className="btn btn-primary">Go!</button>
        </div>
      </div>
      <Instructions instructions={instructions} />
    </form>
  )
}

const instructions = [
  {
    'id': 1,
    'programId': '11111111111111111111111111111111111111111111',
    'accounts': [
      {
        'id': 1,
        'pubKey': 'HGkG2dWRbijxyss79dUjHfKRV4K51yTjRPbhZ6VnhW6p',
        'signer': true,
        'writable': true
      },
      {
        'id': 2,
        'pubKey': '2hVkQpoPRqsRjNCi7JnFMjTXa3wD4SqhA51exS2YsJQH',
        'signer': false,
        'writable': true
      }
    ],
    'data': [
      {
        'id': 1,
        'type': '32-bit Unsigned Int',
        'value': '2'
      },
      {
        'id': 2,
        'type': '64-bit Signed Int',
        'value': '-20'
      },
      {
        'id': 3,
        'type': 'Blob',
        'value': 'asBGHR34fg34g2GVSDFHslksakd12'
      }
    ]
  }
]

export default TransactionForm
