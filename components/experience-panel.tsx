"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ExperiencePanel() {
  const [activeExperience, setActiveExperience] = useState(0)

  const experiences = [
    {
      title: "Cybersecurity Analyst / SOC Engineer",
      company: "DOTS ICT Institute of Technology",
      period: "2024 – Present",
      description: [
        "Designed incident response protocols and deployed SIEM tools.",
        "Led penetration tests and reduced breach detection times.",
        "Developed Python and Bash scripts to automate log analysis and threat detection.",
        "Worked on Active Directory hardening and cloud security monitoring.",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Security Analyst",
      company: "FemTech IT",
      period: "2023 – 2024",
      description: [
        "Performed vulnerability assessments and penetration testing.",
        "Analyzed logs using Splunk and ELK Stack for threat intelligence.",
        "Configured network monitoring and intrusion detection systems.",
        "Supported cloud security operations for Azure environments.",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Network Security Intern",
      company: "Aero Contractors of Nigeria",
      period: "2022 – 2023",
      description: [
        "Configured enterprise networks, routers, and VPNs.",
        "Hardened systems against DDoS and common network attacks.",
        "Gained hands-on experience with Cisco network equipment and firewalls.",
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Customer Support & Security Awareness",
      company: "William Hill",
      period: "2021 – 2022",
      description: [
        "Guided users on secure practices and self-exclusion tools.",
        "Provided technical support with a focus on cybersecurity best practices.",
        "Delivered cybersecurity awareness presentations to staff and customers.",
      ],
      color: "from-orange-500 to-yellow-500",
    },
  ]

  return (
    <div className="h-full flex flex-col text-gray-300">
      <div className="flex space-x-1 mb-4 overflow-x-auto hide-scrollbar">
        {experiences.map((exp, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`px-3 py-1 text-xs font-mono whitespace-nowrap rounded-md ${
              activeExperience === index
                ? `bg-gradient-to-r ${exp.color} text-white`
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => setActiveExperience(index)}
          >
            {exp.company}
          </motion.button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar terminal-container relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExperience}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="terminal-text font-mono text-sm"
          >
            <div className={`flex items-center mb-4`}>
              <div
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${experiences[activeExperience].color} mr-2`}
              ></div>
              <span className="text-white">{experiences[activeExperience].title}</span>
            </div>

            <div className="bg-black/30 border border-gray-700 rounded p-4 mb-4">
              <div className="flex justify-between items-start mb-4">
                <div className="text-gray-400">
                  <div className="text-white">{experiences[activeExperience].company}</div>
                  <div className="text-xs">{experiences[activeExperience].period}</div>
                </div>
                <div
                  className={`text-xs px-2 py-1 rounded bg-gradient-to-r ${experiences[activeExperience].color} text-white`}
                >
                  {activeExperience === 0 ? "CURRENT" : "PAST"}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {experiences[activeExperience].description.map((desc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-green-400 mr-2">$</span>
                    <span>{desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-xs text-gray-400 bg-gray-800/30 p-3 rounded border border-gray-700">
              <div className="mb-2">Additional Information:</div>

              {activeExperience === 0 && (
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2">&gt;</span>
                    <span>Automating log analysis and SOC workflows with Python/Bash.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2">&gt;</span>
                    <span>Active Directory hardening and Azure cloud monitoring.</span>
                  </div>
                </div>
              )}

              {activeExperience === 1 && (
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2">&gt;</span>
                    <span>Conducted vulnerability assessments and penetration tests.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2">&gt;</span>
                    <span>Analyzed network and security logs using Splunk and ELK Stack.</span>
                  </div>
                </div>
              )}

              {activeExperience === 2 && (
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2">&gt;</span>
                    <span>Configured enterprise networks, VPNs, and Cisco routers.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2">&gt;</span>
                    <span>Hardened systems against DDoS and common network attacks.</span>
                  </div>
                </div>
              )}

              {activeExperience === 3 && (
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2">&gt;</span>
                    <span>Educated users on cybersecurity best practices and self-exclusion tools.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2">&gt;</span>
                    <span>Delivered cybersecurity awareness presentations at university and for customers.</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Terminal lines decoration */}
        <div className="absolute top-0 left-0 h-full w-full pointer-events-none overflow-hidden opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="whitespace-nowrap font-mono text-[10px] text-white opacity-50"
              style={{ marginTop: `${Math.random() * 24}px` }}
            >
              {Array.from({ length: 30 })
                .map(() => (Math.random() > 0.5 ? "1" : "0"))
                .join(" ")}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
