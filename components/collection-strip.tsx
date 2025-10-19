"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"

const collections = [
  {
    id: "facial-wash",
    name: "FACIAL WASH",
    image: "/FacialWash.jpg",
    count: "",
  },
  {
    id: "micellar-water",
    name: "MICELLAR WATER",
    image: "/MicellarWater.jpg",
    count: "",
  },
  {
    id: "lightening-cream",
    name: "LIGHTENING CREAM",
    image: "/Lightening.jpg",
    count: "",
  },
  {
    id: "sunscreen",
    name: "SUNSCREEN",
    image: "/Sunscreen.jpg",
    count: "",
  },
  {
    id: "serum-booster",
    name: "SERUM BOOSTER",
    image: "/SerumBooster.jpg",
    count: "",
  },
  {
    id: "facial-wash",
    name: "FACIAL WASH",
    image: "/FacialWash.jpg",
    count: "",
  },
  {
    id: "micellar-water",
    name: "MICELLAR WATER",
    image: "/MicellarWater.jpg",
    count: "",
  },
  {
    id: "lightening-cream",
    name: "LIGHTENING CREAM",
    image: "/Lightening.jpg",
    count: "",
  },
  {
    id: "sunscreen",
    name: "SUNSCREEN",
    image: "/Sunscreen.jpg",
    count: "",
  },
  {
    id: "serum-booster",
    name: "SERUM BOOSTER",
    image: "/SerumBooster.jpg",
    count: "",
  },
]

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  const itemWidth = 320 // 320px (w-80) + 32px gap = 352px per item
  const totalWidth = collections.length * (itemWidth + 32) - 32 // subtract last gap
  const containerWidth = typeof window !== "undefined" ? window.innerWidth : 1200
  const maxDrag = Math.max(0, totalWidth - containerWidth + 48) // add padding

  return (
    <section ref={containerRef} className="py-20 lg:py-32 overflow-hidden">
      <div className="mb-12">
        <Reveal>
          <div className="container-custom text-center">
            <h2 className="text-neutral-900 mb-4 text-6xl font-normal">Our Products</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our curated collections, each telling a unique story of craftsmanship and design philosophy.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-8 px-6"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.1}
        >
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ filter: "blur(1px)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 group-hover:bg-black/30 transition-all duration-300" />
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center text-white opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300">
                  <h3 className="text-3xl font-bold tracking-wider mb-2">{collection.name}</h3>
                  <p className="text-sm opacity-90">{collection.count}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-neutral-500">← Drag to explore our products →</p>
      </div>
    </section>
  )
}
