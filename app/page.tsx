export default function Home() {
  return (
    <main>
      <section style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'4rem 2.5rem',textAlign:'center'}}>
        <p style={{color:'#e8a020',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'1.5rem'}}>US Market Entry for International B2B Companies</p>
        <h1 style={{fontSize:'clamp(2.5rem, 6vw, 4.5rem)',fontWeight:'800',color:'#f5f5f0',maxWidth:'800px',marginBottom:'1.5rem',lineHeight:'1.1',letterSpacing:'-0.03em'}}>A complete US GTM team for companies serious about entering the US market.</h1>
        <p style={{color:'#8892a4',fontSize:'1.15rem',maxWidth:'560px',marginBottom:'4rem',lineHeight:'1.7'}}>Who are you?</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem',maxWidth:'860px',width:'100%'}}>
          <a href="/founders" style={{backgroundColor:'#111827',border:'1px solid #1e2a3a',borderRadius:'8px',padding:'2.5rem',textAlign:'left',display:'block',cursor:'pointer'}}>
            <p style={{color:'#e8a020',fontSize:'0.75rem',fontWeight:'600',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'1rem'}}>For Founders and CEOs</p>
            <h2 style={{color:'#f5f5f0',fontSize:'1.4rem',fontWeight:'700',marginBottom:'1rem',lineHeight:'1.3',letterSpacing:'-0.02em'}}>The US hire you are about to make is an impossible job.</h2>
            <p style={{color:'#8892a4',fontSize:'0.95rem',lineHeight:'1.6',marginBottom:'1.5rem'}}>Five jobs. One hire. It does not work. There is a better way to enter the US.</p>
            <span style={{color:'#e8a020',fontSize:'0.9rem',fontWeight:'600'}}>See how it works</span>
          </a>
          <a href="/investors" style={{backgroundColor:'#111827',border:'1px solid #1e2a3a',borderRadius:'8px',padding:'2.5rem',textAlign:'left',display:'block',cursor:'pointer'}}>
            <p style={{color:'#e8a020',fontSize:'0.75rem',fontWeight:'600',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'1rem'}}>For PE and VC Operating Partners</p>
            <h2 style={{color:'#f5f5f0',fontSize:'1.4rem',fontWeight:'700',marginBottom:'1rem',lineHeight:'1.3',letterSpacing:'-0.02em'}}>Your portfolio company US expansion strategy is built on assumption.</h2>
            <p style={{color:'#8892a4',fontSize:'0.95rem',lineHeight:'1.6',marginBottom:'1.5rem'}}>Capital committed before assumptions are tested. There is a governed alternative.</p>
            <span style={{color:'#e8a020',fontSize:'0.9rem',fontWeight:'600'}}>See how it works</span>
          </a>
        </div>
        <p style={{color:'#8892a4',fontSize:'0.85rem',marginTop:'3rem',letterSpacing:'0.05em'}}>Built by operators. Validated by results.</p>
      </section>
    </main>
  )
}