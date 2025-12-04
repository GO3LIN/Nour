import { cn } from "../../lib/utils"

export default function Safari({ 
  url = "",
  className,
  children,
  ...props 
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-slate-200 shadow-2xl",
        "bg-gradient-to-b from-slate-50 to-white",
        className
      )}
      {...props}
    >
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        {url && (
          <div className="flex-1 mx-4">
            <div className="rounded-md bg-white px-3 py-1 text-xs text-slate-500 border border-slate-200">
              {url}
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="relative w-full">
        {children}
      </div>
    </div>
  )
}
