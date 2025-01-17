'use client'

import { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { BackButton } from "../components/back-button"

export default function JSONFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [indent, setIndent] = useState('2')

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, Number(indent)))
    } catch (error) {
      setOutput('Invalid JSON input')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6">JSON Formatter</h1>
      <div className="mb-4">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter JSON to format"
          className="mb-2 h-32"
        />
        <div className="flex items-center space-x-4 mb-2">
          <RadioGroup value={indent} onValueChange={setIndent}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2" id="r1" />
              <Label htmlFor="r1">2 spaces</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4" id="r2" />
              <Label htmlFor="r2">4 spaces</Label>
            </div>
          </RadioGroup>
        </div>
        <Button onClick={formatJSON}>Format JSON</Button>
      </div>
      <Textarea
        value={output}
        readOnly
        placeholder="Formatted JSON will appear here"
        className="h-64"
      />
    </div>
  )
}

