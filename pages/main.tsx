import type { NextPage } from 'next'
import ClusterPicker from "../components/ClusterPicker";
import React, { useState } from "react";
import PresetTransactionPicker from "../components/PresetTransactionPicker";
import TransactionForm from '../components/TransactionForm'
import Result from "../components/Result";

interface Props {
  setCluster: Function;
}

const Main: React.FC<Props> = ({setCluster}) => {

  const [preset, setPreset] = useState("single instruction");
  const [result, setResult] = useState({
    status: 'info',
    msg: "[Transaction result]"
  })

  const updateResult = (newResult: { status: string, msg: string }) => {
    setResult(newResult)
  }

  return (
    <div className="w-full h-4/5 flex py-2 justify-center items-start">
      <div className="w-1/4 flex flex-col gap-10">
        <ClusterPicker onChange={setCluster} />
        <PresetTransactionPicker onChange={setPreset} />
      </div>

      <div className="w-3/4 h-full pl-4 ml-4 border-l-2 border-gray-500/20">
        <TransactionForm preset={preset} updateResult={updateResult} />
        <Result result={result} />
      </div>
    </div>
  )
}

export default Main
