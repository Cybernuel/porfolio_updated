"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState("blue")

  const skillCategories = [
    {
      id: "blue",
      name: "Blue Team & Detection",
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "SIEM (Splunk, ELK)", level: 85 },
        { name: "Log Analysis & Correlation", level: 90 },
        { name: "Incident Response", level: 80 },
        { name: "Threat Hunting", level: 88 },
        { name: "Packet Analysis (Wireshark)", level: 85 },
      ],
    },
    {
      id: "red",
      name: "Red Team & Offensive Security",
      color: "from-red-500 to-pink-500",
      skills: [
        { name: "Penetration Testing", level: 80 },
        { name: "Metasploit / Armitage", level: 78 },
        { name: "Web App Security (Burp Suite)", level: 82 },
        { name: "Password Attacks (Hashcat, Hydra)", level: 85 },
        { name: "Active Directory Attacks", level: 75 },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & Infrastructure Security",
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "Azure Security", level: 70 },
        { name: "AWS IAM & Monitoring", level: 65 },
        { name: "Firewall & IDS/IPS Config", level: 78 },
        { name: "Vulnerability Management (Qualys, Nessus)", level: 80 },
        { name: "Virtualisation & Labs (VMware, VirtualBox)", level: 85 },
      ],
    },
    {
      id: "automation",
      name: "Coding & Automation",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python (Security Scripting)", level: 82 },
        { name: "Bash / PowerShell", level: 75 },
        { name: "Log Parsing & Automation", level: 80 },
        { name: "Custom Security Tools", level: 78 },
        { name: "Git & Version Control", level: 70 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.15),transparent_70%)]" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 text-center"
          >
            My <span className="text-cyan-400">Cyber Skills</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white`
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="relative h-[400px]">
            <AnimatePresence mode="wait">
              {skillCategories.map(
                (category) =>
                  activeCategory === category.id && (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-8">
                          {category.skills.map((skill, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <div className="flex justify-between mb-2">
                                <span className="text-white/90 font-medium">{skill.name}</span>
                                <span className="text-white/50">{skill.level}%</span>
                              </div>
                              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                  className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="relative hidden md:block">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5 }}
                              className="relative w-[300px] h-[300px]"
                            >
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-full opacity-20 blur-3xl`}
                              />

                              <svg width="300" height="300" viewBox="0 0 300 300">
                                <g transform="translate(150,150)">
                                  <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    d={`M ${category.skills
                                      .map((skill, i) => {
                                        const angle = (i / category.skills.length) * Math.PI * 2 - Math.PI / 2
                                        const radius = (skill.level / 100) * 120
                                        return `${i === 0 ? "M" : "L"} ${Math.cos(angle) * radius},${Math.sin(angle) * radius}`
                                      })
                                      .join(" ")} Z`}
                                    fill="none"
                                    stroke={`url(#gradient-${category.id})`}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                  />
                                  <defs>
                                    <linearGradient id={`gradient-${category.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop
                                        offset="0%"
                                        stopColor={
                                          category.id === "blue"
                                            ? "#06b6d4"
                                            : category.id === "red"
                                              ? "#ef4444"
                                              : category.id === "cloud"
                                                ? "#8b5cf6"
                                                : "#10b981"
                                        }
                                      />
                                      <stop
                                        offset="100%"
                                        stopColor={
                                          category.id === "blue"
                                            ? "#3b82f6"
                                            : category.id === "red"
                                              ? "#ec4899"
                                              : category.id === "cloud"
                                                ? "#6366f1"
                                                : "#34d399"
                                        }
                                      />
                                    </linearGradient>
                                  </defs>

                                  {category.skills.map((skill, i) => {
                                    const angle = (i / category.skills.length) * Math.PI * 2 - Math.PI / 2
                                    const radius = (skill.level / 100) * 120
                                    return (
                                      <motion.circle
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.1 * i }}
                                        cx={Math.cos(angle) * radius}
                                        cy={Math.sin(angle) * radius}
                                        r="4"
                                        fill="white"
                                      />
                                    )
                                  })}
                                </g>
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
