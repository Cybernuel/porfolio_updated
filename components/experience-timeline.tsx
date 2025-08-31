"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    id: 1,
    title: "Cybersecurity Analyst",
    company: "DOTS ICT Institute of Technology",
    period: "Jan 2023 – Aug 2023",
    description: [
      "Designed and implemented incident response protocols to improve detection and response times.",
      "Deployed and fine-tuned SIEM tools for log collection, monitoring, and alerting.",
      "Led penetration testing activities to uncover vulnerabilities and strengthen system security.",
      "Provided cybersecurity awareness training to staff and students to reduce human risk factors.",
    ],
    skills: ["Incident Response", "SIEM", "Penetration Testing", "Cyber Awareness"],
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Cybersecurity Analyst Intern",
    company: "FemTech IT",
    period: "Aug 2022 – Dec 2022",
    description: [
      "Conducted vulnerability scans and assisted in remediation efforts across client systems.",
      "Monitored firewalls and intrusion detection systems to detect and mitigate threats.",
      "Assisted senior analysts in incident investigations and reporting.",
      "Collaborated with IT teams to harden systems and enforce security best practices.",
    ],
    skills: ["Vulnerability Scanning", "IDS/IPS", "Firewall Management", "Threat Detection"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 3,
    title: "IT Support & Network Security Intern",
    company: "Aero Contractors of Nigeria",
    period: "Apr 2021 – Sep 2021",
    description: [
      "Configured Cisco routers and switches to support enterprise network operations.",
      "Set up and managed VPNs for secure remote access.",
      "Implemented basic hardening techniques to protect against DDoS and malware attacks.",
      "Provided first-line IT support to staff and resolved networking issues promptly.",
    ],
    skills: ["Cisco Networking", "VPN Setup", "System Hardening", "IT Support"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    title: "International Student Ambassador",
    company: "Edinburgh Napier University",
    period: "Sep 2023 – Present",
    description: [
      "Represented the university at open days, conferences, and student events.",
      "Mentored new international students, easing their transition into university life.",
      "Presented on cybersecurity trends and student opportunities to audiences of 100+.",
      "Built strong connections between staff, students, and prospective applicants.",
    ],
    skills: ["Public Speaking", "Mentorship", "Community Engagement", "Cybersecurity Advocacy"],
    color: "from-cyan-500 to-green-500",
  },
]

export default function ExperienceTimeline() {
  const [activeExperience, setActiveExperience] = useState(1)

  return (
    <div className="grid md:grid-cols-12 gap-8">
      <div className="md:col-span-4">
        <div className="sticky top-20 space-y-4">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveExperience(exp.id)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                activeExperience === exp.id
                  ? `bg-gradient-to-r ${exp.color} text-white`
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
              }`}
            >
              <h3 className="font-bold">{exp.title}</h3>
              <p className={activeExperience === exp.id ? "text-white/80" : "text-gray-500"}>{exp.company}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="md:col-span-8">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: activeExperience === exp.id ? 1 : 0,
              y: activeExperience === exp.id ? 0 : 20,
              display: activeExperience === exp.id ? "block" : "none",
            }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-800/30 border-gray-700 p-6 overflow-hidden relative">
              <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${exp.color}`}></div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="text-gray-400">{exp.company}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                {exp.description.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${exp.color} mt-2`}></div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill, index) => (
                  <Badge key={index} className={`bg-gradient-to-r ${exp.color} bg-opacity-20 text-white`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
