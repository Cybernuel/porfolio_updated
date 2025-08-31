"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Draggable from "react-draggable"

interface WindowProps {
  id: string
  title: string
  children: React.ReactNode
  isOpen: boolean
  zIndex: number
  onClose: () => void
  onFocus: () => void
}

export function Window({ id, title, children, isOpen, zIndex, onClose, onFocus }: WindowProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [position, setPosition] = useState({ x: 50, y: 20 })
  const nodeRef = useRef(null)

  // Set initial spawn position on the LEFT side
  useEffect(() => {
    switch (id) {
      case "profile":
        setPosition({ x: 50, y: 20 })
        break
      case "skills":
        setPosition({ x: 70, y: 60 })
        break
      case "experience":
        setPosition({ x: 90, y: 100 })
        break
      case "projects":
        setPosition({ x: 110, y: 140 })
        break
      case "contact":
        setPosition({ x: 130, y: 180 })
        break
      case "terminal":
        setPosition({ x: 150, y: 220 })
        break
      default:
        setPosition({ x: 50, y: 50 })
    }
  }, [id])

  if (!isOpen) return null
  if (isMinimized) return null

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-header"
      position={position} // controlled position
      onStop={(_, data) => setPosition({ x: data.x, y: data.y })} // update after drag
      onStart={onFocus}
      bounds="parent"
    >
      <motion.div
        ref={nodeRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="absolute bg-gray-800 border-2 border-gray-700 rounded shadow-lg overflow-hidden focus:outline-none"
        style={{
          width: getWindowWidth(id),
          height: getWindowHeight(id),
          zIndex,
        }}
        onClick={onFocus}
        tabIndex={0}
      >
        <div className="window-header flex items-center justify-between bg-gradient-to-r from-gray-700 to-gray-800 px-2 py-1 cursor-move">
          <div className="flex items-center gap-1.5">
            <div
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer"
              onClick={onClose}
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer"
              onClick={() => setIsMinimized(true)}
            ></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer"></div>
          </div>
          <div className="text-xs font-mono text-gray-300 mx-auto">{title}</div>
          <div className="w-4"></div> {/* Spacer */}
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
    </Draggable>
  )
}

// Helper functions
function getWindowWidth(id: string): string {
  switch (id) {
    case "profile":
      return "min(650px, 90vw)"
    case "skills":
      return "min(700px, 90vw)"
    case "experience":
      return "min(700px, 90vw)"
    case "projects":
      return "min(700px, 90vw)"
    case "contact":
      return "min(650px, 90vw)"
    case "terminal":
      return "min(600px, 90vw)"
    default:
      return "500px"
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
      return "min(500px, 80vh)"
    case "terminal":
      return "min(400px, 80vh)"
    default:
      return "400px"
  }
}
