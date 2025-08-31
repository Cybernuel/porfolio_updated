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
        "  about       - Display information about Emmanuel Adegbite",
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
        "// ABOUT EMMANUEL ADEGBITE",
        "-------------------------",
        "Cybersecurity Analyst & IT Professional with hands-on experience in SOC operations,",
        "penetration testing, network defence, and cloud security (AWS & Azure).",
        "Skilled at automating log analysis with Python, conducting vulnerability assessments,",
        "and deploying SIEM tools (Splunk/ELK).",
        "Passionate about educating users, bridging technical expertise with communication,",
        "and securing enterprise systems through both offensive and defensive strategies.",
        "",
      ])
    },

    skills: () => {
      setLines((prev) => [
        ...prev,
        "// SKILLS",
        "-------------------------",
        "- Penetration Testing & Vulnerability Assessment",
        "- SOC Operations & Incident Response",
        "- SIEM (Splunk, ELK, AlienVault)",
        "- Firewall Config & IDS/IPS (Snort, Cisco)",
        "- Active Directory Security & Hardening",
        "- Cloud Security (AWS & Azure)",
        "- Python, Bash & PowerShell Scripting",
        "- Threat Intelligence & YARA Rules",
        "",
      ])
    },

    experience: () => {
      setLines((prev) => [
        ...prev,
        "// PROFESSIONAL EXPERIENCE",
        "-------------------------",
        "MSc Cybersecurity & Ambassador | Edinburgh Napier University | 2023 – Present",
        "Cybersecurity Analyst | DOTS ICT Institute of Technology | 2021 – 2022",
        "Cybersecurity Analyst | FemTech IT | 2020 – 2021",
        "Cybersecurity Intern | Aero Contractors of Nigeria | 2019 – 2020",
        "Customer Service & Responsible Gaming Support | William Hill | 2022 – 2023",
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
        "MSc Cybersecurity | Edinburgh Napier University, UK | 2023 – Present",
        "B.Eng Computer Engineering | University of Ilorin, Nigeria | 2014 – 2019",
        "Certifications: ISC² Certified in Cybersecurity (CC), Google Cybersecurity, Cisco Ethical Hacking, Qualys Vulnerability Management",
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
        "GitHub: github.com/cybernuel",
        "Location: United Kingdom",
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
        "// EXPERIENCE: DOTS ICT INSTITUTE OF TECHNOLOGY (2021 - 2022)",
        "-------------------------",
        "Role: Cybersecurity Analyst",
        "",
        "• Led security assessments and monitored intrusion detection systems",
        "• Developed access control & endpoint security policies",
        "• Delivered security awareness training for staff & students",
        "",
      ],
      femtech: [
        "// EXPERIENCE: FEMTECH IT (2020 - 2021)",
        "-------------------------",
        "Role: Cybersecurity Analyst",
        "",
        "• Conducted penetration tests & vulnerability assessments",
        "• Deployed and monitored SIEM tools for better visibility",
        "• Assisted in incident response and remediation",
        "",
      ],
      aero: [
        "// EXPERIENCE: AERO CONTRACTORS (2019 - 2020)",
        "-------------------------",
        "Role: Cybersecurity Intern (Network & Systems Security)",
        "",
        "• Configured Cisco routers, enterprise networks & VPNs",
        "• Assisted in system hardening & DDoS prevention",
        "• Gained real-world exposure to enterprise network security",
        "",
      ],
      williamhill: [
        "// EXPERIENCE: WILLIAM HILL (2022 - 2023)",
        "-------------------------",
        "Role: Customer Service & Responsible Gaming Support",
        "",
        "• Guided users through responsible gaming & self-exclusion tools",
        "• Resolved customer issues with empathy & security awareness",
        "• Ensured compliance with data protection policies",
        "",
      ],
      napier: [
        "// EXPERIENCE: EDINBURGH NAPIER UNIVERSITY (2023 – Present)",
        "-------------------------",
        "Role: MSc Cybersecurity & International Student Ambassador",
        "",
        "• Pursuing MSc in Cybersecurity (focus: threat intelligence, cloud security, AI-driven defence)",
        "• Representing the university at conferences & events",
        "• Mentoring newcomers and advocating cybersecurity awareness",
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
        "Try 'dots', 'femtech', 'aero', 'williamhill', or 'napier'",
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
