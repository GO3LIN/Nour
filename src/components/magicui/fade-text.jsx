import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export default function FadeText({
  text,
  className,
  direction = "up",
  framerProps = {},
  ...props
}) {
  const directionOffset = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        ...framerProps,
      }}
      className={cn(className)}
      {...props}
    >
      {text}
    </motion.div>
  )
}
