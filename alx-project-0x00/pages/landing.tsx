import React from "react"
import Card from "@/components/Card"

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-2xl font-semibold gap-6">
      <h1>Available Properties</h1>

      {/* Render one card */}
      <Card />

      {/* Duplicate to test reusability */}
      <Card />
      <Card />
    </main>
  )
}

export default Landing
