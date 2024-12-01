import { cn } from '@/lib/utils'

interface GradientBackgroundProps {
  className?: string
  children: React.ReactNode
}

export function GradientBackground({ className, children }: GradientBackgroundProps) {
  return (
    <div className="relative min-h-screen">
      {/* Animated background*/}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
      </div>
      <div className={cn("relative", className)}>
        {children}
      </div>
    </div>
  )
}