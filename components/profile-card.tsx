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
          {/* Using a placeholder image - replace with actual profile photo */}
          <Image src="/Image1.png" alt="Emmanuel Damilare" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Emmanuel Damilare
          </h1>
          <h2 className="text-xl font-mono border-b border-gray-700 pb-2 mb-3">
            <span className="text-cyan-400">CyberSecurity</span>
            <span className="text-purple-400"> Analyst</span>
            <span className="text-xs ml-2 text-green-400 animate-pulse">v2.0</span>
          </h2>

          <div className="space-y-2 text-sm font-mono">
            <div className="flex items-start">
              <span className="text-cyan-400 mr-2">{">"}</span>
              <p>
               Cybersecurity professional with expertise in penetration testing, offensive and defensive security, Active Directory hardening, and cloud security. I design and execute hands-on projects simulating real-world attack and defense scenarios, building custom tools and automating workflows with Python and Bash.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-purple-400 mr-2">{">"}</span>
              <p>
                Currently focused on leveraging advanced TTPs and cloud threat intelligence to strengthen enterprise security operations. Passionate about bridging strategy and technical execution, contributing to red/blue team engagements, and advancing secure cloud environments.
              </p>
            </div>
          </div>




          <div className="mt-4 flex flex-wrap gap-2">
            {["Penetration Testing", "Offensive Security", "Python Automation", "Threat Intelligence", "Incident Response"].map((tag, i) => (
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
              <span>Scotland, United Kingdom</span>
            </div>
            <div className="flex items-start mb-1">
              <span className="text-cyan-400 mr-2 inline-block w-20">Languages:</span>
              <span>English</span>
            </div>
            <div className="flex items-start">
              <span className="text-cyan-400 mr-2 inline-block w-20">OS Version:</span>
              <span>
                CyberSecurity OS 2.0.24 <span className="text-green-400">[STABLE]</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
