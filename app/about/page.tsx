export default function AboutPage() {
  const principles = [
    { title: 'Validate before you scale', text: 'Successful market entry begins with evidence, not assumptions.' },
    { title: 'Focus on real buyer problems', text: 'Go-to-market strategy must be grounded in the outcomes customers care about most.' },
    { title: 'Compress time to signal', text: 'Companies should quickly determine whether their market thesis is working.' },
    { title: 'Combine technology with experience', text: 'AI accelerates insight, but expert judgment is essential to interpreting the signals.' },
  ]

  const stats = [
    { value: '25+', label: 'Years Experience', text: 'Enterprise GTM leadership' },
    { value: '100+', label: 'Global Team', text: 'Research and execution infrastructure' },
    { value: '3', label: 'Integrated Capabilities', text: 'Strategy • Intelligence • Execution' },
    { value: '90–120', label: 'Day Sprint', text: 'Structured validation and launch' },
  ]

  const founders = [
    { name: 'John Song', capability: 'GTM Strategy & Market Architecture', credential: 'Technology entrepreneur with 25+ years building B2B technology companies and leading enterprise go-to-market initiatives across software, data platforms, and AI-driven ventures.', image: 'https://www.usgtmengine.com/images/about/john_headshot_square.jpg', linkedin: 'https://linkedin.com/in/johnsong' },
    { name: 'Bo Wandell', capability: 'US Market Entry & Execution', credential: 'Founder of LaunchAmerica and long-time advisor to international technology companies establishing operations and enterprise sales traction in the United States.', image: 'https://www.usgtmengine.com/images/about/bo_headshot_square.jpg', linkedin: 'https://linkedin.com/in/bo-wandell' },
    { name: 'Milind Prabhudesai', capability: 'Market Intelligence & Data Platforms', credential: 'Co-founder of BizKonnect and leader in AI-driven market intelligence and account intelligence platforms used by global enterprise sales organizations.', image: 'https://www.usgtmengine.com/images/about/milind_headshot_square.jpg', linkedin: 'https://linkedin.com/in/milind-prabhudesai-2953181' },
    { name: 'Partap Roy', capability: 'Global Research & Intelligence Operations', credential: 'Co-founder of BizKonnect and architect of global research and intelligence operations supporting enterprise go-to-market initiatives.', image: 'https://www.usgtmengine.com/images/about/partap_headshot_square.jpg', linkedin: 'https://linkedin.com/in/partap-roy-6a727b8' },
  ]

  return (
    <main>
      <section style={{padding:'6rem 2.5rem 4rem',maxWidth:'860px',margin:'0 auto'}}>
        <p style={{color:'#e8a020',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'1.5rem'}}>About</p>
        <h1 style={{fontSize:'clamp(2.2rem, 5vw, 3.8rem)',fontWeight:'800',color:'#f5f5f0',lineHeight:'1.1',letterSpacing:'-0.03em',marginBottom:'1.5rem'}}>The team behind the system.</h1>
        <p style={{color:'#8892a4',fontSize:'1.1rem',lineHeight:'1.7'}}>US GTM Engine is the operating system for validating and launching B2B technology companies in the United States.</p>
      </section>

      <section style={{backgroundColor:'#111827',borderTop:'1px solid #1e2a3a',borderBottom:'1px solid #1e2a3a',padding:'5rem 2.5rem'}}>
        <div style={{maxWidth:'860px',margin:'0 auto'}}>
          <p style={{color:'#e8a020',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'1rem'}}>Principles</p>
          <h2 style={{fontSize:'clamp(1.8rem, 4vw, 3rem)',fontWeight:'800',color:'#f5f5f0',lineHeight:'1.15',letterSpacing:'-0.03em',marginBottom:'1rem'}}>Our principles</h2>
          <p style={{color:'#8892a4',fontSize:'1.1rem',lineHeight:'1.7',marginBottom:'3rem'}}>A disciplined operating model for producing signal before scaling cost.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
            {principles.map((item) => (
              <div key={item.title} style={{backgroundColor:'#0a0f1e',border:'1px solid #1e2a3a',borderRadius:'8px',padding:'1.5rem 2rem'}}>
                <p style={{color:'#f5f5f0',fontWeight:'700',marginBottom:'0.5rem'}}>{item.title}</p>
                <p style={{color:'#8892a4',fontSize:'0.95rem',lineHeight:'1.6'}}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'5rem 2.5rem',maxWidth:'860px',margin:'0 auto'}}>
        <p style={{color:'#e8a020',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'1rem'}}>Scale</p>
        <h2 style={{fontSize:'clamp(1.8rem, 4vw, 3rem)',fontWeight:'800',color:'#f5f5f0',lineHeight:'1.15',letterSpacing:'-0.03em',marginBottom:'3rem'}}>Institutional depth</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'1rem'}}>
          {stats.map((stat) => (
            <div key={stat.label} style={{backgroundColor:'#111827',border:'1px solid #1e2a3a',borderRadius:'8px',padding:'1.5rem'}}>
              <p style={{color:'#e8a020',fontSize:'2.5rem',fontWeight:'800',letterSpacing:'-0.03em',marginBottom:'0.25rem'}}>{stat.value}</p>
              <p style={{color:'#f5f5f0',fontWeight:'700',fontSize:'0.85rem',marginBottom:'0.5rem'}}>{stat.label}</p>
              <p style={{color:'#8892a4',fontSize:'0.85rem',lineHeight:'1.5'}}>{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{backgroundColor:'#111827',borderTop:'1px solid #1e2a3a',borderBottom:'1px solid #1e2a3a',padding:'5rem 2.5rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <p style={{color:'#e8a020',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'1rem'}}>Leadership</p>
          <h2 style={{fontSize:'clamp(1.8rem, 4vw, 3rem)',fontWeight:'800',color:'#f5f5f0',lineHeight:'1.15',letterSpacing:'-0.03em',marginBottom:'1rem'}}>Founding partners</h2>
          <p style={{color:'#8892a4',fontSize:'1.1rem',lineHeight:'1.7',marginBottom:'3rem'}}>Leadership across strategy, intelligence, and execution.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'1.5rem',marginBottom:'2rem'}}>
            {founders.map((founder) => (
              <a key={founder.name} href={founder.linkedin} target="_blank" rel="noreferrer" style={{display:'block',textDecoration:'none'}}>
                <div style={{backgroundColor:'#0a0f1e',border:'1px solid #1e2a3a',borderRadius:'8px',overflow:'hidden'}}>
                  <div style={{height:'240px',overflow:'hidden',backgroundColor:'#1e2a3a'}}>
                    <img src={founder.image} alt={founder.name} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}} />
                  </div>
                  <div style={{padding:'1.5rem'}}>
                    <p style={{color:'#8892a4',fontSize:'0.75rem',fontWeight:'600',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'1rem',minHeight:'2.5rem'}}>{founder.capability}</p>
                    <div style={{borderTop:'1px solid #1e2a3a',paddingTop:'1rem',marginBottom:'1rem'}} />
                    <h3 style={{color:'#f5f5f0',fontSize:'1.1rem',fontWeight:'700',marginBottom:'0.75rem'}}>{founder.name}</h3>
                    <p style={{color:'#8892a4',fontSize:'0.85rem',lineHeight:'1.6',marginBottom:'1rem'}}>{founder.credential}</p>
                    <p style={{color:'#e8a020',fontSize:'0.85rem',fontWeight:'600'}}>View LinkedIn →</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div style={{backgroundColor:'#0a0f1e',border:'1px solid #1e2a3a',borderRadius:'8px',padding:'1.5rem 2rem'}}>
            <p style={{color:'#f5f5f0',fontWeight:'700',marginBottom:'0.5rem'}}>Extended Operating Team</p>
            <p style={{color:'#8892a4',fontSize:'0.95rem',lineHeight:'1.6'}}>US GTM Engine is supported by a global operating team of more than 100 professionals across market intelligence, research, and go-to-market execution.</p>
          </div>
        </div>
      </section>

      <section style={{padding:'5rem 2.5rem',textAlign:'center',maxWidth:'640px',margin:'0 auto'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'800',color:'#f5f5f0',marginBottom:'1rem',letterSpacing:'-0.02em'}}>Want to know if we are the right fit?</h2>
        <p style={{color:'#8892a4',fontSize:'1.1rem',lineHeight:'1.7',marginBottom:'2rem'}}>We would rather have an honest conversation than pitch a program. Let us talk.</p>
        <a href="/contact" style={{display:'inline-block',backgroundColor:'#e8a020',color:'#0a0f1e',padding:'0.9rem 2rem',borderRadius:'4px',fontWeight:'700',fontSize:'1rem'}}>Book a call</a>
      </section>
    </main>
  )
}