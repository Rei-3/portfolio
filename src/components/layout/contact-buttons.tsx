'use client';

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Github, Facebook, Phone, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Rei-3",
    Icon: Github,
    color: "#333333",
    hoverColor: "white",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/super.gamer.5",
    Icon: Facebook,
    color: "#1877F2",
    hoverColor: "#166fe5",
  },
  {
    name: "Phone",
    href: "tel:+639185530790",
    Icon: Phone,
    color: "#22c55e",
    hoverColor: "#16a34a",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    Icon: Linkedin,
    color: "#0A66C2",
    hoverColor: "#004182",
  },
  {
    name: "Email",
    href: "christan.endam@norsu.edu.ph",
    Icon: Mail,
    color: "#ea4335",
    hoverColor: "#d33b2c",
  },
];

export default function ContactButtons() {
  return (
    <motion.div
      className="flex flex-wrap gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {socials.map(({ name, href, Icon, color, hoverColor }, index) => (
        <motion.a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12 border-2 text-white transition-all duration-200"
            style={{
              backgroundColor: color,
              borderColor: color,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = hoverColor;
              e.currentTarget.style.borderColor = hoverColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = color;
              e.currentTarget.style.borderColor = color;
            }}
          >
            <Icon className="h-5 w-5" />
            <span className="sr-only">{name}</span>
          </Button>
        </motion.a>
      ))}
    </motion.div>
  );
}
