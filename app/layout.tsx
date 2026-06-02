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
      <body>
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '1.25rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(10, 15, 30, 0.95)',
          borderBottom: '1px solid #1e2a3a',
        }}>
          <a href="/" style={{
            fontSize: '1.1rem',
            fontWeight: '700',
            letterSpacing: '-0.02em',
            color: '#f5f5f0',
          }}>
            US GTM Engine
          </a>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}>
            <a href="/founders" style={{ color: '#8892a4', fontSize: '0.9rem' }}>Founders</a>
            <a href="/investors" style={{ color: '#8892a4', fontSize: '0.9rem' }}>Investors</a>
            <a href="/about" style={{ color: '#8892a4', fontSize: '0.9rem' }}>About</a>
            <a href="/contact" style={{
              backgroundColor: '#e8a020',
              color: '#0a0f1e',
              padding: '0.5rem 1.25rem',
              borderRadius: '4px',
              fontSize: '0.9rem',
              fontWeight: '600',
            }}>Book a Call</a>
          </div>
        </nav>
        <div style={{ paddingTop: '72px' }}>
          {children}
        </div>
        <footer style={{
          borderTop: '1px solid #1e2a3a',
          padding: '2rem 2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#8892a4',
          fontSize: '0.85rem',
        }}>
          <span>© 2026 US GTM Engine</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/founders" style={{ color: '#8892a4' }}>Founders</a>
            <a href="/investors" style={{ color: '#8892a4' }}>Investors</a>
            <a href="/about" style={{ color: '#8892a4' }}>About</a>
            <a href="/contact" style={{ color: '#8892a4' }}>Contact</a>
          </div>
        </footer>
      </body>
    </html>
  )
}
