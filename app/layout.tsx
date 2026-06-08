import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'US GTM Engine',
  description: 'A complete fractional US GTM team for international B2B companies entering the US market.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{fontFamily:"'Plus Jakarta Sans', sans-serif"}}>
        <nav style={{
  position:'fixed',top:0,left:0,right:0,zIndex:50,
  padding:'12px 20px',
  display:'flex',alignItems:'center',justifyContent:'space-between',
  backgroundColor:'rgba(8,13,26,0.97)',
  borderBottom:'1px solid rgba(255,255,255,0.07)',
}}>
  <a href="/" style={{display:'flex',alignItems:'center'}}>
    <img
      src="/logo.png"
      alt="US GTM Engine"
      style={{height:'36px',width:'auto',filter:'brightness(0) invert(1)'}}
    />
  </a>
  <div style={{display:'flex',alignItems:'center',gap:'16px'}}>
    <a href="/founders" style={{color:'rgba(255,255,255,0.45)',fontSize:'12px',fontWeight:'500'}} className="desktop-only">Founders</a>
    <a href="/investors" style={{color:'rgba(255,255,255,0.45)',fontSize:'12px',fontWeight:'500'}} className="desktop-only">Investors</a>
    <a href="/about" style={{color:'rgba(255,255,255,0.45)',fontSize:'12px',fontWeight:'500'}} className="desktop-only">About</a>
    <a href="/contact" style={{
      backgroundColor:'#e8a020',color:'#080d1a',
      padding:'8px 14px',borderRadius:'6px',
      fontSize:'12px',fontWeight:'700',
      whiteSpace:'nowrap',
    }}>Book a Call</a>
  </div>
</nav>
        <div style={{paddingTop:'57px',backgroundColor:'#080d1a',minHeight:'100vh'}}>
          {children}
        </div>
        <footer style={{
          backgroundColor:'#080d1a',
          borderTop:'1px solid rgba(255,255,255,0.07)',
          padding:'24px 32px',
          display:'flex',justifyContent:'space-between',alignItems:'center',
        }}>
          <span style={{color:'rgba(255,255,255,0.25)',fontSize:'12px'}}>© 2026 US GTM Engine</span>
          <div style={{display:'flex',gap:'24px'}}>
            <a href="/founders" style={{color:'rgba(255,255,255,0.25)',fontSize:'12px'}}>Founders</a>
            <a href="/investors" style={{color:'rgba(255,255,255,0.25)',fontSize:'12px'}}>Investors</a>
            <a href="/about" style={{color:'rgba(255,255,255,0.25)',fontSize:'12px'}}>About</a>
            <a href="/contact" style={{color:'rgba(255,255,255,0.25)',fontSize:'12px'}}>Contact</a>
          </div>
        </footer>
      </body>
    </html>
  )
}