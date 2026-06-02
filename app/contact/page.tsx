'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <section style={{padding:'6rem 2.5rem 4rem',maxWidth:'640px',margin:'0 auto'}}>
        <p style={{color:'#e8a020',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'1.5rem'}}>Contact</p>
        <h1 style={{fontSize:'clamp(2.2rem, 5vw, 3.8rem)',fontWeight:'800',color:'#f5f5f0',lineHeight:'1.1',letterSpacing:'-0.03em',marginBottom:'1.5rem'}}>Start the conversation.</h1>
        <p style={{color:'#8892a4',fontSize:'1.1rem',lineHeight:'1.7',marginBottom:'3rem'}}>If you are evaluating US market entry or want to put a validation gate in front of your next expansion, we should talk.</p>

        {submitted ? (
          <div style={{backgroundColor:'#111827',border:'1px solid #1e2a3a',borderRadius:'8px',padding:'2.5rem',textAlign:'center'}}>
            <p style={{color:'#e8a020',fontSize:'1.1rem',fontWeight:'700',marginBottom:'0.5rem'}}>Message received.</p>
            <p style={{color:'#8892a4',lineHeight:'1.7'}}>We typically respond within one business day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1.25rem'}}>
            <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
              <label style={{color:'#8892a4',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.05em'}}>Name</label>
              <input required type="text" style={{backgroundColor:'#111827',border:'1px solid #1e2a3a',borderRadius:'4px',padding:'0.85rem 1rem',color:'#f5f5f0',fontSize:'1rem',outline:'none',width:'100%'}} />
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
              <label style={{color:'#8892a4',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.05em'}}>Email</label>
              <input required type="email" style={{backgroundColor:'#111827',border:'1px solid #1e2a3a',borderRadius:'4px',padding:'0.85rem 1rem',color:'#f5f5f0',fontSize:'1rem',outline:'none',width:'100%'}} />
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
              <label style={{color:'#8892a4',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.05em'}}>Company</label>
              <input required type="text" style={{backgroundColor:'#111827',border:'1px solid #1e2a3a',borderRadius:'4px',padding:'0.85rem 1rem',color:'#f5f5f0',fontSize:'1rem',outline:'none',width:'100%'}} />
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
              <label style={{color:'#8892a4',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.05em'}}>Message</label>
              <textarea required rows={5} style={{backgroundColor:'#111827',border:'1px solid #1e2a3a',borderRadius:'4px',padding:'0.85rem 1rem',color:'#f5f5f0',fontSize:'1rem',outline:'none',width:'100%',resize:'vertical'}} />
            </div>
            <button type="submit" style={{backgroundColor:'#e8a020',color:'#0a0f1e',padding:'0.9rem 2rem',borderRadius:'4px',fontWeight:'700',fontSize:'1rem',border:'none',cursor:'pointer',alignSelf:'flex-start'}}>Send message</button>
            <p style={{color:'#8892a4',fontSize:'0.85rem'}}>We typically respond within one business day.</p>
          </form>
        )}
      </section>
    </main>
  )
}