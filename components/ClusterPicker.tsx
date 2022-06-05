import React from "react";

interface Props {
  onChange: Function;
}

function ClusterPicker({onChange} : Props) {


  return (
    <div className="flex flex-col gap-3 font-nunito text-xl">
      <label className="text-white">Pick a cluster:</label>
      <select
        className="select select-bordered border-green-normal w-full max-w-xs"
        defaultValue={"devnet"}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="devnet">Devnet (Recommended)</option>
        <option value="testnet">Testnet</option>
        <option value="mainnet">Mainnet Beta (Not Recommended)</option>
        <option value="localhost">Localhost</option>
      </select>
    </div>
  )
}

export default ClusterPicker
