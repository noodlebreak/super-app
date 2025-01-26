"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { BackButton } from "../../components/BackButton"

export default function Base64() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const encode = () => {
    setOutput(btoa(input))
  }

  const decode = () => {
    try {
      setOutput(atob(input))
    } catch (error) {
      setOutput("Invalid Base64 input")
    }
  }

  return (
    <div className="container mx-auto p-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6">Base64 Encoder/Decoder</h1>
      <div className="mb-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to encode/decode"
          className="mb-2"
        />
        <div className="space-x-2">
          <Button onClick={encode}>Encode</Button>
          <Button onClick={decode}>Decode</Button>
        </div>
      </div>
      <Textarea value={output} readOnly placeholder="Result will appear here" className="h-32" />
    </div>
  )
}

