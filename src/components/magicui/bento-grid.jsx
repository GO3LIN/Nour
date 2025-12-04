import { cn } from "../../lib/utils"

export function BentoGrid({ children, className }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]",
        className
      )}
    >
      {children}
    </div>
  )
}

export function BentoCard({ children, className, span = 1 }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg",
        "hover:shadow-2xl transition-all duration-300",
        span === 2 && "md:col-span-2",
        span === 3 && "lg:col-span-3",
        className
      )}
    >
      {children}
    </div>
  )
}
