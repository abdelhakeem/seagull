import type {NextPage} from 'next'
import ClusterPicker from "../components/ClusterPicker";
import {useState} from "react";

const Main: NextPage = () => {
  const [cluster, setCluster] = useState("devnet");

  return (<div>
    <ClusterPicker onChange={setCluster}/>
  </div>)
}

export default Main
