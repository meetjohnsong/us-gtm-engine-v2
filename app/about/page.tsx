'use client'
export default function AboutPage() {
  const principles = [
    { title: 'Validate before you scale', text: 'Successful market entry begins with evidence, not assumptions.' },
    { title: 'Focus on real buyer problems', text: 'Go-to-market strategy must be grounded in the outcomes customers care about most.' },
    { title: 'Compress time to signal', text: 'Companies should quickly determine whether their market thesis is working.' },
    { title: 'Combine technology with experience', text: 'AI accelerates insight, but expert judgment is essential to interpreting the signals.' },
  ]

  const stats = [
    { value: '25+', label: 'Years experience' },
    { value: '100+', label: 'Global team' },
    { value: '3', label: 'Integrated capabilities' },
    { value: '90', label: 'Day sprint' },
  ]

  const founders = [
    { name: 'John Song', capability: 'GTM Strategy & Market Architecture', credential: 'Technology entrepreneur with 25+ years building B2B technology companies and leading enterprise go-to-market initiatives across software, data platforms, and AI-driven ventures.', image: 'https://www.usgtmengine.com/images/about/john_headshot_square.jpg', linkedin: 'https://linkedin.com/in/johnsong', initials: 'JS' },
    { name: 'Bo Wandell', capability: 'US Market Entry & Execution', credential: 'Founder of LaunchAmerica and long-time advisor to international technology companies establishing operations and enterprise sales traction in the United States.', image: 'https://www.usgtmengine.com/images/about/bo_headshot_square.jpg', linkedin: 'https://linkedin.com/in/bo-wandell', initials: 'BW' },
    { name: 'Milind Prabhudesai', capability: 'Market Intelligence & Data Platforms', credential: 'Co-founder of BizKonnect and leader in AI-driven market intelligence platforms used by global enterprise sales organizations.', image: 'https://www.usgtmengine.com/images/about/milind_headshot_square.jpg', linkedin: 'https://linkedin.com/in/milind-prabhudesai-2953181', initials: 'MP' },
    { name: 'Partap Roy', capability: 'Global Research & Intelligence Operations', credential: 'Co-founder of BizKonnect and architect of global research and intelligence operations supporting enterprise go-to-market initiatives.', image: 'https://www.usgtmengine.com/images/about/partap_headshot_square.jpg', linkedin: 'https://linkedin.com/in/partap-roy-6a727b8', initials: 'PR' },
  ]

  return (
    <main style={{fontFamily:"'Plus Jakarta Sans', sans-serif",maxWidth:'1100px',margin:'0 auto'}}>

      {/* Hero */}
      <section style={{padding:'56px 64px 48px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'24px'}}>
          <div style={{width:'6px',height:'6px',background:'#e8a020',borderRadius:'50%'}}></div>
          <span style={{color:'#e8a020',fontSize:'12px',fontWeight:'600',letterSpacing:'0.14em',textTransform:'uppercase'}}>About</span>
        </div>
        <h1 style={{fontSize:'clamp(2rem,3vw,2.8rem)',fontWeight:'800',color:'#f0ede6',lineHeight:'1.08',letterSpacing:'-0.03em',marginBottom:'20px'}}>
          The team behind the system.<br/>
          <span style={{color:'rgba(240,237,230,0.3)'}}>Built by operators.</span>
        </h1>
        <p style={{color:'rgba(255,255,255,0.65)',fontSize:'14px',lineHeight:'1.7',maxWidth:'520px'}}>
          US GTM Engine is the operating system for validating and launching B2B technology companies in the United States. We have sat in the seats our clients are sitting in. We have made the expensive mistakes. We built this because we believe there is a better way.
        </p>
      </section>

      {/* Principles */}
      <section style={{padding:'0 64px 48px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'24px'}}>
          <div style={{flex:1,height:'1px',background:'rgba(255,235,195,0.09)'}}></div>
          <span style={{color:'rgba(255,255,255,0.45)',fontSize:'12px',fontWeight:'600',letterSpacing:'0.14em',textTransform:'uppercase'}}>Our principles</span>
          <div style={{flex:1,height:'1px',background:'rgba(255,235,195,0.09)'}}></div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'8px'}}>
          {principles.map((item,i) => (
            <div key={i} style={{backgroundColor:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,235,195,0.07)',borderRadius:'8px',padding:'20px'}}>
              <p style={{color:'#f0ede6',fontSize:'14px',fontWeight:'700',marginBottom:'6px'}}>{item.title}</p>
              <p style={{color:'rgba(255,255,255,0.60)',fontSize:'14px',lineHeight:'1.6'}}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{padding:'0 64px 48px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(120px, 1fr))',gap:'1px',background:'rgba(255,255,255,0.06)',borderRadius:'10px',overflow:'hidden'}}>
          {stats.map((stat,i) => (
            <div key={i} style={{background:'#0f0e1a',padding:'24px 20px'}}>
              <div style={{color:'#e8a020',fontSize:'26px',fontWeight:'800',letterSpacing:'-0.03em',marginBottom:'4px'}}>{stat.value}</div>
              <div style={{color:'rgba(255,255,255,0.60)',fontSize:'14px',fontWeight:'500'}}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section style={{padding:'0 64px 48px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'24px'}}>
          <div style={{flex:1,height:'1px',background:'rgba(255,235,195,0.09)'}}></div>
          <span style={{color:'rgba(255,255,255,0.45)',fontSize:'12px',fontWeight:'600',letterSpacing:'0.14em',textTransform:'uppercase'}}>Founding partners</span>
          <div style={{flex:1,height:'1px',background:'rgba(255,235,195,0.09)'}}></div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))',gap:'12px',marginBottom:'12px'}}>
          {founders.map((founder,i) => (
            <a key={i} href={founder.linkedin} target="_blank" rel="noreferrer" style={{textDecoration:'none',display:'block'}}>
              <div style={{backgroundColor:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,235,195,0.09)',borderRadius:'10px',overflow:'hidden'}}>
                <div style={{height:'200px',overflow:'hidden',backgroundColor:'rgba(255,255,255,0.04)',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
                  <img
                    src={founder.image}
                    alt={founder.name}
                    style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}}
                    onError={(e) => {
                      e.currentTarget.style.display='none'
                    }}
                  />
                </div>
                <div style={{padding:'16px'}}>
                  <p style={{color:'rgba(255,255,255,0.50)',fontSize:'11px',fontWeight:'600',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'10px',minHeight:'24px'}}>{founder.capability}</p>
                  <div style={{height:'1px',background:'rgba(255,235,195,0.09)',marginBottom:'12px'}}></div>
                  <p style={{color:'#f0ede6',fontSize:'14px',fontWeight:'700',marginBottom:'8px'}}>{founder.name}</p>
                  <p style={{color:'rgba(255,255,255,0.60)',fontSize:'12px',lineHeight:'1.6',marginBottom:'12px'}}>{founder.credential}</p>
                  <p style={{color:'#e8a020',fontSize:'12px',fontWeight:'600'}}>View LinkedIn →</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{backgroundColor:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,235,195,0.09)',borderRadius:'8px',padding:'20px 24px'}}>
          <p style={{color:'#f0ede6',fontSize:'14px',fontWeight:'700',marginBottom:'4px'}}>Extended Operating Team</p>
          <p style={{color:'rgba(255,255,255,0.60)',fontSize:'14px',lineHeight:'1.6'}}>US GTM Engine is supported by a global operating team of more than 100 professionals across market intelligence, research, and go-to-market execution.</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{margin:'0 64px 64px',backgroundColor:'rgba(232,160,32,0.08)',border:'1px solid rgba(232,160,32,0.2)',borderRadius:'10px',padding:'24px 28px',display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'16px'}}>
        <div>
          <div style={{color:'#f0ede6',fontSize:'16px',fontWeight:'700',letterSpacing:'-0.01em',marginBottom:'4px'}}>Want to know if we are the right fit?</div>
          <div style={{color:'rgba(255,255,255,0.60)',fontSize:'14px'}}>One conversation. No commitment.</div>
        </div>
        <a href="/contact" style={{backgroundColor:'#e8a020',color:'#0f0e1a',fontSize:'14px',fontWeight:'700',padding:'12px 24px',borderRadius:'6px',whiteSpace:'nowrap',textDecoration:'none'}}>Book a call →</a>
      </section>

    </main>
  )
}