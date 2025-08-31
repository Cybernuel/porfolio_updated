"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeExperience, setActiveExperience] = useState(0)

  const experiences = [
    {
      title: "Customer Service Representative",
      company: "William Hill, UK",
      period: "Aug 2024 – Present",
      description: [
        "Delivered prompt support across chat, phone, and email, resolving account and betting issues.",
        "Maintained an empathetic tone, contributing to a 20% rise in positive feedback ratings.",
        "Collaborated with internal teams to resolve complex cases, reducing repeat contacts by 25%.",
        "Promoted responsible gambling practices through self-exclusion tools and account safety measures.",
      ],
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "International Student Ambassador",
      company: "Edinburgh Napier University, UK",
      period: "Nov 2024 – Present",
      description: [
        "Acted as liaison between the university and prospective international students.",
        "Delivered presentations at open days and events, reaching 500+ prospective students.",
        "Discussed cybersecurity career paths, boosting interest in tech programs by 18%.",
        "Mentored international students, supporting cultural adaptation and academic success.",
      ],
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Cybersecurity Analyst Intern",
      company: "Hacksecure, UK",
      period: "May 2025 – Jun 2025",
      description: [
        "Conducted vulnerability assessments and penetration testing on client systems.",
        "Managed Active Directory accounts and applied security policies.",
        "Supported incident response by analysing logs and drafting reports.",
        "Configured Snort IDS rules and monitored network traffic in real time.",
      ],
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Cybersecurity Analyst",
      company: "DOTS ICT Institute of Technology, Nigeria",
      period: "Mar 2023 – Jan 2024",
      description: [
        "Led penetration tests and red team simulations, reducing risk exposure by 40%.",
        "Developed custom firewall configurations and integrated Snort-based IDS.",
        "Designed incident response protocols that cut breach detection time by 35%.",
        "Deployed SIEM tools (Splunk & ELK Stack) for real-time threat monitoring.",
      ],
      color: "from-violet-500 to-indigo-600",
    },
    {
      title: "Cybersecurity Analyst",
      company: "FemTech IT Ltd, Nigeria",
      period: "Mar 2021 – Feb 2023",
      description: [
        "Performed regular audits based on ISO 27001 & NIST frameworks.",
        "Strengthened AWS and Azure cloud security configurations.",
        "Developed Python automation scripts for log analysis, cutting response time by 50%.",
        "Implemented MFA and encryption protocols for stronger data protection.",
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Network Security Intern",
      company: "Aero Contractors of Nigeria, Lagos",
      period: "Feb 2017 – Oct 2019",
      description: [
        "Configured and maintained Cisco routers, Fortinet firewalls, and VPNs.",
        "Applied DDoS mitigation techniques, improving uptime by 20%.",
        "Used Wireshark for real-time packet analysis and early threat detection.",
        "Assisted in secure network architecture implementation to reduce intrusions.",
      ],
      color: "from-fuchsia-500 to-purple-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="max-w-5xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 text-center">
            Professional <span className="text-purple-500">Experience</span>
          </motion.h2>

          <div className="grid md:grid-cols-12 gap-8">
            <motion.div variants={itemVariants} className="md:col-span-4">
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveExperience(index)}
                    whileHover={{ x: 5 }}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center ${
                      activeExperience === index
                        ? `bg-gradient-to-r ${exp.color} text-white`
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    <ChevronRight className={`mr-2 transition-opacity ${activeExperience === index ? "opacity-100" : "opacity-0"}`} />
                    <div>
                      <h3 className="font-bold">{exp.title}</h3>
                      <p className={`text-sm ${activeExperience === index ? "text-white/80" : "text-white/50"}`}>
                        {exp.company}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-8">
              <div className="relative h-[420px]">
                <AnimatePresence mode="wait">
                  {experiences.map(
                    (exp, index) =>
                      activeExperience === index && (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <div className="h-full rounded-xl p-8 bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden relative">
                            <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${exp.color}`}></div>
                            <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                            <div className="flex items-center text-white/70 mb-6">
                              <span>{exp.company}</span>
                              <span className="mx-2">•</span>
                              <span>{exp.period}</span>
                            </div>

                            <div className="space-y-4">
                              {exp.description.map((item, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                  className="flex items-start"
                                >
                                  <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 mr-3 flex-shrink-0`}></div>
                                  <p className="text-white/80">{item}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ),
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
