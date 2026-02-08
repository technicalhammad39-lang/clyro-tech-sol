"use client"

import { useEffect, useState } from "react"

interface TypingTextProps {
  text: string
  speed?: number
  delay?: number
  loop?: boolean
  className?: string
}

export function TypingText({
  text,
  speed = 50,
  delay = 0,
  loop = true,
  className = "",
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopCount, setLoopCount] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const animate = () => {
      setDisplayedText((prev) => {
        if (!isDeleting) {
          // Typing forward
          if (prev.length < text.length) {
            return text.slice(0, prev.length + 1)
          } else {
            // Finished typing, start deleting after delay
            if (loop) {
              timeout = setTimeout(() => {
                setIsDeleting(true)
              }, 2000)
            }
            return prev
          }
        } else {
          // Deleting backward
          if (prev.length > 0) {
            return prev.slice(0, prev.length - 1)
          } else {
            // Finished deleting, start typing again
            setIsDeleting(false)
            setLoopCount((c) => c + 1)
            return ""
          }
        }
      })
    }

    if (delay > 0 && displayedText === "") {
      timeout = setTimeout(animate, delay)
    } else {
      timeout = setTimeout(animate, isDeleting ? speed / 2 : speed)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, text, speed, delay, loop])

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
