"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ProfileCard() {
  return (
    <div className="h-full flex flex-col text-gray-300">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-shrink-0 md:w-48 h-48 relative border-4 border-cyan-500/50 rounded-lg overflow-hidden"
        >
          {/* Profile Image Placeholder - replace with Emmanuel’s real photo */}
          <Image src="/Image1.png" alt="Emmanuel Adegbite" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Emmanuel Adegbite
          </h1>
          <h2 className="text-xl font-mono border-b border-gray-700 pb-2 mb-3">
            <span className="text-cyan-400">Cybersecurity</span>
            <span className="text-purple-400"> Analyst</span>
            <span className="text-xs ml-2 text-green-400 animate-pulse">v2.5</span>
          </h2>

          <div className="space-y-2 text-sm font-mono">
            <div className="flex items-start">
              <span className="text-cyan-400 mr-2">{">"}</span>
              <p>
                Motivated IT professional with hands-on experience in security operations, 
                network defence, penetration testing, and incident response. Skilled in 
                translating technical knowledge into practical solutions and user-friendly support.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-purple-400 mr-2">{">"}</span>
              <p>
                Adept in SIEM (Splunk & ELK), cloud security (AWS & Azure), Active Directory, 
                firewall configuration, and Python scripting. Passionate about securing systems, 
                automating workflows, and bridging technical expertise with customer interaction.
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Penetration Testing",
              "Incident Response",
              "SIEM (Splunk/ELK)",
              "Cloud Security",
              "Firewall Configuration",
              "Python Automation",
              "Customer Service"
            ].map((tag, i) => (
              <span
                key={i}
                className="inline-block px-2 py-1 text-xs font-mono bg-gray-800 border border-gray-700 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-auto"
      >
        <div className="border border-gray-700 rounded bg-gray-800/50 p-3">
          <div className="flex items-center text-xs font-mono mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span>SYSTEM STATUS: ONLINE</span>
          </div>
          <div className="text-xs font-mono">
            <div className="flex items-start mb-1">
              <span className="text-cyan-400 mr-2 inline-block w-20">Location:</span>
              <span>United Kingdom</span>
            </div>
            <div className="flex items-start mb-1">
              <span className="text-cyan-400 mr-2 inline-block w-20">Languages:</span>
              <span>English (Native), French (Basic)</span>
            </div>
            <div className="flex items-start mb-1">
              <span className="text-cyan-400 mr-2 inline-block w-20">GitHub:</span>
              <a href="https://github.com/cybernuel" target="_blank" className="text-blue-400 hover:underline">
                github.com/cybernuel
              </a>
            </div>
            <div className="flex items-start mb-1">
              <span className="text-cyan-400 mr-2 inline-block w-20">LinkedIn:</span>
              <a href="https://linkedin.com/in/thedamilare" target="_blank" className="text-blue-400 hover:underline">
                linkedin.com/in/thedamilare
              </a>
            </div>
            <div className="flex items-start">
              <span className="text-cyan-400 mr-2 inline-block w-20">OS Version:</span>
              <span>
                CyberSec OS 2.0.25 <span className="text-green-400">[STABLE]</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
