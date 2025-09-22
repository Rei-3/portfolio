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
    <div className="flex flex-col md:flex-row gap-4">
      {socials.map(({ name, href, Icon, color, hoverColor }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            className="flex items-center gap-2"
            style={{
              borderColor: color,
              color: color,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                hoverColor;
              (e.currentTarget as HTMLButtonElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = color;
            }}
          >
            <Icon size={16} />
            {name}
          </Button>
        </motion.a>
      ))}

    </div>
  );
}
