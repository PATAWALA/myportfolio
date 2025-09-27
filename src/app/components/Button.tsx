"use client"
import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
}

export default function Button({ children, onClick, href, className }: Props) {
  const btn = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {btn}
      </a>
    )
  }
  return btn
}
