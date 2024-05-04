"use client"


import { useTheme } from "next-themes"
import { useEffect } from "react"

const Dashboard = () => {

  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme("light")
  }, [setTheme])
  
  return (
    <div>dashboard</div>
  )
}

export default Dashboard

