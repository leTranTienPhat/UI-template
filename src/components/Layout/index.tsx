import Footer from "./Footer"
import Header from "./Header"

type Props = {
  children: React.ReactElement
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout