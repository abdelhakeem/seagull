import type {NextPage} from 'next'
import ClusterPicker from "../components/ClusterPicker";
import {useState} from "react";
import PresetTransactionPicker from "../components/PresetTransactionPicker";

const Main: NextPage = () => {
  const [cluster, setCluster] = useState("devnet");
  const [preset, setPreset] = useState("single instruction");

  return (<div className="w-full flex pt-20 justify-center items-center">
    <div className="w-1/4 flex flex-col gap-10">
      <ClusterPicker onChange={setCluster}/>
      <PresetTransactionPicker onChange={setPreset}/>
    </div>

    {/*the transaction form div*/}
    <div className="w-3/4"></div>

  </div>)
}

export default Main
