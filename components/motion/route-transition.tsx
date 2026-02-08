"use client"

import type { ElementType, ReactNode } from "react"
import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { usePathname } from "next/navigation"

export function RouteTransition({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const MotionTag = (mounted ? motion.div : "div") as ElementType
  const motionProps = mounted
    ? {
        initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, filter: "blur(6px)" },
        animate: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, filter: "blur(6px)" },
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      }
    : {}

  return (
    <AnimatePresence mode="wait" initial={false}>
      <MotionTag key={pathname} className={className} {...(motionProps as Record<string, unknown>)}>
        {children}
      </MotionTag>
    </AnimatePresence>
  )
}
