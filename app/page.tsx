import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"

const utilities = [
  { name: 'QR Code Generator', href: '/qr-generator' },
  { name: 'Image Editor', href: '/image-editor' },
  { name: 'Base64 Encoder/Decoder', href: '/base64' },
  { name: 'JSON Formatter', href: '/json-formatter' },
  { name: 'SQL Formatter', href: '/sql-formatter' },
]

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Super App Utilities</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {utilities.map((util) => (
          <Link href={util.href} key={util.name}>
            <Card className="w-[150px] h-[150px] flex items-center justify-center hover:bg-gray-100 transition-colors">
              <CardContent className="p-4 text-center">
                <p>{util.name}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

