import Footer from './Footer'
import Header from './Header'
import { ReactNode } from 'react'

interface PageProps {
  children?: ReactNode
  title?: string
}

export default function Page({ children, title }: PageProps) {
  const pageStyle: React.CSSProperties = {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    position: 'relative',
    margin: 0,
    padding: 0,
  }
  const headerHeight = '68px'

  return (
    <>
      <div style={pageStyle}>
        <Header title={title} height={headerHeight} />
        <div style={{ marginTop: headerHeight }}>{children}</div>
        <Footer />
      </div>
    </>
  )
}
