import Instruction from './Instruction'

function Instructions({ instructions }: { 'instructions': Instruction[] }) {
  const instructionElements = instructions.map(instruction =>
    <Instruction key={instruction.id} instruction={instruction} />);

  return (
    <>
      {instructionElements}
    </>
  )
}

export default Instructions
