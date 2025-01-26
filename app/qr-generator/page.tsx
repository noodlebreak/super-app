"use client"

import { useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BackButton } from "../../components/BackButton"

export default function QRGenerator() {
  const [data, setData] = useState("")

  return (
    <div className="container mx-auto p-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6">QR Code Generator</h1>
      <div className="mb-4">
        <Input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter data to encode (up to 1024 bytes)"
          maxLength={1024}
          className="mb-2"
        />
        <Button onClick={() => setData("")}>Clear</Button>
      </div>
      {data && (
        <div className="border p-4 inline-block">
          <QRCodeSVG value={data} size={256} />
        </div>
      )}
    </div>
  )
}

