import React from "react";
import { Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <div className="w-full bg-[#F9FAFB] py-8 border-t">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 px-4">
          {/* Left Side - Contact Info */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-[#3C4852] mb-2">Contact Us</h2>
            <div className="flex flex-col gap-y-1 text-[#7A8B94]">
              <div className="flex items-center gap-x-2 justify-center md:justify-start">
                <Phone size={18} />
                <span>+91 9211477548</span>
              </div>
              <div className="flex items-center gap-x-2 justify-center md:justify-start">
                <Mail size={18} />
                <span>support@ytbridge.in</span>
              </div>
            </div>
          </div>

          {/* Center - Branding */}
          <div className="text-center">
            <h1 className="text-lg font-normal text-[#7A8B94]">
              © 2025 YT Bridge Consulting
            </h1>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex gap-x-4 justify-center md:justify-end text-[#3C4852]">
            <a href="https://www.instagram.com/yt_bridge/" target="_blank" rel="noopener noreferrer">
              <Instagram className="hover:text-pink-500 transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="hover:text-blue-600 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-blue-700 transition" />
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
