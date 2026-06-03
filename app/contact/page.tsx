'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main style={{fontFamily:"'Plus Jakarta Sans', sans-serif",maxWidth:'1100px',margin:'0 auto'}}>

      <section style={{padding:'56px 48px 48px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'start'}}>

        {/* Left */}
        <div>
          <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'24px'}}>
            <div style={{width:'6px',height:'6px',background:'#e8a020',borderRadius:'50%'}}></div>
            <span style={{color:'#e8a020',fontSize:'11px',fontWeight:'600',letterSpacing:'0.14em',textTransform:'uppercase'}}>Contact</span>
          </div>
          <h1 style={{fontSize:'clamp(2rem,3vw,2.8rem)',fontWeight:'800',color:'#f0ede6',lineHeight:'1.08',letterSpacing:'-0.03em',marginBottom:'20px'}}>
            Start the conversation.<br/>
            <span style={{color:'rgba(240,237,230,0.3)'}}>No commitment.</span>
          </h1>
          <p style={{color:'rgba(255,255,255,0.4)',fontSize:'14px',lineHeight:'1.7',marginBottom:'40px'}}>
            If you are evaluating US market entry or want to put a validation gate in front of your next expansion, we should talk. We would rather have an honest conversation than pitch a program.
          </p>

          <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
            {[
              {label:'Typical response time',val:'Within one business day'},
              {label:'First call duration',val:'30 minutes'},
              {label:'No obligation',val:'We identify fit together'},
            ].map((item,i) => (
              <div key={i} style={{display:'flex',alignItems:'center',gap:'16px',padding:'14px 16px',backgroundColor:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.05)',borderRadius:'8px'}}>
                <div style={{flex:1}}>
                  <div style={{color:'rgba(255,255,255,0.3)',fontSize:'10px',fontWeight:'600',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'2px'}}>{item.label}</div>
                  <div style={{color:'#f0ede6',fontSize:'13px',fontWeight:'600'}}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div style={{backgroundColor:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'10px',padding:'32px'}}>
          {submitted ? (
            <div style={{textAlign:'center',padding:'40px 0'}}>
              <div style={{width:'48px',height:'48px',borderRadius:'50%',backgroundColor:'rgba(232,160,32,0.15)',border:'1px solid rgba(232,160,32,0.3)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px'}}>
                <span style={{color:'#e8a020',fontSize:'20px'}}>✓</span>
              </div>
              <p style={{color:'#f0ede6',fontSize:'16px',fontWeight:'700',marginBottom:'8px'}}>Message received.</p>
              <p style={{color:'rgba(255,255,255,0.4)',fontSize:'13px',lineHeight:'1.6'}}>We typically respond within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'16px'}}>
              <div>
                <label style={{color:'rgba(255,255,255,0.4)',fontSize:'11px',fontWeight:'600',letterSpacing:'0.08em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Name</label>
                <input required type="text" style={{width:'100%',backgroundColor:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'6px',padding:'12px 14px',color:'#f0ede6',fontSize:'13px',outline:'none',boxSizing:'border-box'}} />
              </div>
              <div>
                <label style={{color:'rgba(255,255,255,0.4)',fontSize:'11px',fontWeight:'600',letterSpacing:'0.08em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Email</label>
                <input required type="email" style={{width:'100%',backgroundColor:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'6px',padding:'12px 14px',color:'#f0ede6',fontSize:'13px',outline:'none',boxSizing:'border-box'}} />
              </div>
              <div>
                <label style={{color:'rgba(255,255,255,0.4)',fontSize:'11px',fontWeight:'600',letterSpacing:'0.08em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Company</label>
                <input required type="text" style={{width:'100%',backgroundColor:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'6px',padding:'12px 14px',color:'#f0ede6',fontSize:'13px',outline:'none',boxSizing:'border-box'}} />
              </div>
              <div>
                <label style={{color:'rgba(255,255,255,0.4)',fontSize:'11px',fontWeight:'600',letterSpacing:'0.08em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Message</label>
                <textarea required rows={5} style={{width:'100%',backgroundColor:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'6px',padding:'12px 14px',color:'#f0ede6',fontSize:'13px',outline:'none',resize:'vertical',boxSizing:'border-box'}} />
              </div>
              <button type="submit" style={{backgroundColor:'#e8a020',color:'#080d1a',padding:'14px 24px',borderRadius:'6px',fontWeight:'700',fontSize:'13px',border:'none',cursor:'pointer',width:'100%',fontFamily:"'Plus Jakarta Sans', sans-serif"}}>
                Send message →
              </button>
              <p style={{color:'rgba(255,255,255,0.25)',fontSize:'11px',textAlign:'center'}}>We typically respond within one business day.</p>
            </form>
          )}
        </div>

      </section>

    </main>
  )
}