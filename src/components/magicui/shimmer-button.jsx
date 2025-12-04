import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export default function ShimmerButton({
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  borderRadius = "100px",
  shimmerDuration = "3s",
  background = "rgba(0, 0, 0, 1)",
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background,
        borderRadius,
      }}
      className={cn(
        "relative overflow-hidden px-8 py-4 text-white font-medium",
        "shadow-2xl transition-all duration-300",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        "before:translate-x-[-200%] hover:before:translate-x-[200%]",
        "before:transition-transform before:duration-1000",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
