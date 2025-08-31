"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function ProjectsPanel() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "SSH Brute-Force",
      description:
        "A Python SSH brute-force tool for simulating password-guessing attacks on SSH systems, built for ethical hacking and education.",
      technologies: ["Python", "SSH", "Brute Force", "Ethical Hacking"],
      image: "/ssh_bruteforcer.jpg?height=400&width=600",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Password Cracking",
      description:
        "Python scripts for automating password cracking with Hashcat and John the Ripper, built for ethical hacking and research.",
      technologies: ["Python", "Hashcat", "John the Ripper"],
      image: "/password_cracking.jpg?height=400&width=600",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Armitage Network Attack",
      description:
        "Python scripts for automating network attacks with Metasploit, targeting various systems. Ideal for ethical hacking and research.",
      technologies: ["Python", "Metasploit", "Network Security"],
      image: "/Armitage Network Attack.jpg?height=400&width=600",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Port Scanner",
      description:
        "A fast, multi-threaded Python port scanner for ethical hacking, recon, and pentesting labs.",
      technologies: ["Python", "Network Security", "Ethical Hacking"],
      image: "/Port Scanner.png?height=400&width=600",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "SubHunter",
      description:
        "A simple Python subdomain enumeration tool that checks DNS resolution.",
      technologies: ["Python", "Subdomain Enumeration", "Ethical Hacking"],
      image: "/sub_huter.jpg?height=400&width=600",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Honey Pot",
      description:
        "T-Pot is a honeypot platform that captures and analyses real-world attacks for threat intelligence.",
      technologies: ["TPot", "Honeypot", "Cybersecurity", "Threat Intelligence"],
      image: "/honey_pot.png?height=400&width=600",
      color: "from-red-400 to-orange-400",
    },
    {
      title: "Ransomware Simulator",
      description:
        "Simulates file encryption with .locked extension and a ransom note, with safe decryption.",
      technologies: ["Python", "Ransomware", "Cybersecurity"],
      image: "/rasomeware.png?height=400&width=600",
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "Log Analyzer",
      description:
        "A Python-powered log analysis tool that simulates how a SOC analyst hunts for suspicious activity in logs.",
      technologies: ["Python", "Blue Team", "Threat Hunting"],
      image: "/minilog_analyzer.png?height=400&width=600",
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Packet Sniffer",
      description:
        "A lightweight Python packet sniffer using Scapy, built for real-time network traffic analysis.",
      technologies: ["Python", "Network Security", "Cybersecurity"],
      image: "/Packet_Sniffer.png?height=400&width=600",
      color: "from-green-400 to-teal-400",
    },
    {
      title: "WebApp Recon & Exploitation",
      description:
        "Hands-on red team exercises focused on discovering and exploiting common web application vulnerabilities.",
      technologies: ["OWASP", "Burp Suite", "Red Team"],
      image: "/web_exploit.png?height=400&width=600",
      color: "from-yellow-400 to-orange-400",
    },
    {
      title: "Enumeration & Privilege Escalation",
      description:
        "Active Directory internal enumeration, password attacks, and privilege escalation exercises.",
      technologies: ["AD", "Red Team", "Hashcat"],
      image: "/AD_LAB.png?height=400&width=600",
      color: "from-red-400 to-pink-500",
    },
    {
      title: "Network Traffic Capture & Credential Sniffing",
      description:
        "Simulated attacks intercepting data like usernames, passwords, and NTLM hashes via insecure services.",
      technologies: ["Red Team", "Protocols", "Network Security"],
      image: "/network.png?height=400&width=600",
      color: "from-purple-400 to-indigo-500",
    },
    {
      title: "Phishing Simulation Lab",
      description:
        "Demonstrates how social engineering and phishing payload delivery can be used by attackers.",
      technologies: ["Red Team", "Phishing"],
      image: "/phishing.png?height=400&width=600",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "OTP Bypass",
      description:
        "Demonstrates common OTP vulnerabilities and attack scenarios.",
      technologies: ["Red Team", "OTP"],
      image: "/otp.png?height=400&width=600",
      color: "from-green-400 to-teal-500",
    },
    {
      title: "Breach Analysis",
      description:
        "A real-world web server compromise, analyzing network traffic (.pcap) to trace attacker activity.",
      technologies: ["Red Team", "Wireshark"],
      image: "/wireshark.png?height=400&width=600",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "OTP Simulation",
      description:
        "A deliberately vulnerable OTP authentication system built with Python & Flask for testing and learning.",
      technologies: ["Pen Test", "Python"],
      image: "/otp_simulation.png?height=400&width=600",
      color: "from-purple-400 to-pink-400",
    },
  ]

  return (
    <div className="h-full flex flex-col text-gray-300 overflow-hidden">
      <div className="flex items-center space-x-1 mb-4 overflow-x-auto hide-scrollbar">
        {projects.map((project, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`px-3 py-1 text-xs font-mono whitespace-nowrap rounded-md flex-shrink-0 ${
              activeProject === index
                ? `bg-gradient-to-r ${project.color} text-white`
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => setActiveProject(index)}
          >
            {project.title}
          </motion.button>
        ))}
      </div>

      <div className="flex-1 overflow-hidden">
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="h-full flex flex-col"
        >
          <div className="relative w-full h-48 mb-4 overflow-hidden border border-gray-700 rounded">
            <Image
              src={projects[activeProject].image || "/placeholder.svg"}
              alt={projects[activeProject].title}
              fill
              className="object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent`}></div>
            <div className="absolute bottom-0 left-0 w-full p-3">
              <h3 className="text-white font-bold">{projects[activeProject].title}</h3>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto hide-scrollbar bg-black/20 border border-gray-700 rounded p-4">
            <div className="mb-4 font-mono">
              <div className="flex items-center mb-2">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${projects[activeProject].color} mr-2`}></div>
                <span className="text-sm font-bold">PROJECT DESCRIPTION</span>
              </div>
              <p className="text-sm text-gray-300 ml-4">{projects[activeProject].description}</p>
            </div>

            <div className="mb-4">
              <div className="flex items-center mb-2 font-mono">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${projects[activeProject].color} mr-2`}></div>
                <span className="text-sm font-bold">TECHNOLOGIES & SKILLS</span>
              </div>
              <div className="flex flex-wrap gap-2 ml-4">
                {projects[activeProject].technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className={`inline-block px-2 py-1 text-xs bg-gradient-to-r ${projects[activeProject].color} bg-opacity-20 rounded`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex items-center mb-2 font-mono">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${projects[activeProject].color} mr-2`}></div>
                <span className="text-sm font-bold">PROJECT DATA</span>
              </div>

              <div className="grid grid-cols-2 gap-2 ml-4 text-xs">
                <div className="bg-black/30 border border-gray-700 rounded p-2">
                  <span className="text-gray-400 block mb-1">Role:</span>
                  <span>Ethical Hacker / Researcher</span>
                </div>
                <div className="bg-black/30 border border-gray-700 rounded p-2">
                  <span className="text-gray-400 block mb-1">Team Size:</span>
                  <span>Solo</span>
                </div>
                <div className="bg-black/30 border border-gray-700 rounded p-2">
                  <span className="text-gray-400 block mb-1">Duration:</span>
                  <span>Varies per Project</span>
                </div>
                <div className="bg-black/30 border border-gray-700 rounded p-2">
                  <span className="text-gray-400 block mb-1">Status:</span>
                  <span className="text-green-400">Active / Completed</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
