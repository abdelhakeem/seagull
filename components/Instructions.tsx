import Instruction, { InstructionType } from './Instruction'

function Instructions({ instructions, editInstruction }: {
  instructions: InstructionType[]
  editInstruction: Function
}) {
  const instructionElements = instructions.map(instruction =>
    <Instruction
      key={instruction.id}
      instruction={instruction}
      editInstruction={editInstruction}
    />);

  return (
    <>
      {instructionElements}
    </>
  )
}

export default Instructions
