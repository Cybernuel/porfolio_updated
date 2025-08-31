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
        { name: "SIEM (Splunk, ELK, AlienVault)", level: 90 },
        { name: "Log Analysis & Threat Correlation", level: 92 },
        { name: "Incident Response & SOC Ops", level: 88 },
        { name: "Threat Hunting & Intelligence", level: 86 },
        { name: "Packet Analysis (Wireshark, Snort)", level: 85 },
      ],
    },
    {
      id: "red",
      name: "Red Team & Offensive Security",
      color: "from-red-500 to-pink-500",
      skills: [
        { name: "Penetration Testing", level: 85 },
        { name: "Metasploit / Armitage", level: 80 },
        { name: "Web App Security (Burp Suite)", level: 82 },
        { name: "Password Attacks (Hashcat, Hydra)", level: 83 },
        { name: "Active Directory Attacks", level: 78 },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & Infrastructure Security",
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "Azure Security & Identity", level: 80 },
        { name: "AWS IAM & Monitoring", level: 70 },
        { name: "Firewall & IDS/IPS Config", level: 82 },
        { name: "Vulnerability Management (Qualys, Nessus)", level: 85 },
        { name: "Virtualisation & Lab Environments", level: 88 },
      ],
    },
    {
      id: "automation",
      name: "Coding & Automation",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python (Security & Log Scripting)", level: 88 },
        { name: "Bash / PowerShell", level: 80 },
        { name: "SOC Workflow Automation", level: 82 },
        { name: "Custom Security Tools", level: 78 },
        { name: "Git & Version Control", level: 75 },
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

          {/* Category Tabs */}
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

          {/* Skills Grid + Radar Graph */}
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
