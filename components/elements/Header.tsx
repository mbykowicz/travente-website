import Container from '../ContainerComponent'
import Logo from '../LogoComponent'

export default function Header() {
  return (
    <header className="flex items-center h-20">
      <Container className="flex items-center justify-center">
        <Logo className="w-auto h-8" />
      </Container>
    </header>
  )
}
