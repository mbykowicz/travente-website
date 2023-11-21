function Signature({
  name,
  description,
}: {
  name: string
  description?: string
}) {
  return (
    <div className="my-6">
      <p className="font-script text-8xl text-brandy-punch-700">{name}</p>
      {description && (
        <p className="-mt-3 font-sans text-sm text-storm-dust-600">
          {description}
        </p>
      )}
    </div>
  )
}

export default Signature
