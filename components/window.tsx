"use client"

import type React from "react"
import { useState, useRef, useCallback, useEffect } from "react"
import { motion } from "framer-motion"

interface WindowProps {
  id: string
  title: string
  children: React.ReactNode
  isOpen: boolean
  zIndex: number
  onClose: () => void
  onFocus: () => void
}

function getInitialPosition(id: string) {
  switch (id) {
    case "profile":
      return { x: 0, y: 20 }
    case "skills":
      return { x: 0, y: 40 }
    case "experience":
      return { x: 0, y: 60 }
    case "projects":
      return { x: 0, y: 80 }
    case "contact":
      return { x: 0, y: 100 }
    case "terminal":
      return { x: 0, y: 120 }
    default:
      return { x: 0, y: 20 }
  }
}

export function Window({ id, title, children, isOpen, zIndex, onClose, onFocus }: WindowProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [position, setPosition] = useState(() => getInitialPosition(id))
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const windowRef = useRef<HTMLDivElement>(null)

  const handleDragStart = useCallback(
    (clientX: number, clientY: number) => {
      setIsDragging(true)
      setDragStart({
        x: clientX - position.x,
        y: clientY - position.y,
      })
      onFocus()
    },
    [position.x, position.y, onFocus],
  )

  const handleDragMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!isDragging) return

      const newX = clientX - dragStart.x
      const newY = clientY - dragStart.y

      // Keep window within viewport bounds
      const maxX = window.innerWidth - 400 // Approximate window width
      const maxY = window.innerHeight - 200 // Approximate window height

      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      })
    },
    [isDragging, dragStart.x, dragStart.y],
  )

  const handleDragEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".window-controls")) return
    e.preventDefault()
    handleDragStart(e.clientX, e.clientY)
  }

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest(".window-controls")) return
    e.preventDefault()
    const touch = e.touches[0]
    handleDragStart(touch.clientX, touch.clientY)
  }

  // Global event listeners for drag
  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e: MouseEvent) => {
      handleDragMove(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const touch = e.touches[0]
      handleDragMove(touch.clientX, touch.clientY)
    }

    const handleMouseUp = () => {
      handleDragEnd()
    }

    const handleTouchEnd = () => {
      handleDragEnd()
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove, { passive: false })
    document.addEventListener("touchend", handleTouchEnd)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging, handleDragMove, handleDragEnd])

  if (!isOpen) return null
  if (isMinimized) return null

  return (
    <motion.div
      ref={windowRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="absolute bg-gray-800 border-2 border-gray-700 rounded shadow-lg overflow-hidden focus:outline-none"
      style={{
        width: getWindowWidth(id),
        height: getWindowHeight(id),
        zIndex,
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? "grabbing" : "default",
      }}
      onClick={onFocus}
      tabIndex={0}
    >
      <div
        className="window-header flex items-center justify-between bg-gradient-to-r from-gray-700 to-gray-800 px-2 py-1 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="window-controls flex items-center gap-1.5">
          <button
            className="w-5 h-5 md:w-3 md:h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer touch-manipulation flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              onClose()
            }}
            onTouchStart={(e) => {
              e.stopPropagation()
            }}
            onTouchEnd={(e) => {
              e.stopPropagation()
              e.preventDefault()
              onClose()
            }}
          />
          <button
            className="w-5 h-5 md:w-3 md:h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer touch-manipulation flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              setIsMinimized(true)
            }}
            onTouchStart={(e) => {
              e.stopPropagation()
            }}
            onTouchEnd={(e) => {
              e.stopPropagation()
              e.preventDefault()
              setIsMinimized(true)
            }}
          />
          <div className="w-5 h-5 md:w-3 md:h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer flex items-center justify-center"></div>
        </div>
        <div className="text-xs font-mono text-gray-300 mx-auto pointer-events-none">{title}</div>
        <div className="w-4"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="window-content p-3 bg-gray-900 overflow-auto"
        style={{ height: "calc(100% - 26px)" }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function getWindowWidth(id: string): string {
  switch (id) {
    case "profile":
      return "min(500px, 90vw)"
    case "skills":
      return "min(550px, 90vw)"
    case "experience":
      return "min(550px, 90vw)"
    case "projects":
      return "min(550px, 90vw)"
    case "contact":
      return "min(400px, 90vw)"
    case "terminal":
      return "min(480px, 90vw)"
    default:
      return "400px"
  }
}

function getWindowHeight(id: string): string {
  switch (id) {
    case "profile":
      return "min(450px, 80vh)"
    case "skills":
      return "min(500px, 80vh)"
    case "experience":
      return "min(550px, 80vh)"
    case "projects":
      return "min(500px, 80vh)"
    case "contact":
      return "min(400px, 80vh)"
    case "terminal":
      return "min(400px, 80vh)"
    default:
      return "400px"
  }
}
