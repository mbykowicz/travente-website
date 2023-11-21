import { twMerge } from 'tailwind-merge'

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={twMerge('container max-w-4xl px-6 xl:px-0 mx-auto', className)}
    >
      {children}
    </div>
  )
}
