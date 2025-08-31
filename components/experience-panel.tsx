"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ExperiencePanel() {
  const [activeExperience, setActiveExperience] = useState(0)

  const experiences = [
    {
      title: "Customer Service Representative",
      company: "William Hill, Edinburgh, UK",
      period: "Aug 2024 – Present",
      description: [
        "Deliver prompt and accurate support across live chat, phone, and email channels.",
        "Contributed to a 20% rise in positive feedback ratings by ensuring seamless customer experiences.",
        "Collaborated with internal teams to resolve complex cases and reduce repeat contacts by 25%.",
        "Promoted responsible gambling practices by guiding customers through safety tools.",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "International Student Ambassador",
      company: "Edinburgh Napier University, UK",
      period: "Nov 2024 – Present",
      description: [
        "Acted as liaison between the university and prospective international students.",
        "Delivered presentations at open days and events, reaching 500+ prospective students.",
        "Discussed cybersecurity career pathways, boosting tech program interest by 18%.",
        "Mentored new students, supporting cultural adaptation and academic success.",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Cybersecurity Analyst Intern",
      company: "Hacksecure, UK",
      period: "May 2025 – Jun 2025",
      description: [
        "Assisted with vulnerability assessments and penetration testing on client systems.",
        "Managed Active Directory user accounts and applied security policies.",
        "Supported incident response by analysing logs and drafting initial reports.",
        "Configured Snort IDS rules and monitored network traffic in real time.",
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Cybersecurity Analyst",
      company: "DOTS ICT Institute of Technology, Nigeria",
      period: "Mar 2023 – Jan 2024",
      description: [
        "Led penetration tests and red team simulations, reducing risk exposure by 40%.",
        "Developed custom firewall configurations and integrated Snort-based IDS.",
        "Designed incident response protocols, cutting breach detection time by 35%.",
        "Deployed SIEM tools (Splunk & ELK Stack) for real-time monitoring.",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Cybersecurity Analyst",
      company: "FemTech Information Technology Ltd, Nigeria",
      period: "Mar 2021 – Feb 2023",
      description: [
        "Performed security audits based on ISO 27001 & NIST frameworks.",
        "Strengthened AWS and Azure cloud security configurations.",
        "Developed Python automation scripts for log analysis, reducing IR time by 50%.",
        "Implemented MFA and encryption protocols for enhanced data protection.",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Network Security Intern",
      company: "Aero Contractors of Nigeria, Lagos",
      period: "Feb 2017 – Oct 2019",
      description: [
        "Configured and maintained Cisco routers, Fortinet firewalls, and VPNs.",
        "Applied DDoS mitigation techniques, improving uptime by 20%.",
        "Optimised Wireshark use for real-time packet analysis and anomaly detection.",
        "Assisted in secure network architecture implementation to reduce intrusions.",
      ],
      color: "from-yellow-500 to-amber-500",
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
            <div className="flex items-center mb-4">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experiences[activeExperience].color} mr-2`}></div>
              <span className="text-white">{experiences[activeExperience].title}</span>
            </div>

            <div className="bg-black/30 border border-gray-700 rounded p-4 mb-4">
              <div className="flex justify-between items-start mb-4">
                <div className="text-gray-400">
                  <div className="text-white">{experiences[activeExperience].company}</div>
                  <div className="text-xs">{experiences[activeExperience].period}</div>
                </div>
                <div className={`text-xs px-2 py-1 rounded bg-gradient-to-r ${experiences[activeExperience].color} text-white`}>
                  {activeExperience <= 2 ? "CURRENT" : "PAST"}
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
          </motion.div>
        </AnimatePresence>

        {/* Decorative terminal lines */}
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
