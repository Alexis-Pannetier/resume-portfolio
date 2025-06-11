import Footer from './Footer'
import Header from './Header'
import { ReactNode } from 'react'

export default function Page({ children }: { children: ReactNode }) {
  const pageStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
  }

  return (
    <>
      <div style={pageStyle}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}
