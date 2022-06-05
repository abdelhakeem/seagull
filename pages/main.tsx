import type { NextPage } from 'next'
import ClusterPicker from "../components/ClusterPicker";
import { useState } from "react";
import PresetTransactionPicker from "../components/PresetTransactionPicker";
import TransactionForm from '../components/TransactionForm'
import Result from "../components/Result";

const Main: NextPage = () => {
  const [cluster, setCluster] = useState("devnet");
  const [preset, setPreset] = useState("single instruction");

  return (
    <div className="w-full h-4/5 flex py-2 justify-center items-start">
      <div className="w-1/4 flex flex-col gap-10">
        <ClusterPicker onChange={setCluster} />
        <PresetTransactionPicker onChange={setPreset} />
      </div>

      <div className="w-3/4 h-full pl-4 ml-4 border-l-2 border-gray-500/20">
        <TransactionForm />
        <Result message="success"/>
      </div>
    </div>
  )
}

export default Main
