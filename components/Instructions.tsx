import Instruction, { InstructionType } from './Instruction'

function Instructions({ instructions, editInstruction, deleteInstruction }: {
  instructions: InstructionType[],
  editInstruction: Function,
  deleteInstruction: Function
}) {
  const instructionElements = instructions.map(instruction =>
    <Instruction
      key={instruction.id}
      instruction={instruction}
      editInstruction={editInstruction}
      deleteInstruction={deleteInstruction}
    />);

  return (
    <>
      {instructionElements}
    </>
  )
}

export default Instructions
