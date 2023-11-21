'use client'
import { cva, type VariantProps, cx } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
export const buttonVariants = cva(
  'h-12 px-8 py-2 font-sans font-medium text-[14px] border transition disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-transparent',
  {
    variants: {
      intent: {
        primary: 'border-1 border-eastern-blue-200',
        secondary: '',
      },
      wide: {
        true: 'block w-full',
      },
      variant: {
        blue: '',
        orange: '',
      },
    },
    compoundVariants: [
      {
        intent: 'primary',
        variant: 'blue',
        class:
          'bg-eastern-blue-100 text-eastern-blue-800 hover:bg-eastern-blue-200 active:bg-eastern-blue-300',
      },
      {
        intent: 'secondary',
        variant: 'blue',
        class:
          'text-eastern-blue-800 border-eastern-blue-100 hover:bg-eastern-blue-50 active:bg-eastern-blue-100',
      },
      {
        intent: 'primary',
        variant: 'orange',
        class:
          'bg-brandy-punch-100 text-brandy-punch-800 hover:bg-brandy-punch-200 active:bg-brandy-punch-300',
      },
      {
        intent: 'secondary',
        variant: 'orange',
        class:
          'text-brandy-punch-800 border-brandy-punch-100 hover:bg-brandy-punch-50 active:bg-brandy-punch-100',
      },
    ],
    defaultVariants: {
      intent: 'primary',
      variant: 'blue',
    },
  },
)

export interface ButtonProps
  extends ButtonVariantProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  intent,
  wide,
  variant,
  className,
  type,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={cx(buttonVariants({ intent, wide, variant }), className)}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
