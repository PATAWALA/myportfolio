"use client"
import { useState, useEffect, useRef } from "react"

export function useInView(threshold = 0.1, triggerImmediately = true) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(triggerImmediately) // true dès le départ si triggerImmediately = true

  useEffect(() => {
    if (!ref.current) return
    // Si on veut déclencher immédiatement, pas besoin d'observer
    if (triggerImmediately) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, triggerImmediately])

  return { ref, isInView }
}
