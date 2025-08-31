"use client"

import { useState, useEffect } from "react"

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === "undefined") return

    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    const updateTouchPosition = (ev: TouchEvent) => {
      if (ev.touches.length > 0) {
        const touch = ev.touches[0]
        setMousePosition({ x: touch.clientX, y: touch.clientY })
      }
    }

    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0

    if (isTouchDevice) {
      // On touch devices, track touch events
      window.addEventListener("touchmove", updateTouchPosition, { passive: true })
      window.addEventListener("touchstart", updateTouchPosition, { passive: true })
    } else {
      // On non-touch devices, track mouse events
      window.addEventListener("mousemove", updateMousePosition)
    }

    return () => {
      if (isTouchDevice) {
        window.removeEventListener("touchmove", updateTouchPosition)
        window.removeEventListener("touchstart", updateTouchPosition)
      } else {
        window.removeEventListener("mousemove", updateMousePosition)
      }
    }
  }, [])

  return mousePosition
}

export default useMousePosition
