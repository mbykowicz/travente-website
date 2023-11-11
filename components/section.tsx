import { cx } from 'class-variance-authority'

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  title: string
}

export default function Section({
  children,
  title,
  className,
  id,
}: SectionProps) {
  return (
    <section className={cx('py-16', className)} id={id}>
      <h2 className="mb-8 font-serif text-4xl font-semibold text-eastern-blue-800">
        {title}
      </h2>
      {children}
    </section>
  )
}
