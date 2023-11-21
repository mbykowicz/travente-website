'use client'

import { cva, type VariantProps, cx } from 'class-variance-authority'
import Label from '@/components/LabelComponent'

export type TextareaVariantProps = VariantProps<typeof textareaVariants>

export const textareaVariants = cva(
  'flex items-center border border-storm-dust-100 shadow-sm focus-within:border-eastern-blue-500 focus-within:ring-4 focus-within:ring-eastern-blue-500/20 focus-within:bg-white',
  {
    variants: {
      intent: {
        transparent: 'bg-white',
        filled: 'bg-storm-dust-50/50',
      },
      wide: {
        true: 'block w-full',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      intent: 'transparent',
    },
  },
)

export interface TextareaProps
  extends TextareaVariantProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  value?: string
  valuechange?: (value: string) => void
  className?: string
}

export default function Textarea({
  intent,
  wide,
  label,
  placeholder,
  value,
  valuechange,
  className,
  ...rest
}: TextareaProps) {
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (valuechange) {
      valuechange(e.target.value)
    }
  }
  return (
    <div className={cx('space-y-1 h-fit', className)}>
      <Label>{label}</Label>
      <div className={textareaVariants({ intent, wide })}>
        <textarea
          placeholder={placeholder}
          className="w-full h-full px-4 py-3 bg-transparent outline-none placeholder:text-storm-dust-500"
          rows={10}
          value={value}
          onInput={handleChange}
          {...rest}
        ></textarea>
      </div>
    </div>
  )
}
