import Button from '@/components/ButtonComponent'
import Link from 'next/link'

export default function Hero({
  data,
}: {
  data: { headline: string; description: string; button: string }
}) {
  return (
    <div className="relative max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-brandy-punch-800 sm:text-6xl">
          {data.headline}
        </h1>
        <p className="mt-6 font-serif text-2xl italic leading-8 text-storm-dust-600">
          {data.description}
        </p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
          <Link href="#contact">
            <Button>{data.button}</Button>
          </Link>
        </div>
      </div>
      <div className="absolute inset-y-0 w-screen -translate-x-1/2 left-1/2 -z-10 bg-circles"></div>
      <div className="absolute inset-y-0 w-screen -translate-x-1/2 left-1/2 -z-10 bg-blend"></div>
    </div>
  )
}
