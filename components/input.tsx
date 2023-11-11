'use client'

import { cva, type VariantProps, cx } from 'class-variance-authority'
import Label from '@/components/label'
import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

export type InputVariantProps = VariantProps<typeof inputVariants>
export const inputVariants = cva(
  'flex items-center px-4 border h-12 border-storm-dust-100 shadow-sm focus-within:border-eastern-blue-500 focus-within:ring-4 focus-within:ring-eastern-blue-500/20 focus-within:bg-white',
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

export interface InputProps
  extends InputVariantProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
  value?: string
  valuechange?: (value: string) => void
  className?: string
}

export default function Input({
  intent,
  wide,
  label,
  value,
  valuechange,
  className,
  ...rest
}: InputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (valuechange) {
      valuechange(e.target.value)
    }
  }
  return (
    <div className={cx('space-y-1', className)}>
      <Label>{label}</Label>
      <div className={inputVariants({ intent, wide })}>
        <input
          className="w-full h-full bg-transparent outline-none placeholder:text-storm-dust-500"
          value={value}
          onInput={handleChange}
          {...rest}
        />
      </div>
    </div>
  )
}
