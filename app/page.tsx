'use client'

export default function Home() {
  return (
    <main style={{fontFamily:"'Plus Jakarta Sans', sans-serif",maxWidth:'1100px',margin:'0 auto'}}>

      <section style={{padding:'56px 48px 40px',position:'relative'}}>

        <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'24px'}}>
          <div style={{width:'6px',height:'6px',background:'#e8a020',borderRadius:'50%'}}></div>
          <span style={{color:'#e8a020',fontSize:'12px',fontWeight:'600',letterSpacing:'0.14em',textTransform:'uppercase'}}>US Market Entry · B2B · International</span>
        </div>

        <h1 style={{fontSize:'clamp(2rem,3vw,2.8rem)',fontWeight:'800',color:'#f0ede6',lineHeight:'1.08',letterSpacing:'-0.01em',marginBottom:'20px'}}>
          Your US GTM team. <span style={{color:'rgba(240,237,230,0.3)'}}>Day one.</span> Not month nine.
        </h1>

        <p style={{color:'rgba(255,255,255,0.65)',fontSize:'14px',lineHeight:'1.7',marginBottom:'44px',maxWidth:'420px'}}>
          A complete fractional team — CRO, CMO, analyst, content, SDR — running your US go-to-market from day one.
        </p>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'16px',marginBottom:'36px'}}>

          <a href="/founders" style={{
            backgroundColor:'rgba(232,160,32,0.04)',
            border:'1px solid rgba(232,160,32,0.4)',
            borderRadius:'10px',padding:'24px',
            display:'block',textDecoration:'none',
            position:'relative',overflow:'hidden',
          }}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',background:'#e8a020'}}></div>
            <p style={{color:'#e8a020',fontSize:'12px',fontWeight:'600',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'12px'}}>For Founders & CEOs</p>
            <h2 style={{color:'#f0ede6',fontSize:'17px',fontWeight:'700',lineHeight:'1.3',letterSpacing:'-0.01em',marginBottom:'10px'}}>The country manager or CRO you plan to hire will have an impossible job.</h2>
            <p style={{color:'rgba(255,255,255,0.38)',fontSize:'14px',lineHeight:'1.6',marginBottom:'16px'}}>Five functions. One hire. It does not work. There is a better way to grow in the US.</p>
            <span style={{color:'#e8a020',fontSize:'14px',fontWeight:'600'}}>See how it works →</span>
          </a>
          <a href="/investors" style={{
            backgroundColor:'rgba(255,255,255,0.03)',
            border:'1px solid rgba(255,235,195,0.09)',
            borderRadius:'10px',padding:'24px',
            display:'block',textDecoration:'none',
            position:'relative',overflow:'hidden',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor='rgba(232,160,32,0.4)'
            e.currentTarget.style.backgroundColor='rgba(232,160,32,0.04)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor='rgba(255,235,195,0.09)'
            e.currentTarget.style.backgroundColor='rgba(255,255,255,0.03)'
          }}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',background:'#e8a020'}}></div>
            <p style={{color:'#e8a020',fontSize:'12px',fontWeight:'600',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'12px'}}>For PE & VC Partners</p>
            <h2 style={{color:'#f0ede6',fontSize:'17px',fontWeight:'700',lineHeight:'1.3',letterSpacing:'-0.01em',marginBottom:'10px'}}>Your portfolio company's US GTM strategy is built on assumption.</h2>
            <p style={{color:'rgba(255,255,255,0.38)',fontSize:'14px',lineHeight:'1.6',marginBottom:'16px'}}>Capital committed before assumptions are tested. We offer a governed alternative.</p>
            <span style={{color:'#e8a020',fontSize:'14px',fontWeight:'600'}}>See how it works →</span>
          </a>

        </div>

        <div style={{display:'flex',flexWrap:'wrap',gap:'12px',paddingTop:'28px',borderTop:'1px solid rgba(255,255,255,0.06)'}}>
          {['Built by operators','30M-record B2B database','Fixed monthly cost','No lock-in'].map((item,i) => (
            <span key={i} style={{color:'rgba(255,255,255,0.45)',fontSize:'14px',fontWeight:'500'}}>{item}</span>
          ))}
        </div>
      </section>

      <section style={{padding:'0 48px',marginBottom:'2px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'1px',background:'rgba(255,255,255,0.06)',borderRadius:'10px',overflow:'hidden'}}>
          {[
            {val:'5',label:'Person fractional team'},
            {val:'90',label:'Day launch sprint'},
            {val:'500+',label:'ICP contacts engaged'},
            {val:'$400K',label:'vs. first US CRO cost'},
          ].map((stat,i) => (
            <div key={i} style={{background:'#0f0e1a',padding:'24px 20px'}}>
              <div style={{color:'#e8a020',fontSize:'26px',fontWeight:'800',letterSpacing:'-0.03em',marginBottom:'4px'}}>{stat.val}</div>
              <div style={{color:'rgba(255,255,255,0.60)',fontSize:'14px',fontWeight:'500'}}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{display:'flex',alignItems:'center',gap:'12px',margin:'32px 48px 24px'}}>
        <div style={{flex:1,height:'1px',background:'rgba(255,235,195,0.09)'}}></div>
        <span style={{color:'rgba(255,255,255,0.45)',fontSize:'12px',fontWeight:'600',letterSpacing:'0.14em',textTransform:'uppercase'}}>Inside the US Launch Sprint</span>
        <div style={{flex:1,height:'1px',background:'rgba(255,235,195,0.09)'}}></div>
      </div>

      <section style={{padding:'0 48px',display:'flex',flexDirection:'column',gap:'3px'}}>
        {[
          {num:'01',title:'ICP defined and validated',body:'Refined against real prospect response. Drawn from our 30M-record B2B sales intelligence database.'},
          {num:'02',title:'Competitive landscape mapped',body:'Named competitors, adjacent categories, and the build-or-do-nothing alternatives that win more deals than founders realize.'},
          {num:'03',title:'US messaging built and tested',body:'Pressure-tested against actual US buyers in month one, not month nine.'},
          {num:'04',title:'500+ ICP contacts engaged',body:'LinkedIn and email, multi-channel, supported by original B2B content across the full buyer journey.'},
          {num:'05',title:'Pipeline opened',body:'First meetings booked. Opportunities qualified. Deals advanced by live US field sales.'},
        ].map((item,i) => (
          <div key={i} style={{display:'flex',alignItems:'flex-start',gap:'16px',padding:'16px 20px',backgroundColor:'rgba(255,255,255,0.02)',borderRadius:'6px',border:'1px solid rgba(255,235,195,0.07)'}}>
            <div style={{color:'#e8a020',fontSize:'14px',fontWeight:'700',minWidth:'20px',marginTop:'1px'}}>{item.num}</div>
            <div>
              <div style={{color:'#f0ede6',fontSize:'14px',fontWeight:'600',marginBottom:'3px'}}>{item.title}</div>
              <div style={{color:'rgba(255,255,255,0.60)',fontSize:'14px',lineHeight:'1.6'}}>{item.body}</div>
            </div>
          </div>
        ))}
      </section>

      <section style={{margin:'32px 48px 64px',backgroundColor:'rgba(232,160,32,0.08)',border:'1px solid rgba(232,160,32,0.2)',borderRadius:'10px',padding:'24px 28px',display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'16px'}}>
        <div>
          <div style={{color:'#f0ede6',fontSize:'16px',fontWeight:'700',letterSpacing:'-0.01em',marginBottom:'4px'}}>Ready to enter the US the right way?</div>
          <div style={{color:'rgba(255,255,255,0.60)',fontSize:'14px'}}>One conversation. No commitment.</div>
        </div>
        <a href="/contact" style={{backgroundColor:'#e8a020',color:'#0f0e1a',fontSize:'14px',fontWeight:'700',padding:'12px 24px',borderRadius:'6px',whiteSpace:'nowrap',textDecoration:'none'}}>Get in touch →</a>
      </section>

    </main>
  )
}