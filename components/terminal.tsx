"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function Terminal() {
  const [lines, setLines] = useState<string[]>([
    "Welcome to Terminal v3.04.21 - CyberSecurity Enhanced",
    "Type 'help' to see available commands",
    "",
  ])
  const [currentInput, setCurrentInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Command functions
  const commands: Record<string, () => void> = {
    help: () => {
      setLines((prev) => [
        ...prev,
        "Available commands:",
        "  about       - Display information about Emmanuel Damilare Adegbite",
        "  skills      - List key skills and competencies",
        "  experience  - Show professional experience",
        "  education   - Display educational background",
        "  contact     - Show contact information",
        "  clear       - Clear the terminal",
        "  help        - Show this help message",
        "",
      ])
    },

    about: () => {
      setLines((prev) => [
        ...prev,
        "// ABOUT EMMANUEL DAMILARE ADEGBITE",
        "-------------------------",
        "Cybersecurity Analyst & Support Specialist with hands-on experience in network security, pentesting, and incident response.",
        "Passionate about protecting systems, empowering people, and educating others on cybersecurity.",
        "From configuring Cisco routers in Lagos to presenting cybersecurity trends in Edinburgh, I combine technical expertise with strong communication skills.",
        "",
      ])
    },

    skills: () => {
      setLines((prev) => [
        ...prev,
        "// SKILLS",
        "-------------------------",
        "- Penetration Testing & Red Teaming",
        "- Network Security & Cisco Configuration",
        "- Incident Response & SIEM Deployment",
        "- Vulnerability Assessment & Threat Hunting",
        "- Python, PowerShell, Bash Scripting",
        "- Technical Communication & User Education",
        "",
      ])
    },

    experience: () => {
      setLines((prev) => [
        ...prev,
        "// PROFESSIONAL EXPERIENCE",
        "-------------------------",
        "Cybersecurity Analyst | DOTS ICT Institute of Technology | 2022 - 2023",
        "Cybersecurity Analyst | FemTech IT | 2021 - 2022",
        "Network & Security Engineer | Aero Contractors | 2020 - 2021",
        "Customer Service & Support | William Hill | 2019 - 2020",
        "",
        "Type 'experience [company]' for details (e.g., 'experience dots')",
        "",
      ])
    },

    education: () => {
      setLines((prev) => [
        ...prev,
        "// EDUCATION",
        "-------------------------",
        "B.Eng Computer Engineering | University of Ilorin, Nigeria | 2016 - 2020",
        "Master's in Cybersecurity | Edinburgh Napier University, UK | 2025 - Present",
        "",
      ])
    },

    contact: () => {
      setLines((prev) => [
        ...prev,
        "// CONTACT INFORMATION",
        "-------------------------",
        "Email: macdarex@yahoo.com",
        "LinkedIn: linkedin.com/in/thedamilare",
        "GitHub: github.com/Cybernuel",
        "Location: Edinburgh, UK",
        "",
      ])
    },

    clear: () => {
      setLines(["Terminal cleared", ""])
    },
  }

  // Handle specific experience queries
  const handleExperienceQuery = (company: string) => {
    const companies: { [key: string]: string[] } = {
      dots: [
        "// EXPERIENCE: DOTS ICT INSTITUTE OF TECHNOLOGY (2022 - 2023)",
        "-------------------------",
        "Role: Cybersecurity Analyst",
        "",
        "• Designed incident response protocols and deployed SIEM tools",
        "• Led penetration testing exercises",
        "• Reduced breach detection times and improved security posture",
        "• Mentored junior analysts and educated staff on security best practices",
        "",
      ],
      femtech: [
        "// EXPERIENCE: FEMTECH IT (2021 - 2022)",
        "-------------------------",
        "Role: Cybersecurity Analyst",
        "",
        "• Performed vulnerability assessments and network hardening",
        "• Developed internal security guidelines",
        "• Assisted in incident response and monitoring",
        "• Presented security awareness sessions for staff and clients",
        "",
      ],
      aero: [
        "// EXPERIENCE: AERO CONTRACTORS (2020 - 2021)",
        "-------------------------",
        "Role: Network & Security Engineer",
        "",
        "• Configured enterprise networks and VPNs",
        "• Hardened systems against DDoS and other attacks",
        "• Conducted daily network monitoring and reporting",
        "• Collaborated with IT teams to improve system reliability",
        "",
      ],
      williamhill: [
        "// EXPERIENCE: WILLIAM HILL (2019 - 2020)",
        "-------------------------",
        "Role: Customer Service & Support",
        "",
        "• Guided users through self-exclusion and responsible gaming tools",
        "• Resolved technical issues with empathy and efficiency",
        "• Built trust with clients while maintaining security compliance",
        "",
      ],
    }

    const companyLower = company.toLowerCase()
    if (companies[companyLower]) {
      setLines((prev) => [...prev, ...companies[companyLower]])
    } else {
      setLines((prev) => [
        ...prev,
        `Company '${company}' not found in experience.`,
        "Try 'dots', 'femtech', 'aero', or 'williamhill'",
        "",
      ])
    }
  }

  const processCommand = (input: string) => {
    const inputTrimmed = input.trim()
    if (inputTrimmed === "") return

    // Add command to history
    setCommandHistory((prev) => [inputTrimmed, ...prev])
    setHistoryIndex(-1)

    // Display command in terminal
    setLines((prev) => [...prev, `> ${inputTrimmed}`, ""])

    // Process command
    const args = inputTrimmed.split(" ")
    const command = args[0].toLowerCase()

    if (command === "experience" && args.length > 1) {
      handleExperienceQuery(args[1])
    } else if (command in commands) {
      commands[command]()
    } else {
      setLines((prev) => [...prev, `Command not found: ${command}`, "Type 'help' to see available commands", ""])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(currentInput)
      setCurrentInput("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentInput("")
      }
    }
  }

  // Auto-scroll to the bottom when new content is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  return (
    <div className="h-full flex flex-col">
      <div
        ref={terminalRef}
        className="flex-1 font-mono text-xs text-green-400 bg-black overflow-y-auto p-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className={`${line.startsWith("//") ? "text-cyan-400 font-bold" : ""} ${
              line.startsWith(">") ? "text-white" : ""
            } ${line.startsWith("  ") ? "text-gray-400" : ""}`}
          >
            {line}
          </motion.div>
        ))}
      </div>

      <div className="flex items-center bg-gray-900 border-t border-gray-700 p-2">
        <span className="text-green-400 mr-2 font-mono text-xs">{">"}</span>
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none text-green-400 focus:outline-none font-mono text-xs"
          autoFocus
        />
      </div>
    </div>
  )
}
