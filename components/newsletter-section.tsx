"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Mail } from "lucide-react";
import { Reveal } from "./reveal";
import { BlurPanel } from "./blur-panel";
import { AnimatedText } from "./animated-text";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsSubmitted(true);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container-custom">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side: Newsletter form */}
            <div className="flex justify-center items-centermax-w-2xl">
              <BlurPanel className="p-8 lg:p-12 bg-white/40 backdrop-blur-md grain-texture">
                <div className="text-center mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
                    <AnimatedText text="Free consultation " delay={0.2} />
                  </h2>
                  <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                    <span className="italic font-light">
                      <AnimatedText text="with experts." delay={0.5} />
                    </span>
                  </h2>
                  <p className="text-lg text-neutral-600">
                    Directly talk to our experts for personalized advice and
                    solutions.
                  </p>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-neutral-900 text-white py-4 rounded-full font-medium hover:bg-neutral-800 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us Now
                </motion.button>
              </BlurPanel>
            </div>

            <div className="flex justify-center items-center">
              <BlurPanel className=" p-4 bg-white/40 backdrop-blur-md grain-texture rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.8192552287865!2d115.2169237!3d-8.8030451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd243585ab84929%3A0x23e886a691754926!2sYABHASYUKA%20Skincare!5e0!3m2!1sen!2sid!4v1760847623153!5m2!1sen!2sid"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg lg:w-[450px] w-screen h-[400px] lg:h-[450px]"
                />
              </BlurPanel>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
