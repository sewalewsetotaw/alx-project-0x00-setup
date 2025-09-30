import React from "react"
import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-2xl font-semibold gap-6">
      <h1>Available Properties</h1>

      {/* Render cards */}
      <Card />
      <Card />
      <Card />

      {/* Render buttons */}
      <div className="flex gap-4 mt-8 flex-wrap">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>
    </main>
  )
}

export default Landing
