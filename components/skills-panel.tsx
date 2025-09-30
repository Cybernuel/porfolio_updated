
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function SkillsPanel() {
  const [activeTab, setActiveTab] = useState("Offense")

  const tabs = [
    { id: "Offense", label: "Offense", color: "from-pink-500 to-purple-500" },
    { id: "Defensive Security", label: "Defense", color: "from-cyan-500 to-blue-500" },
    { id: "Cloud & Identity Security", label: "Cloud & Identity", color: "from-green-500 to-blue-500" },
    { id: "Automation & Threat Intelligence", label: "Automation & Threat Intelligence", color: "from-orange-500 to-pink-500" },
    { id: "IT Operations & Professional Skills", label: "IT Ops & Professional", color: "from-yellow-500 to-red-500" },
  ]

  const proficiencyLevels = {
    expert: {
      label: "Expert",
      description: "Deep knowledge and extensive experience; can lead and innovate in this area",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    advanced: {
      label: "Advanced",
      description: "Strong competency with broad application; can mentor others",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    proficient: {
      label: "Proficient",
      description: "Solid working knowledge; can work independently",
      color: "bg-gradient-to-r from-green-500 to-teal-500",
    },
    familiar: {
      label: "Familiar",
      description: "Basic understanding; can apply with guidance",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
  }

  const skills = {
    Offense: [
      {
        name: "Penetration Testing",
        level: "expert",
        context: "Executed red team simulations and pentests that uncovered critical vulnerabilities in enterprise systems.",
      },
      {
        name: "Vulnerability Assessment",
        level: "advanced",
        context: "Used Nessus, Burp Suite, and custom scripts to detect and prioritise remediation of security gaps.",
      },
      {
        name: "Ethical Hacking & Methodologies",
        level: "proficient",
        context: "Applied recognised ethical hacking frameworks to networks and web applications.",
      },
      {
        name: "Active Directory Attacks",
        level: "advanced",
        context: "Simulated Kerberoasting, domain enumeration, and privilege escalation to test AD resilience.",
      },
    ],
    "Defensive Security": [
      {
        name: "Incident Response",
        level: "expert",
        context: "Developed IR playbooks and reduced detection-to-response times in SOC workflows.",
      },
      {
        name: "SIEM (Splunk, ELK, AlienVault)",
        level: "advanced",
        context: "Configured and monitored SIEM solutions, improving detection visibility across endpoints and networks.",
      },
      {
        name: "Firewall & IDS/IPS",
        level: "proficient",
        context: "Deployed Snort IDS/IPS, tuned firewall rules, and managed VPNs to secure enterprise connectivity.",
      },
      {
        name: "DDoS Mitigation",
        level: "familiar",
        context: "Implemented basic DDoS prevention and uptime resilience strategies.",
      },
      {
        name: "Secure Network Configuration",
        level: "proficient",
        context: "Configured VPNs and network policies (Cisco Routers) to strengthen enterprise security.",
      },
      {
        name: "Troubleshooting & Diagnostics",
        level: "advanced",
        context: "Diagnosed and resolved hardware/software issues across enterprise environments.",
      },
    ],
    "Cloud & Identity Security": [
      {
        name: "Azure & AWS Security",
        level: "advanced",
        context: "Hardened cloud workloads, identity configurations, and monitored for misconfigurations.",
      },
      {
        name: "Identity & Access Management (IAM)",
        level: "proficient",
        context: "Applied MFA, RBAC, and conditional access policies to strengthen identity security.",
      },
      {
        name: "Active Directory Hardening",
        level: "advanced",
        context: "Secured AD environments with GPO enforcement, auditing, and privilege monitoring.",
      },
      {
        name: "Compliance & Governance",
        level: "familiar",
        context: "Applied ISO 27001 and NIST guidelines for audits and risk management.",
      },
      {
        name: "SCCM & Intune MDM",
        level: "proficient",
        context: "Packaged and deployed apps, managed endpoints, and enforced device compliance with Intune/Azure MDM.",
      },
      {
        name: "Virtualisation (VMware & Citrix)",
        level: "advanced",
        context: "Deployed and managed VMware Esxi/vCenter, and Citrix XenApp/Desktop environments.",
      },
    ],
    "Automation & Threat Intelligence": [
      {
        name: "Python Scripting",
        level: "expert",
        context: "Built log analysis and security automation tools that accelerated SOC response by 50%.",
      },
      {
        name: "Threat Intelligence",
        level: "advanced",
        context: "Correlated CTI feeds (Let’s Defend, Threat Intel sources) to anticipate adversary TTPs.",
      },
      {
        name: "YARA & Detection Rules",
        level: "proficient",
        context: "Wrote YARA rules and signatures to detect malware, persistence, and log anomalies.",
      },
      {
        name: "SOC Workflow Automation",
        level: "familiar",
        context: "Integrated automation scripts into SOC pipelines for alert triage and reporting.",
      },
      {
        name: "Batch & PowerShell Scripting",
        level: "proficient",
        context: "Automated system administration and security workflows with scripting.",
      },
    ],
    "IT Operations & Professional Skills": [
      {
        name: "ITIL Framework",
        level: "advanced",
        context: "Applied ITIL practices for incident, problem, and change management in IT service delivery.",
      },
      {
        name: "Operating Systems Support",
        level: "advanced",
        context: "Provided desktop & mobile support across Windows, Linux, macOS, iOS, and Android platforms.",
      },
      {
        name: "Microsoft Server & Exchange",
        level: "proficient",
        context: "Managed Windows Server (2003–2012 R2), SQL, and Exchange Server 2016 environments.",
      },
      {
        name: "Customer Service & CRM",
        level: "expert",
        context: "Delivered technical support via phone/chat/email using CRM platforms with excellent customer satisfaction.",
      },
      {
        name: "Service Desk & Ticketing Tools",
        level: "advanced",
        context: "Handled incidents with ServiceNow, Remedy, and Cherwell tools, ensuring SLA compliance.",
      },
      {
        name: "Team Collaboration & Training",
        level: "proficient",
        context: "Led team sessions, documented processes, and trained colleagues on technical workflows.",
      },
    ],
  }

  const additionalSkills = {
    Offense: ["Nmap", "Burp Suite", "Metasploit", "Hashcat", "Wireshark"],
    "Defensive Security": ["Splunk", "ELK Stack", "Snort", "AlienVault", "VirusTotal", "EDR Tools"],
    "Cloud & Identity Security": ["Microsoft Azure", "Azure AD", "EntraID", "MFA", "VPN", "Data Encryption", "Security Auditing"],
    "Automation & Threat Intelligence": ["Python", "YARA", "AnyRun", "FLARE VM", "TryHackMe Labs", "Threat Intel Feeds"],
    "IT Operations & Professional Skills": [
      "MS Office Suite",
      "VMware",
      "Citrix",
      "Browsers (IE, Edge, Chrome, Safari, Opera, Firefox)",
      "Outlook",
      "Android/iOS/OSX",
      "Conflict Resolution",
      "Active Listening",
      "Technical Documentation",
    ],
  }

  return (
    <div className="h-full flex flex-col text-gray-300 overflow-auto">
      {/* Tabs */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex mb-4 border-b border-gray-700 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-1 text-xs font-mono rounded-t-md ${
              activeTab === tab.id
                ? `bg-gradient-to-r ${tab.color} text-white`
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Skills & Legend */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {/* Proficiency legend */}
        <div className="mb-6 bg-gray-800/30 p-3 rounded border border-gray-700">
          <h3 className="text-xs font-mono mb-2 text-cyan-400">// PROFICIENCY LEVELS</h3>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(proficiencyLevels).map(([key, level]) => (
              <div key={key} className="flex items-start gap-2">
                <div className={`w-2 h-2 mt-1 rounded-full ${level.color}`}></div>
                <div>
                  <span className="text-xs font-medium">{level.label}</span>
                  <p className="text-xs text-gray-400">{level.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill cards */}
        <div className="grid gap-4">
          {skills[activeTab as keyof typeof skills].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-white">{skill.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{skill.context}</p>
                </div>
                <Badge
                  className={`${proficiencyLevels[skill.level as keyof typeof proficiencyLevels].color} text-white border-none`}
                >
                  {proficiencyLevels[skill.level as keyof typeof proficiencyLevels].label}
                </Badge>
              </div>

              {/* Skill bar */}
              <div className="w-full bg-gray-700 rounded-full h-1.5 mt-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      skill.level === "expert"
                        ? "100%"
                        : skill.level === "advanced"
                        ? "80%"
                        : skill.level === "proficient"
                        ? "60%"
                        : "40%",
                  }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-full rounded-full ${proficiencyLevels[skill.level as keyof typeof proficiencyLevels].color}`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 bg-gray-800/30 p-4 rounded border border-gray-700">
          <h3 className="text-xs font-mono mb-3 text-cyan-400">// ADDITIONAL SKILLS & TOOLS</h3>
          <div className="flex flex-wrap gap-2">
            {additionalSkills[activeTab as keyof typeof additionalSkills].map((tool, index) => (
              <Badge key={index} variant="outline" className="bg-gray-800/50">
                {tool}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

