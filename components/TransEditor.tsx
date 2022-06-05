import Image from "next/image";
import NavbarLink from "./NavbarLink";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
} from "@chakra-ui/react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

function TransEditor() {
  const [cluster, setCluster] = useState("");
  const [preset, setPreset] = useState("");

  //check to see current state of cluster
  console.log(cluster);

  return (
    //create container
    <div className="">
      <div className="container flex">
        <div className="left text-white text-3xl flex flex-col font-nunito text-lg">
          {/* pick cluster */}
          <span>Pick a cluster</span>
          <select
            name="cars"
            id="cars"
            className="w-80 mt-8 text-black rounded"
            onChange={(e) => setCluster(e.target.value)}
          >
            <option value="" selected disabled hidden>
              Choose here
            </option>
            <option value="mainnet">Mainnet Beta (Not Recommended)</option>
            <option value="testnet">Testnet</option>
            <option value="devnet">Devnet (Recommended)</option>
            <option value="localhost">Localhost</option>
          </select>

          {/* preset transaction */}
          <span className="mt-16">Pick a preset transaction</span>

          <div className="p-2 flex flex-row">
            {/* <div className="flex flex-col">
              <input type="radio" value="Trasnfer" />
              Transfer
              <input type="radio" value="Custom Transaction" />
              Custom Transaction
              <input type="radio" value="Multiple Instructions" />
              Multiple Instructions
            </div> */}
            <div>
              <input type="radio" value="Male" name="gender" /> Male
              <input type="radio" value="Female" name="gender" /> Female
              <input type="radio" value="Other" name="gender" /> Other
            </div>
          </div>
        </div>

        {/* right */}
        <div className="right text-white text-3xl flex flex-col gap-16 w-1/2 h-3 mt-14 ml-20 font-nunito text-lg">
          <div className="top flex flex-row">
            <p className="mr-16">Transaction</p>

            <div className="buttonContainer flex flex-row">
              <button className="relative block bg-green-normal hover:bg-green-dark text-xs cursor-pointer z-20 font-small rounded-xl mr-4">
                <p className="flex gap-3  px-10 py-3 justify-center items-center">
                  Add Instruction
                </p>
              </button>

              <button className="relative block bg-green-normal hover:bg-green-dark text-xs cursor-pointer z-20 font-small rounded-xl">
                <p className="flex gap-3  px-10 py-3 justify-center items-center">
                  Go
                </p>
              </button>
            </div>
          </div>

          {/* drop down list */}
          <select name="cars" id="cars">
            <option value="instruction1">Instruction 1</option>
            <option value="instruction2">Instruction 2</option>
          </select>

          <div className="mid">
            <FormControl className="flex flex-row" isRequired>
              <FormLabel color="gray.200">Program ID</FormLabel>
              <Input
                id="title"
                color="red"
                // onChange={event => setTitle(event.currentTarget.value)}
              />
            </FormControl>

            <FormControl className="flex flex-row" isRequired>
              <FormLabel color="gray.200">Accounts</FormLabel>
              <Input
                id="title"
                color="red"
                // onChange={event => setTitle(event.currentTarget.value)}
              />
            </FormControl>

            <div className="flex flex-row justify-between	">
              <p>Data</p>
              <select name="cars" id="cars">
                <option value="instruction1">Instruction 1</option>
                <option value="instruction2">Instruction 2</option>
              </select>
              <input placeholder=""></input>
            </div>

            <div className="bottom">
              <FormControl isRequired>
                <FormLabel color="gray.200">Result</FormLabel>
                <Textarea
                  id="review"
                  color="gray.400"
                  // onChange={event => setDescription(event.currentTarget.value)}
                />
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransEditor;
