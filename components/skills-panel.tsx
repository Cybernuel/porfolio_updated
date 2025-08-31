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
        context: "Designed and executed hands-on attacks simulating real-world scenarios, identifying vulnerabilities and reporting actionable findings.",
      },
      {
        name: "Red Teaming",
        level: "advanced",
        context: "Performed full-scope engagements emulating adversaries, including social engineering, lateral movement, and privilege escalation.",
      },
      {
        name: "Cloud Security Offense",
        level: "proficient",
        context: "Tested and secured Microsoft Azure environments, identity and access management, and cloud workload protections.",
      },
      {
        name: "Exploitation & Vulnerability Analysis",
        level: "expert",
        context: "Leveraged tools like Metasploit, Armitage, and custom scripts to discover and exploit security weaknesses.",
      },
      {
        name: "Active Directory Attacks",
        level: "advanced",
        context: "Conducted domain enumeration, Kerberos attacks, privilege escalation, and Group Policy exploitation in enterprise environments.",
      },
      {
        name: "Custom Tooling & Automation",
        level: "expert",
        context: "Developed Python and Bash scripts to automate offensive security workflows, reconnaissance, and post-exploitation tasks.",
      },
    ],
    "Defensive Security": [
      {
        name: "Blue Teaming & Incident Response",
        level: "expert",
        context: "Monitored, detected, and responded to threats across enterprise networks, using SIEM platforms and threat intelligence to reduce dwell time.",
      },
      {
        name: "Vulnerability Management & Hardening",
        level: "advanced",
        context: "Performed system and application hardening, patch management, and risk assessment to improve overall security posture.",
      },
      {
        name: "Network & Host Monitoring",
        level: "proficient",
        context: "Implemented IDS/IPS, traffic analysis, and anomaly detection using tools like Snort, Wireshark, and ELK Stack.",
      },
      {
        name: "Active Directory Defense",
        level: "expert",
        context: "Hardened AD environments, applied Group Policy security measures, and monitored for privilege escalation or lateral movement attempts.",
      },
    ],
    "Cloud & Identity Security": [
      {
        name: "Cloud Security Architecture",
        level: "expert",
        context: "Designed and implemented secure Azure environments, including identity management, access control, and workload protection.",
      },
      {
        name: "Identity & Access Management (IAM)",
        level: "advanced",
        context: "Configured secure policies, MFA, role-based access, and monitored identity activity for anomalies.",
      },
      {
        name: "Cloud Threat Detection",
        level: "proficient",
        context: "Used cloud-native monitoring and third-party tools to detect misconfigurations, vulnerabilities, and potential breaches.",
      },
      {
        name: "Compliance & Security Governance",
        level: "expert",
        context: "Applied best practices for cloud security standards, audit readiness, and risk mitigation strategies.",
      },
    ],
    "Automation & Threat Intelligence": [
      {
        name: "Python & Bash Scripting",
        level: "expert",
        context: "Automated repetitive security tasks, log analysis, and attack simulations to improve efficiency and accuracy.",
      },
      {
        name: "Threat Intelligence Analysis",
        level: "advanced",
        context: "Collected, analyzed, and applied intelligence feeds to anticipate attacker TTPs and proactively secure systems.",
      },
      {
        name: "SOC Workflow Automation",
        level: "proficient",
        context: "Integrated scripts and tools into SOC processes for alert triage, reporting, and incident tracking.",
      },
      {
        name: "Custom Security Tool Development",
        level: "expert",
        context: "Built bespoke tools for penetration testing, log parsing, and vulnerability scanning tailored to specific environments.",
      },
    ],
  }

  const additionalSkills = {
    Offense: [
      "Metasploit",
      "Nmap",
      "Burp Suite",
      "Armitage",
      "Hashcat",
      "Reconnaissance & Exploitation Automation",
    ],
    "Defensive Security": [
      "Splunk",
      "ELK Stack (Elasticsearch, Logstash, Kibana)",
      "Snort",
      "Wireshark",
      "AlienVault",
      "VirusTotal",
      "SIEM Alerts",
      "Endpoint Detection & Response",
    ],
    "Cloud & Identity Security": [
      "Microsoft Azure",
      "Azure AD",
      "MFA",
      "Conditional Access Policies",
      "Cloud Workload Protection",
      "Threat Monitoring",
      "Security Auditing",
    ],
    "Automation & Threat Intelligence": [
      "Python",
      "Bash",
      "AnyRun",
      "FLARE VM Tools",
      "TryHackMe Labs",
      "Threat Intel Feeds",
      "YARA Rules",
      "Automation Frameworks",
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
