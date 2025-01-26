"use client"

import { useEffect, useRef, useState } from "react"
import { fabric } from "fabric"
import { Button } from "@/components/ui/button"
import { BackButton } from "../../components/BackButton"

export default function ImageEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const fabricCanvas = new fabric.Canvas(canvasRef.current, {
        width: 600,
        height: 400,
      })
      setCanvas(fabricCanvas)
    }
  }, [])

  const addImage = () => {
    if (canvas) {
      fabric.Image.fromURL("/placeholder.svg", (img) => {
        img.scaleToWidth(200)
        canvas.add(img)
        canvas.renderAll()
      })
    }
  }

  const addText = () => {
    if (canvas) {
      const text = new fabric.IText("Edit me", {
        left: 50,
        top: 50,
        fontFamily: "Arial",
        fill: "#000000",
        fontSize: 20,
      })
      canvas.add(text)
      canvas.renderAll()
    }
  }

  const addArrow = () => {
    if (canvas) {
      const arrow = new fabric.Path("M 0 0 L 200 0 L 190 -10 M 200 0 L 190 10", {
        left: 50,
        top: 100,
        stroke: "#000000",
        strokeWidth: 2,
        fill: "transparent",
      })
      canvas.add(arrow)
      canvas.renderAll()
    }
  }

  const cropImage = () => {
    if (canvas) {
      const activeObject = canvas.getActiveObject() as fabric.Image
      if (activeObject && activeObject.type === "image") {
        const cropped = new fabric.Rect({
          left: activeObject.left,
          top: activeObject.top,
          width: activeObject.width! / 2,
          height: activeObject.height! / 2,
          fill: "transparent",
          stroke: "#000000",
          strokeWidth: 2,
        })
        canvas.add(cropped)
        canvas.renderAll()
      }
    }
  }

  return (
    <div className="container mx-auto p-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6">Image Editor</h1>
      <div className="mb-4 space-x-2">
        <Button onClick={addImage}>Add Image</Button>
        <Button onClick={addText}>Add Text</Button>
        <Button onClick={addArrow}>Add Arrow</Button>
        <Button onClick={cropImage}>Crop Image</Button>
      </div>
      <canvas ref={canvasRef} />
    </div>
  )
}

