import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export default function MagicCard({ 
  children, 
  className,
  gradientColor = "#10b981",
  ...props 
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-slate-200",
        "bg-white shadow-lg hover:shadow-2xl transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Gradient overlay on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${gradientColor}, transparent 70%)`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
