import ListNumber from './ListNumber'
export interface Step {
  title: string
  description: string
}
export interface StepListProps {
  steps: Step[]
}

export default function StepList({ steps }: StepListProps) {
  return (
    <ul>
      {steps.map((step, index) => (
        <li className="flex gap-3 my-6" key={index}>
          <ListNumber>{index + 1}</ListNumber>
          <div>
            <h3 className="mt-2 text-2xl font-semibold text-rose-of-sharon-800">
              {step.title}
            </h3>
            <p className="mt-2 font-serif text-lg italic font-medium text-storm-dust-800">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
