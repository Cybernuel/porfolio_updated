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
      title: "Cybersecurity Intern (Network & Systems Security)",
      company: "Aero Contractors of Nigeria",
      period: "2019 – 2020",
      description: [
        "Configured Cisco routers, enterprise networks, and VPNs.",
        "Assisted in hardening systems against DDoS and external threats.",
        "Gained real-world exposure to enterprise network security operations.",
      ],
      color: "from-fuchsia-500 to-purple-600",
    },
    {
      title: "Cybersecurity Analyst",
      company: "FemTech IT",
      period: "2020 – 2021",
      description: [
        "Designed and implemented incident response protocols.",
        "Deployed and monitored SIEM tools to improve detection visibility.",
        "Conducted penetration tests and vulnerability assessments.",
        "Reduced breach detection times significantly.",
      ],
      color: "from-purple-500 to-violet-600",
    },
    {
      title: "Cybersecurity Analyst",
      company: "DOTS ICT Institute of Technology",
      period: "2021 – 2022",
      description: [
        "Led security assessments and monitored intrusion detection systems.",
        "Developed and enforced access control and endpoint security policies.",
        "Delivered security awareness training for staff and students.",
      ],
      color: "from-violet-500 to-indigo-600",
    },
    {
      title: "Customer Service & Responsible Gaming Support",
      company: "William Hill",
      period: "2022 – 2023",
      description: [
        "Guided users through responsible gaming and self-exclusion tools.",
        "Resolved customer issues with empathy and security awareness.",
        "Ensured compliance with data protection and security practices.",
      ],
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "MSc Cybersecurity & International Student Ambassador",
      company: "Edinburgh Napier University",
      period: "2023 – Present",
      description: [
        "Pursuing MSc in Cybersecurity with focus on threat intelligence and cloud security.",
        "Representing the university at conferences and mentoring newcomers.",
        "Exploring advanced topics such as AI-driven cyber defence and incident response.",
      ],
      color: "from-blue-500 to-cyan-600",
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
    <section id="experience" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]" />

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
                    <ChevronRight
                      className={`mr-2 transition-opacity ${activeExperience === index ? "opacity-100" : "opacity-0"}`}
                    />
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
              <div className="relative h-[400px]">
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
                          <div
                            className={`h-full rounded-xl p-8 bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden relative`}
                          >
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
                                  <div
                                    className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 mr-3 flex-shrink-0`}
                                  ></div>
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
