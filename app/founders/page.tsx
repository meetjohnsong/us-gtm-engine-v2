export default function FoundersPage() {
  return (
    <main style={{fontFamily:"'Plus Jakarta Sans', sans-serif",maxWidth:'1100px',margin:'0 auto'}}>

      {/* Hero */}
      <section style={{padding:'56px 64px 48px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'24px'}}>
          <div style={{width:'6px',height:'6px',background:'#e8a020',borderRadius:'50%'}}></div>
          <span style={{color:'#e8a020',fontSize:'12px',fontWeight:'600',letterSpacing:'0.14em',textTransform:'uppercase'}}>For International B2B Founders & CEOs</span>
        </div>
        <h1 style={{fontSize:'clamp(2rem,3vw,2.8rem)',fontWeight:'800',color:'#f0ede6',lineHeight:'1.08',letterSpacing:'-0.03em',marginBottom:'20px'}}>
          The US hire you are about to make<br/>
          <span style={{color:'rgba(240,237,230,0.3)'}}>is an impossible job.</span>
        </h1>
        <p style={{color:'rgba(255,255,255,0.65)',fontSize:'14px',lineHeight:'1.7',maxWidth:'520px',marginBottom:'0'}}>
          ICP definition. US messaging. Target account intelligence. Content. Outbound. Pipeline conversion. That is five jobs. You are about to hire one person to do all of them. It does not work — not because the person is not good, but because no one human can do all five jobs well.
        </p>
      </section>

      {/* Pull Quote */}
      <section style={{padding:'0 48px',marginBottom:'48px'}}>
        <div style={{borderLeft:'3px solid #e8a020',paddingLeft:'24px'}}>
          <p style={{color:'#f0ede6',fontSize:'clamp(1.2rem,2vw,1.6rem)',fontWeight:'700',lineHeight:'1.3',letterSpacing:'-0.02em'}}>
            "There is a better way to enter the US."
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section style={{margin:'0 48px 2px',backgroundColor:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,235,195,0.09)',borderRadius:'10px',padding:'32px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'32px',alignItems:'start'}}>
          <div>
            <p style={{color:'#e8a020',fontSize:'12px',fontWeight:'600',letterSpacing:'0.14em',textTransform:'uppercase',marginBottom:'16px'}}>The offering</p>
            <h2 style={{color:'#f0ede6',fontSize:'clamp(1.4rem,2vw,1.8rem)',fontWeight:'800',lineHeight:'1.2',letterSpacing:'-0.02em',marginBottom:'16px'}}>
              A complete US GTM team. <span style={{color:'rgba(240,237,230,0.3)'}}>Fractional. Fixed monthly cost.</span>
            </h2>
            <p style={{color:'rgba(255,255,255,0.65)',fontSize:'14px',lineHeight:'1.7'}}>
              The US GTM Engine is a five-person fractional team — CRO, CMO, sales intelligence analyst, content strategist, and SDR — operating in coordination from day one. One team, one scope, one point of accountability.
            </p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
            {['Fractional CRO','Fractional CMO','Sales Intelligence Analyst','Content Strategist','SDR'].map((role,i) => (
              <div key={i} style={{display:'flex',alignItems:'center',gap:'12px',padding:'12px 16px',backgroundColor:'rgba(255,255,255,0.03)',borderRadius:'6px',border:'1px solid rgba(255,235,195,0.07)'}}>
                <div style={{width:'6px',height:'6px',background:'#e8a020',borderRadius:'50%',flexShrink:0}}></div>
                <span style={{color:'#f0ede6',fontSize:'14px',fontWeight:'600'}}>{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sprint Section */}
      <section style={{padding:'48px 48px 0'}}>
        <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'32px'}}>
          <div style={{flex:1,height:'1px',background:'rgba(255,235,195,0.09)'}}></div>
          <span style={{color:'rgba(255,255,255,0.45)',fontSize:'12px',fontWeight:'600',letterSpacing:'0.14em',textTransform:'uppercase'}}>The US Launch Sprint</span>
          <div style={{flex:1,height:'1px',background:'rgba(255,235,195,0.09)'}}></div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'32px',marginBottom:'32px'}}>
          <div>
            <h2 style={{color:'#f0ede6',fontSize:'clamp(1.4rem,2vw,1.8rem)',fontWeight:'800',lineHeight:'1.2',letterSpacing:'-0.02em',marginBottom:'16px'}}>
              First US revenue.<br/><span style={{color:'rgba(240,237,230,0.3)'}}>Before first US hire.</span>
            </h2>
            <p style={{color:'rgba(255,255,255,0.65)',fontSize:'14px',lineHeight:'1.7',marginBottom:'16px'}}>
              Your first US CRO will cost you at least $400K in year one and has a 1-in-3 chance of leaving in 12 months. Before you make that commitment, you should know what will actually work for you in the US.
            </p>
            <p style={{color:'rgba(255,255,255,0.65)',fontSize:'14px',lineHeight:'1.7'}}>
              The US Launch Sprint is the first phase of the engagement — fully resourced, fixed-cost, built to produce signal fast.
            </p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'3px'}}>
            {[
              {num:'01',title:'ICP defined and validated',body:'Refined against real prospect response. Drawn from our 30M-record B2B sales intelligence database.'},
              {num:'02',title:'Competitive landscape mapped',body:'Named competitors, adjacent categories, and build-or-do-nothing alternatives.'},
              {num:'03',title:'US messaging built and tested',body:'Pressure-tested against actual US buyers in month one, not month nine.'},
              {num:'04',title:'500+ ICP contacts engaged',body:'LinkedIn and email, multi-channel, supported by original B2B content.'},
              {num:'05',title:'Pipeline opened',body:'First meetings booked. Opportunities qualified. Deals advanced by live US field sales.'},
            ].map((item,i) => (
              <div key={i} style={{display:'flex',alignItems:'flex-start',gap:'12px',padding:'12px 16px',backgroundColor:'rgba(255,255,255,0.02)',borderRadius:'6px',border:'1px solid rgba(255,235,195,0.07)'}}>
                <div style={{color:'#e8a020',fontSize:'12px',fontWeight:'700',minWidth:'20px',marginTop:'1px'}}>{item.num}</div>
                <div>
                  <div style={{color:'#f0ede6',fontSize:'14px',fontWeight:'600',marginBottom:'2px'}}>{item.title}</div>
                  <div style={{color:'rgba(255,255,255,0.60)',fontSize:'12px',lineHeight:'1.5'}}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{backgroundColor:'rgba(232,160,32,0.06)',border:'1px solid rgba(232,160,32,0.15)',borderRadius:'8px',padding:'20px 24px',marginBottom:'48px'}}>
          <p style={{color:'rgba(255,255,255,0.5)',fontSize:'14px',lineHeight:'1.7'}}>
            Every motion above is AI-accelerated and verified by your fractional CMO and CRO — pattern recognition at speed, operator judgment where it matters. At day 90 you have a validated US go-to-market, an active pipeline, and a clear answer: <span style={{color:'#f0ede6',fontWeight:'600'}}>is the US real for us, and if so, who exactly is buying?</span>
          </p>
        </div>
      </section>

      {/* After Day 90 */}
      <section style={{padding:'0 64px 48px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'32px'}}>
          <div style={{flex:1,height:'1px',background:'rgba(255,235,195,0.09)'}}></div>
          <span style={{color:'rgba(255,255,255,0.45)',fontSize:'12px',fontWeight:'600',letterSpacing:'0.14em',textTransform:'uppercase'}}>What happens after day 90</span>
          <div style={{flex:1,height:'1px',background:'rgba(255,235,195,0.09)'}}></div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))',gap:'12px',marginBottom:'32px'}}>
          {[
            {path:'Path 1',title:'Continue at Sprint pace.',body:'Same team, same intensity, same scope. The right move when early signal is strong. Do not change the formula. Compound it.'},
            {path:'Path 2',title:'Scale the Engine.',body:'Press the advantage. Add SDR and field sales capacity, run a US ICP tour, expand content, run account-based programs, brief US analysts.'},
            {path:'Path 3',title:'Bring it in-house.',body:'When ready, we transition the playbook, pipeline, CRM, and relationships. The incoming leader inherits a running US GTM Engine — not a cold start.'},
          ].map((item,i) => (
            <div key={i} style={{backgroundColor:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,235,195,0.09)',borderRadius:'10px',padding:'24px',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',background:'#e8a020'}}></div>
              <p style={{color:'#e8a020',fontSize:'12px',fontWeight:'600',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'8px'}}>{item.path}</p>
              <p style={{color:'#f0ede6',fontSize:'14px',fontWeight:'700',marginBottom:'8px',letterSpacing:'-0.01em'}}>{item.title}</p>
              <p style={{color:'rgba(255,255,255,0.38)',fontSize:'14px',lineHeight:'1.6'}}>{item.body}</p>
            </div>
          ))}
        </div>

        <p style={{color:'rgba(255,255,255,0.50)',fontSize:'14px',fontStyle:'italic',textAlign:'center',marginBottom:'0'}}>We do not lock you in. We earn the next quarter.</p>
      </section>

      {/* CTA */}
      <section style={{margin:'0 64px 64px',backgroundColor:'rgba(232,160,32,0.08)',border:'1px solid rgba(232,160,32,0.2)',borderRadius:'10px',padding:'24px 28px',display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'16px'}}>
        <div>
          <div style={{color:'#f0ede6',fontSize:'16px',fontWeight:'700',letterSpacing:'-0.01em',marginBottom:'4px'}}>Ready to enter the US the right way?</div>
          <div style={{color:'rgba(255,255,255,0.60)',fontSize:'14px'}}>One conversation. No commitment.</div>
        </div>
        <a href="/contact" style={{backgroundColor:'#e8a020',color:'#0f0e1a',fontSize:'14px',fontWeight:'700',padding:'12px 24px',borderRadius:'6px',whiteSpace:'nowrap',textDecoration:'none'}}>Get in touch →</a>
      </section>

    </main>
  )
}