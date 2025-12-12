import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount((c) => c + 1)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Button variant="outline" onClick={increment}>
        Click me
      </Button>
      <p>Count: {count}</p>
    </div>
  )
}
