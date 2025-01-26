"use client"

import { useState } from "react"
import { format } from "sql-formatter"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { BackButton } from "../../components/BackButton"

export default function SQLFormatter() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const formatSQL = () => {
    try {
      setOutput(format(input))
    } catch (error) {
      setOutput("Invalid SQL input")
    }
  }

  return (
    <div className="container mx-auto p-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6">SQL Formatter</h1>
      <div className="mb-4">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter SQL to format"
          className="mb-2 h-32"
        />
        <Button onClick={formatSQL}>Format SQL</Button>
      </div>
      <Textarea value={output} readOnly placeholder="Formatted SQL will appear here" className="h-64" />
    </div>
  )
}

