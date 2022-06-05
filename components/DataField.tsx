import { blob, cstr, f32, f64, ns64, nu64, s16, s32, s8, u16, u32, u8, utf8 } from "@solana/buffer-layout"
import { FaTrash } from "react-icons/fa"
import { ChangeEventHandler } from "react"

export interface Data {
  'id': number
  'type': string
  'value': string
}

export const dataTypes = {
  '8-bit Unsigned Int': u8,
  '16-bit Unsigned Int': u16,
  '32-bit Unsigned Int': u32,
  '64-bit Unsigned Int': nu64,
  '8-bit Signed Int': s8,
  '16-bit Signed Int': s16,
  '32-bit Signed Int': s32,
  '64-bit Signed Int': ns64,
  '32-bit Float': f32,
  '64-bit Float': f64,
  'C-style String': cstr,
  'UTF8 String': utf8,
  'Blob': blob
}

function DataField({ data, showDelete, editData, deleteData }: {
  data: Data,
  showDelete: boolean,
  editData: Function,
  deleteData: Function
}) {
  const handleTypeChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    data.type = e.target.value;
    editData(data);
  };

  const handleValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    data.value = e.target.value;
    editData(data);
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <select
        value={data.type}
        placeholder="Type"
        className="input input-bordered input-primary flex-1"
        onChange={handleTypeChange}
      >
        {
          Object.keys(dataTypes).map((type) =>
            <option key={type} value={type}>{type}</option>
          )
        }
      </select>
      <input
        type="text"
        value={data.value}
        placeholder="Value"
        className="input input-bordered input-primary flex-1 ml-2"
        onChange={handleValueChange}
      />
      {showDelete ?
        <button
          className="ml-2 btn bg-red-500 hover:bg-red-600 text-white"
          onClick={() => deleteData(data.id)}
        >
          <FaTrash />
        </button> : ''}
    </div>
  )
}

export default DataField
