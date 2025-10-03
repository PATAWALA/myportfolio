"use client"

import { useState, useEffect } from "react"
import { FaArrowUp, FaArrowDown } from "react-icons/fa"

export default function ScrollButton() {
  const [showUp, setShowUp] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowUp(window.scrollY > 100) 
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }

  return (
    <button
      onClick={showUp ? scrollToTop : scrollToBottom}
      className={`fixed right-6 bottom-6 p-3 rounded-full shadow-lg z-50 transition
        ${showUp ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white text-black hover:bg-gray-300 dark:hover:bg-gray-600"}
        hover:scale-110`}
      title={showUp ? "Haut de page" : "Bas de page"}
    >
      {showUp ? <FaArrowUp /> : <FaArrowDown />}
    </button>
  )
}
