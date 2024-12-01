import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50 disabled:pointer-events-none disabled:opacity-50 neon-button',
          {
            'bg-gradient-to-r from-green-500 via-emerald-600 to-green-500 text-white hover:shadow-lg hover:shadow-green-500/20 animate-glow': 
              variant === 'default',
            'border-2 border-green-500/50 bg-transparent hover:bg-green-500/10 hover:border-green-500': 
              variant === 'outline',
            'hover:bg-green-500/10': 
              variant === 'ghost',
            'h-8 px-3 text-sm': 
              size === 'sm',
            'h-10 px-4': 
              size === 'md',
            'h-12 px-6 text-lg': 
              size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }