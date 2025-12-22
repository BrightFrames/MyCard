'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, type ComponentType, type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TimelineContentProps {
  children: ReactNode
  className?: string
  as?: ElementType
  animationNum: number
  timelineRef: React.RefObject<HTMLDivElement>
  customVariants?: {
    visible: (i: number) => {
      y: number
      opacity: number
      filter: string
      transition: {
        delay: number
        duration: number
      }
    }
    hidden: {
      filter: string
      y: number
      opacity: number
    }
  }
}

export const TimelineContent = ({
  children,
  className,
  as: Component = "div",
  animationNum,
  timelineRef,
  customVariants,
}: TimelineContentProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 0])

  const MotionComponent = motion(Component as ComponentType<any>)

  return (
    <MotionComponent
      ref={ref}
      className={cn(className)}
      custom={animationNum}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={customVariants}
      style={!customVariants ? { opacity, y } : {}}
    >
      {children}
    </MotionComponent>
  )
}
