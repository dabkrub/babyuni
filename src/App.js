import { useState, useRef } from 'react'
import './App.css'
import small_logo from './assets/small_logo.png'
import logo from './assets/logo.png'
import uniporn from './assets/uniporn.svg'
import head from './assets/head.png'
import chart from './assets/chart.png'
import graph from './assets/graph.png'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'
import telegram from './assets/telegram.png'
import reward from './assets/reward.png'
import buyback from './assets/buyback.png'
import vertical_word from './assets/vertical_word.png'
import big_logo from './assets/big_logo.png'
import vertical_graph from './assets/vertical_graph.png'
import hamburger from './assets/hamburger.png'
import cross from './assets/cross.png'
import Whitepaper from './assets/Whitepaper.pdf'
import wheel from './assets/wheel.png'

function App() {
  const [mobileNav, setMobileNav] = useState('mobile-nav-click')
  const TopRef = useRef(null)
  const whyUsRef = useRef(null)
  const featuresRef = useRef(null)
  const tokenRef = useRef(null)
  const seeGraphRef = useRef(null)
  const roadMapRef = useRef(null)
  const buyTokenRef = useRef(null)
  const hamburgetClick = () => {
    mobileNav === 'mobile-nav-click'
      ? setMobileNav('mobile-nav-click move')
      : setMobileNav('mobile-nav-click')
  }
  const scrollToWhyUs = () => {
    whyUsRef.current.scrollIntoView({ behavior: 'smooth' })
    mobileNav === 'mobile-nav-click move'
      ? setMobileNav('mobile-nav-click')
      : setMobileNav('mobile-nav-click')
  }
  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' })
    mobileNav === 'mobile-nav-click move'
      ? setMobileNav('mobile-nav-click')
      : setMobileNav('mobile-nav-click')
  }
  const scrollToToken = () => {
    tokenRef.current.scrollIntoView({ behavior: 'smooth' })
    mobileNav === 'mobile-nav-click move'
      ? setMobileNav('mobile-nav-click')
      : setMobileNav('mobile-nav-click')
  }
  const scrollToSeeGraph = () => {
    seeGraphRef.current.scrollIntoView({ behavior: 'smooth' })
    mobileNav === 'mobile-nav-click move'
      ? setMobileNav('mobile-nav-click')
      : setMobileNav('mobile-nav-click')
  }
  const scrollToRoadmap = () => {
    roadMapRef.current.scrollIntoView({ behavior: 'smooth' })
    mobileNav === 'mobile-nav-click move'
      ? setMobileNav('mobile-nav-click')
      : setMobileNav('mobile-nav-click')
  }
  const scrollToTop = () => {
    TopRef.current.scrollIntoView({ behavior: 'smooth' })
    mobileNav === 'mobile-nav-click move'
      ? setMobileNav('mobile-nav-click')
      : setMobileNav('mobile-nav-click')
  }
  return (
    <div ref={TopRef}>
      <nav>
        <img src={small_logo} onClick={scrollToTop} className='pointer'/>
        <span className="normal-text albra white nav-text bold pointer" onClick={scrollToTop}>
          Baby Uniporn
        </span>
        <ul className="nav-menu gotham cyan">
          {/* <li className="white cyan-box">Buy Tokens</li>
          <li className="white pink-box" onClick={scrollToSeeGraph}>
            See Graph
          </li> */}
          <li className="nav-line" onClick={scrollToRoadmap}>
            Roadmap
          </li>
          <li className="nav-line" onClick={scrollToToken}>
            Tokenomics
          </li>
          <li className="nav-line" onClick={scrollToFeatures}>
            Features
          </li>
          <li className="nav-line" onClick={scrollToWhyUs}>
            Why us
          </li>
        </ul>
      </nav>
      <div className="mobile-nav">
        <div>
          <img src={small_logo} id="mobile-logo" />
          <h1>Baby Uniporn</h1>
        </div>
        <img src={hamburger} onClick={hamburgetClick} />
      </div>
      <div className={mobileNav}>
        <img src={cross} className="cross" onClick={hamburgetClick} />
        <div className="mobile-menu">
          <h1 onClick={scrollToWhyUs}>Why Us</h1>
          <h1 onClick={scrollToFeatures}>Features</h1>
          <h1 onClick={scrollToToken}>Tokenomics</h1>
          <h1 onClick={scrollToRoadmap}>Roadmap</h1>
        </div>
        <a href={Whitepaper} target="_blank" className="mobile-whitepaper">
          Read Whitepaper
        </a>
      </div>
      <div className="one" >
        <img src={head} id="head" />
        <div className="mobile-center">
          <img src={big_logo} id="big_logo" />
          <a href={Whitepaper} target="_blank" className="whitepaper">
            Read Whitepaper
          </a>
          {/* <div className="mobile-box" onClick={scrollToSeeGraph}>See Graph</div>
          <div className="mobile-box">Buy Tokens</div> */}
        </div>
        <img src={vertical_word} id="vertical_word" />
      </div>
      <div className="baby ">
        <h1 className="title-text pink albra bold">Baby Uniporn</h1>
        <h2 className="normal-text black helvethaicaX normal">
          BabyUniporn is a community-rewarding NSFW token. We offer investing
          opportunities to people with strong sexual drive. 4% of every
          transactions will be used to buy pornography-related commodities and
          return it to our Holders in form of lottery.
        </h2>
      </div>
      <div className="why content-box" ref={whyUsRef}>
        <h1 className="header-text blue albra normal">
          Why invest in BabyUniporn ?
        </h1>
        <h2 className="normal-text black helvethaicaX normal">
          BabyUniporn is a deflationary token with the goal of decentralizing
          the sex business. We all have distinct tastes, and some of them do
          deviate from the industry's norms. We want to step up and fill that
          void. Every transaction will be taxed and those money will be used to
          provide rewards, both in form of tokens and pornography-related
          commodities, to our diamond-hands holder.{' '}
          <p>
            We will transform the business, ushering them into a future in which
            everyone may enjoy their own tastes in a freshly defined sex
            industry.
          </p>
        </h2>
      </div>
      <div className="features content-box" ref={featuresRef}>
        <h1 className="header-text blue albra normal">Features</h1>
        <div className="features-flex">
          <div className="features-box">
            <img src={reward} />
            <h2 className="header-text black helvethaicaX bold">Reflection</h2>
            <h3 className="normal-text black helvethaicaX normal">
              We know that diamond-hands are important to build such a strong
              community, so we want to reward their commitment with 4%
              redistribution of $BabyUniporn. Hold your token tightly, and we
              will go to the moon together!
            </h3>
          </div>
          <div className="features-box">
            <img src={buyback} />
            <h2 className="header-text black helvethaicaX bold">
              Buy-Back Function
            </h2>
            <h3 className="normal-text black helvethaicaX normal">
              In each transaction, BNB is stored inside a locked wallet and
              buy-back will be initiated to establish a strong floor price.
            </h3>
          </div>
        </div>
        <div className="features-lottery">
          <h2 className="header-text black helvethaicaX bold">Lottery</h2>
          <h3 className="normal-text black helvethaicaX normal">
            We give investors the chance to win luxury rewards in our brand-new
            lottery pool for every 10,000 tokens owned. The awards will begin
            with a number of one-year Pornhub Premium subscriptions and
            exclusive nudes from our community-voted brand ambassadors. Simply
            hold BabyUniporn to win!
          </h3>
          <img src={wheel} id="wheel" />
        </div>
      </div>
      <div className="tokenomic content-box" ref={tokenRef}>
        <h1 className="header-text blue albra normal">Tokenomics</h1>
        <div className="tokenomic-supply">
          <h1 className="header-text white helvethaicaX bold">
            Initial Supply:
          </h1>
          <h2 className="white bebas normal">69 million</h2>
        </div>
        <div className="center">
          <img src={chart} id="chart" />
          <img src={graph} id="graph" />
          <img src={vertical_graph} id="vertical_graph" />
        </div>
      </div>
      <div className="roadmap content-box" ref={roadMapRef}>
        <h1 className="header-text blue albra normal">Roadmap</h1>
        <div className="roadmap-flex">
          <div className="roadmap-box">
            <div>
              <h2 className="normal-text blue gotham normal">Launch and</h2>
              <h2 className="normal-text blue gotham normal ">Awareness</h2>
              <h3 className="blue gotham normal center line1">
                Q<span className="bolder">3</span>
              </h3>
              <h4 className="blue gotham bolder center">
                <span>2021</span>
              </h4>
              <div>
                <ul className="">
                  <li className="normal-text helvethaicaX lighter black ">
                    Fair launch 16 July
                  </li>
                  <li className="normal-text helvethaicaX lighter black ">
                    Publish Whitepaper
                  </li>
                  <li className="normal-text helvethaicaX lighter black ">
                    Influencer Marketing
                  </li>
                  <li className="normal-text helvethaicaX lighter black ">
                    Start initial lotto
                  </li>
                  <li className="normal-text helvethaicaX lighter black ">
                    List CMC
                  </li>
                  <li className="normal-text helvethaicaX lighter black ">
                    List Coingecko
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <h2 className="highlight-text helvethaicaX bold blue telenum">
                10,000
              </h2>
              <h2 className="highlight-text helvethaicaX bold blue">
                Telegram Members
              </h2>
            </div>
            <div className="">
              <h2 className="highlight-text helvethaicaX bold blue">
                5,000 Holders
              </h2>
            </div>
          </div>
          <div className="roadmap-box">
            <div>
              <h2 className="normal-text blue gotham normal">
                Building strong
              </h2>
              <h2 className="normal-text blue gotham normal">
                ecosystem and Community
              </h2>
              <h3 className="blue gotham normal center line2">
                Q<span className="bolder">4</span>
              </h3>
              <h4 className="blue gotham bolder center">
                <span>2021</span>
              </h4>
              <div>
                <ul className="">
                  <li className="normal-text helvethaicaX lighter black ">
                    Website Improvement
                  </li>
                  <li className="normal-text helvethaicaX lighter black ">
                    List more CEX
                  </li>
                  <li className="normal-text helvethaicaX lighter black ">
                    Announce BabyUniporn Ambassadors
                  </li>
                  <li className="normal-text helvethaicaX lighter black ">
                    Announce Partnership with AV platformg
                  </li>
                  <li className="normal-text helvethaicaX lighter black ">
                    Community-voted Lotto
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <h2 className="highlight-text helvethaicaX bold blue telenum">
                20,000
              </h2>
              <h2 className="highlight-text helvethaicaX bold blue">
                Telegram Members
              </h2>
            </div>
            <div className="">
              <h2 className="highlight-text helvethaicaX bold blue">
                15,000 Holders
              </h2>
            </div>
          </div>
          <div className="roadmap-box">
            <div>
              <h2 className="normal-text blue gotham normal">
                Establishment as top
              </h2>
              <h2 className="normal-text blue gotham normal">
                token in cryptoverse
              </h2>
              <h3 className="blue gotham normal center">
                Q<span className="bolder">1</span>
              </h3>
              <h4 className="blue gotham bolder center">
                <span>2022</span>
              </h4>
              <div>
                <ul className="">
                  <li className="normal-text helvethaicaX lighter black ">
                    Announce NFT
                  </li>
                  <li className="normal-text helvethaicaX lighter black ">
                    More AV platform partnership
                  </li>
                  <li className="normal-text helvethaicaX lighter black ">
                    More Ambassadors
                  </li>
                  <li className="normal-text helvethaicaX lighter black ">
                    Get Elon Musk to tweet about us
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <h2 className="highlight-text helvethaicaX bold blue telenum">
                50,000
              </h2>
              <h2 className="highlight-text helvethaicaX bold blue">
                Telegram Members
              </h2>
            </div>
            <div className="">
              <h2 className="highlight-text helvethaicaX bold blue">
                30,000 Holders
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <h1 className="header-text albra white bold">Contact</h1>
        <div className="contact-flex2">
          <div className="contact-flex">
            <img src={twitter} />
            <a className="not-soon helvethaicaXCond white bold" href="https://twitter.com/babyuniporn" target="_blank">
              BabyUnipornOfficial
            </a>
          </div>
          <div className="contact-flex">
            <img src={telegram} />
            <a className="not-soon helvethaicaXCond white bold" href="https://t.me/BabyUnipornOfficial" target="_blank">
              BabyUnipornOfficial
            </a>
          </div>
          <a href={Whitepaper} target="_blank" className="contact-whitepaper">
            Read Whitepaper
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
