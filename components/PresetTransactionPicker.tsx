import React from "react";

interface Props {
  onChange: Function;
}

function PresetTransactionPicker({onChange}: Props) {


  return (
    <div className="flex flex-col gap-3 font-nunito text-white text-xl">
      <label className="text-white">Pick a preset transaction:</label>

      <label className="label cursor-pointer justify-start gap-10">
        <input
          type="radio"
          value="transfer"
          name="radio-6"
          className="radio checked:bg-blue-500"
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="label-text">Transfer</span>
      </label>

      <label className="label cursor-pointer justify-start gap-10">
        <input
          type="radio"
          value="single instruction"
          name="radio-6"
          className="radio checked:bg-blue-500"
          onChange={(e) => onChange(e.target.value)}
          defaultChecked={true}
        />
        <span className="label-text">Single instruction</span>
      </label>

      <label className="label cursor-pointer justify-start gap-10">
        <input
          type="radio"
          value="Multi instructions"
          name="radio-6"
          className="radio checked:bg-blue-500"
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="label-text">Multi instructions</span>
      </label>

    </div>
  )
}

export default PresetTransactionPicker
