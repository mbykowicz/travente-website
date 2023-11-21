import Logo from '@/components/LogoComponent'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 my-12 text-xs text-storm-dust-600">
      <Logo className="h-8" />
      <p>&copy; Travente Ewa Markiewicz 2023</p>
    </footer>
  )
}
