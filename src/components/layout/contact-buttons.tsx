'use client';

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Github, Facebook, Phone, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Rei-3",
    Icon: Github,
    color: "#333333",
    hoverColor: "#333324",
    description: "Check out my repositories and open source contributions"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/super.gamer.5",
    Icon: Facebook,
    color: "#1877F2",
    hoverColor: "#166fe5",
    description: "Connect with me on Facebook for personal updates"
  },
  {
    name: "Phone",
    href: "tel:+639185530790",
    Icon: Phone,
    color: "#22c55e",
    hoverColor: "#16a34a",
    description: "Call me directly at +63 918 553 0790"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/christan-endam-b7365a376/",
    Icon: Linkedin,
    color: "#0A66C2",
    hoverColor: "#004182",
    description: "Let's connect professionally on LinkedIn"
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBptRCXJFxVKKskWQnCKJpBVVMtFBshtddRmcwLSzGWXhtjMtZrBSjSRcmgjSjXPkZVqZTq",
    Icon: Mail,
    color: "#ea4335",
    hoverColor: "#d33b2c",
    description: "Send me an email for business inquiries"
  },
];

export default function ContactButtons() {
  return (
    <div className="flex flex-row md:flex-row gap-4">
      {socials.map(({ name, href, Icon, color, hoverColor, description }, index) => (
        <HoverCard key={index}>
          <HoverCardTrigger asChild>
            <motion.a
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
                className="flex items-center gap-2 shadow-md"
                style={{
                  borderColor: color,
                  color: "white",
                  backgroundColor: color,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = hoverColor;
                  (e.currentTarget as HTMLButtonElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = color;
                  (e.currentTarget as HTMLButtonElement).style.color = "white";
                }}
              >
                <Icon size={16} />
                <span className=" sm:inline hidden">{name}</span>
              </Button>
            </motion.a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">{name}</h4>
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
