import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.4,
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0, filter: "blur(10px)", y: 20 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
