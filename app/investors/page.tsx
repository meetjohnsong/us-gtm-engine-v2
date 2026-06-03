export default function InvestorsPage() {
  return (
    <main style={{fontFamily:"'Plus Jakarta Sans', sans-serif",maxWidth:'1100px',margin:'0 auto'}}>

      {/* Hero */}
      <section style={{padding:'56px 48px 48px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'24px'}}>
          <div style={{width:'6px',height:'6px',background:'#e8a020',borderRadius:'50%'}}></div>
          <span style={{color:'#e8a020',fontSize:'11px',fontWeight:'600',letterSpacing:'0.14em',textTransform:'uppercase'}}>For PE & VC Operating Partners</span>
        </div>
        <h1 style={{fontSize:'clamp(2rem,3vw,2.8rem)',fontWeight:'800',color:'#f0ede6',lineHeight:'1.08',letterSpacing:'-0.03em',marginBottom:'20px'}}>
          Your portfolio company's US GTM strategy<br/>
          <span style={{color:'rgba(240,237,230,0.3)'}}>is built on assumption.</span>
        </h1>
        <p style={{color:'rgba(255,255,255,0.4)',fontSize:'14px',lineHeight:'1.7',maxWidth:'520px'}}>
          The default playbook has not changed in twenty years. Hire US country manager or CRO. Fund marketing. Launch outbound. Hope for traction. The typical failed US expansion costs $1-2M and 12-18 months before an operating partner has clean enough signal to redirect.
        </p>
      </section>

      {/* Pull Quote */}
      <section style={{padding:'0 48px',marginBottom:'48px'}}>
        <div style={{borderLeft:'3px solid #e8a020',paddingLeft:'24px'}}>
          <p style={{color:'#f0ede6',fontSize:'clamp(1.2rem,2vw,1.6rem)',fontWeight:'700',lineHeight:'1.3',letterSpacing:'-0.02em'}}>
            "The problem is not the product or the founder. The problem is sequencing."
          </p>
        </div>
      </section>

      {/* Governed Alternative */}
      <section style={{margin:'0 48px 2px',backgroundColor:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'10px',padding:'32px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px',alignItems:'center'}}>
          <div>
            <p style={{color:'#e8a020',fontSize:'10px',fontWeight:'600',letterSpacing:'0.14em',textTransform:'uppercase',marginBottom:'16px'}}>The governed alternative</p>
            <h2 style={{color:'#f0ede6',fontSize:'clamp(1.4rem,2vw,1.8rem)',fontWeight:'800',lineHeight:'1.2',letterSpacing:'-0.02em',marginBottom:'16px'}}>
              Validate the US market before you build for it. <span style={{color:'rgba(240,237,230,0.3)'}}>A governed entry path.</span>
            </h2>
            <p style={{color:'rgba(255,255,255,0.4)',fontSize:'13px',lineHeight:'1.7'}}>
              The US GTM Engine runs a structured, time-bounded validation gate before scaled US capital is deployed. A five-person fractional team operates as one engagement, with one scope and one point of accountability. The portfolio company gets a working US go-to-market. You get evidence before you commit the next tranche.
            </p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
            {[
              {label:'For the portfolio company',val:'A working US go-to-market'},
              {label:'For the operating partner',val:'Evidence before the next tranche'},
              {label:'For the investment committee',val:'A defensible answer on US opportunity'},
              {label:'Timeline',val:'90-day fixed-cost sprint'},
              {label:'Cost vs. failed expansion',val:'A fraction of $1-2M'},
            ].map((item,i) => (
              <div key={i} style={{padding:'12px 16px',backgroundColor:'rgba(255,255,255,0.03)',borderRadius:'6px',border:'1px solid rgba(255,255,255,0.05)'}}>
                <div style={{color:'rgba(255,255,255,0.35)',fontSize:'10px',fontWeight:'600',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'2px'}}>{item.label}</div>
                <div style={{color:'#f0ede6',fontSize:'13px',fontWeight:'600'}}>{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sprint Section */}
      <section style={{padding:'48px 48px 0'}}>
        <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'32px'}}>
          <div style={{flex:1,height:'1px',background:'rgba(255,255,255,0.07)'}}></div>
          <span style={{color:'rgba(255,255,255,0.25)',fontSize:'10px',fontWeight:'600',letterSpacing:'0.14em',textTransform:'uppercase'}}>The US Launch Sprint</span>
          <div style={{flex:1,height:'1px',background:'rgba(255,255,255,0.07)'}}></div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'32px',marginBottom:'32px'}}>
          <div>
            <h2 style={{color:'#f0ede6',fontSize:'clamp(1.4rem,2vw,1.8rem)',fontWeight:'800',lineHeight:'1.2',letterSpacing:'-0.02em',marginBottom:'16px'}}>
              90 days. A validation gate<br/><span style={{color:'rgba(240,237,230,0.3)'}}>before scaled capital.</span>
            </h2>
            <p style={{color:'rgba(255,255,255,0.4)',fontSize:'13px',lineHeight:'1.7',marginBottom:'16px'}}>
              Your first US CRO will cost the portfolio company at least $400K in year one, with a 1-in-3 chance of leaving in 12 months. The promise usually is "I can activate my network of B2B buyers" — but a network promise is not a validated ICP or messaging framework, and relationships are not a repeatable pipeline.
            </p>
            <p style={{color:'rgba(255,255,255,0.4)',fontSize:'13px',lineHeight:'1.7'}}>
              The US Launch Sprint is a 90-day, fixed-cost engagement designed to produce validation before large financial commitments.
            </p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'3px'}}>
            {[
              {num:'01',title:'ICP defined and validated',body:'Refined against real prospect response. Drawn from our 30M-record B2B sales intelligence database.'},
              {num:'02',title:'Competitive landscape mapped',body:'Named competitors, adjacent categories, and build-or-do-nothing alternatives.'},
              {num:'03',title:'US messaging built and tested',body:'Pressure-tested against actual US buyers in month one, not month nine.'},
              {num:'04',title:'500+ ICP contacts engaged',body:'LinkedIn and email, multi-channel, supported by original B2B content.'},
              {num:'05',title:'Pipeline opened and CRM-documented',body:'Auditable evidence of engagement quality — not anecdotal traction.'},
            ].map((item,i) => (
              <div key={i} style={{display:'flex',alignItems:'flex-start',gap:'12px',padding:'12px 16px',backgroundColor:'rgba(255,255,255,0.02)',borderRadius:'6px',border:'1px solid rgba(255,255,255,0.05)'}}>
                <div style={{color:'#e8a020',fontSize:'11px',fontWeight:'700',minWidth:'20px',marginTop:'1px'}}>{item.num}</div>
                <div>
                  <div style={{color:'#f0ede6',fontSize:'12px',fontWeight:'600',marginBottom:'2px'}}>{item.title}</div>
                  <div style={{color:'rgba(255,255,255,0.35)',fontSize:'11px',lineHeight:'1.5'}}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{backgroundColor:'rgba(232,160,32,0.06)',border:'1px solid rgba(232,160,32,0.15)',borderRadius:'8px',padding:'20px 24px',marginBottom:'48px'}}>
          <p style={{color:'rgba(255,255,255,0.5)',fontSize:'13px',lineHeight:'1.7'}}>
            At day 90, the operating partner has CRM-documented evidence of US engagement quality, observable conversion patterns against a validated ICP, and a defensible answer to the question every investment committee asks: <span style={{color:'#f0ede6',fontWeight:'600'}}>is the US opportunity real for this company, and at what scale?</span>
          </p>
        </div>
      </section>

      {/* After Day 90 */}
      <section style={{padding:'0 48px 48px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'32px'}}>
          <div style={{flex:1,height:'1px',background:'rgba(255,255,255,0.07)'}}></div>
          <span style={{color:'rgba(255,255,255,0.25)',fontSize:'10px',fontWeight:'600',letterSpacing:'0.14em',textTransform:'uppercase'}}>What happens after day 90</span>
          <div style={{flex:1,height:'1px',background:'rgba(255,255,255,0.07)'}}></div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'12px',marginBottom:'32px'}}>
          {[
            {path:'Path 1',title:'Continue at Sprint pace.',body:'Signal is strong, the work is producing, and the right move is to compound momentum. Same team, same intensity, same scope.'},
            {path:'Path 2',title:'Scale capital deployment with confidence.',body:'The Sprint produced the evidence to greenlight the next tranche. Now the operating partner is funding a proven motion, not an experiment.'},
            {path:'Path 3',title:'Graduate to in-house team.',body:'When the portfolio company is ready to hire a permanent US team, the incoming leader inherits a running US GTM Engine — the playbook, the live pipeline, the CRM, and the relationships — not a cold start.'},
          ].map((item,i) => (
            <div key={i} style={{backgroundColor:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'10px',padding:'24px',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',background:'#e8a020'}}></div>
              <p style={{color:'#e8a020',fontSize:'10px',fontWeight:'600',letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'8px'}}>{item.path}</p>
              <p style={{color:'#f0ede6',fontSize:'14px',fontWeight:'700',marginBottom:'8px',letterSpacing:'-0.01em'}}>{item.title}</p>
              <p style={{color:'rgba(255,255,255,0.38)',fontSize:'12px',lineHeight:'1.6'}}>{item.body}</p>
            </div>
          ))}
        </div>

        <p style={{color:'rgba(255,255,255,0.3)',fontSize:'13px',fontStyle:'italic',textAlign:'center'}}>We are built to finish, not to embed. The goal is a portfolio company running its own US go-to-market with confidence — on a timeline the operating partner can underwrite.</p>
      </section>

      {/* CTA */}
      <section style={{margin:'0 48px 64px',backgroundColor:'rgba(232,160,32,0.08)',border:'1px solid rgba(232,160,32,0.2)',borderRadius:'10px',padding:'24px 28px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <div style={{color:'#f0ede6',fontSize:'16px',fontWeight:'700',letterSpacing:'-0.01em',marginBottom:'4px'}}>Ready to put a validation gate in front of your next US expansion?</div>
          <div style={{color:'rgba(255,255,255,0.35)',fontSize:'12px'}}>One conversation. No commitment.</div>
        </div>
        <a href="/contact" style={{backgroundColor:'#e8a020',color:'#080d1a',fontSize:'13px',fontWeight:'700',padding:'12px 24px',borderRadius:'6px',whiteSpace:'nowrap',textDecoration:'none'}}>Book a call →</a>
      </section>

    </main>
  )
}