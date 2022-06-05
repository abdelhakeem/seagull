import React from "react";

interface Props {
  message: String;
}

function Result({message} : Props) {
  return (
    <div className="flex flex-col gap-3 font-nunito text-xl pt-5">
      <label className="text-white">Result:</label>
      <div className="w-full bg-field rounded-xl py-5 px-6">
        {message}
      </div>
    </div>
  )
}

export default Result
