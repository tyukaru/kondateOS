interface StepListProps {
  steps: string[];
}

export default function StepList({ steps }: StepListProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-bold text-stone-800">作り方</h3>
      <ol className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-700 text-xs font-bold text-white">
              {i + 1}
            </span>
            <p className="pt-0.5 text-sm leading-relaxed text-stone-700">
              {step}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
