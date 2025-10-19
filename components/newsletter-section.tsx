"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Mail } from "lucide-react"
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"
import { AnimatedText } from "./animated-text"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isValid, setIsValid] = useState(true)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateEmail(email)) {
      setIsSubmitted(true)
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="container-custom">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side: Newsletter form */}
            <div className="flex justify-center items-centermax-w-2xl">
              <BlurPanel className="p-8 lg:p-12 bg-white/40 backdrop-blur-md grain-texture">
                <div className="text-center mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                    <AnimatedText text="Stay ahead of " delay={0.2} />
                    <span className="italic font-light">
                      <AnimatedText text="quiet luxury." delay={0.5} />
                    </span>
                  </h2>
                  <p className="text-lg text-neutral-600">
                    Be the first to discover new collections, design insights, and exclusive access to limited pieces.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail size={20} className="text-neutral-400" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          setIsValid(true)
                        }}
                        placeholder="Enter your email address"
                        className={`w-full pl-12 pr-4 py-4 bg-white/60 backdrop-blur-sm border rounded-full text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 ${
                          !isValid ? "border-red-300 focus:ring-red-500" : "border-neutral-200"
                        }`}
                      />
                    </div>

                    {!isValid && (
                      <motion.p
                        className="text-sm text-red-600 text-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        Please enter a valid email address
                      </motion.p>
                    )}

                    <motion.button
                      type="submit"
                      className="w-full bg-neutral-900 text-white py-4 rounded-full font-medium hover:bg-neutral-800 transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Subscribe to Newsletter
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={24} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Welcome to KATACHI</h3>
                    <p className="text-neutral-600">
                      Thank you for subscribing. You'll receive our next newsletter with exclusive insights and new
                      arrivals.
                    </p>
                  </motion.div>
                )}

                <p className="text-xs text-neutral-500 text-center mt-6">
                  We respect your privacy. Unsubscribe at any time. Read our{" "}
                  <a href="#" className="underline hover:text-neutral-700 transition-colors">
                    Privacy Policy
                  </a>
                  .
                </p>
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
  )
}
