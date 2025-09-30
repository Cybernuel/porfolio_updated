"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ExperiencePanel() {
  const [activeExperience, setActiveExperience] = useState(0)

  const experiences = [
    {
      title: "Customer Service Representative",
      company: "William Hill, Edinburgh, UK",
      period: "Sep 2024 – Present",
      description: [
        "Deliver prompt and accurate support across live chat, phone, and email channels, resolving a wide range of account and betting issues.",
        "Maintain a professional, empathetic tone while ensuring a seamless customer experience, contributing to a 20% rise in positive feedback ratings.",
        "Clearly explain promotions and services with clarity and confidence, helping customers make informed decisions and enhancing overall engagement.",
        "Collaborate with internal departments to resolve complex cases efficiently, cutting repeat contact rates by 25% through targeted problem-solving.",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "International Student Ambassador",
      company: "Edinburgh Napier University, Edinburgh, UK",
      period: "Nov 2024 – Present",
      description: [
        "Serve as a key liaison between the university and prospective students, offering tailored insights to help with admissions and transition planning.",
        "Deliver presentations and engage in public speaking at open days and university events, reaching over 500 prospective students and their families.",
        "Discuss cybersecurity trends and career pathways with students, boosting interest in tech programs by 18% based on follow-up session attendance.",
        "Mentor new international students, providing academic advice and career guidance to ease cultural adaptation and support student retention.",
        "Represent the university at industry conferences and networking events, strengthening institutional visibility within the tech and academic community.",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Service Desk Analyst (Hybrid)",
      company: "Paypoint Plc, UK",
      period: "Mar 2024 – Sep 2024",
      description: [
        "Consistently achieved and exceeded SLA targets by efficiently managing ticket queues and prioritising urgent requests, leading to reduced resolution times.",
        "Provided first-line support across Windows, macOS, and mobile platforms using AD, SCCM, Intune, and Azure EntraID.",
        "Managed incidents via ServiceNow and Jira, ensuring accurate categorisation and continuous service improvement.",
        "Handled password resets, account management, and access rights while ensuring GDPR compliance and data protection.",
        "Created knowledge base articles and process guides, enhancing self-service adoption and team efficiency.",
      ],
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Cybersecurity Analyst Intern",
      company: "Hacksecure, UK",
      period: "Mar 2025 – Jun 2025",
      description: [
        "Assisted with vulnerability assessments and penetration testing on client systems.",
        "Helped manage Active Directory accounts, permissions, and security policies.",
        "Supported incident response by analysing logs and drafting initial reports.",
        "Configured Snort IDS rules and monitored network traffic in real time.",
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Cybersecurity Analyst",
      company: "DOTS ICT Institute of Technology, Nigeria",
      period: "Mar 2023 – Feb 2024",
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
        "Performed regular security audits in alignment with ISO 27001 and NIST frameworks.",
        "Strengthened AWS and Azure cloud security configurations, mitigating misconfiguration risks.",
        "Built Python automation scripts for log analysis, reducing incident response time by 50%.",
        "Implemented MFA and encryption protocols, enhancing overall data protection.",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Network Security Intern",
      company: "Aero Contractors of Nigeria, Lagos",
      period: "Feb 2017 – Oct 2019",
      description: [
        "Configured and maintained Cisco routers, Fortinet firewalls, and VPNs for secure connectivity.",
        "Applied DDoS mitigation techniques, improving network stability and uptime by 20%.",
        "Optimised Wireshark for packet analysis and anomaly detection.",
        "Assisted in implementing secure network architectures, reducing unauthorised access.",
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
                    <span className="text-green-400 mr-2">-</span>
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
