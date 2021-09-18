import { useState, useRef } from 'react'
import './App.css'
import small_logo from './assets/small_logo.png'
import logo from './assets/logo.png'
import uniporn from './assets/uniporn.svg'
import chart from './assets/chart.png'
import graph from './assets/graph.png'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'
import telegram from './assets/telegram.png'
import reward from './assets/reward.png'
import buyback from './assets/buyback.png'
import big_logo from './assets/big_logo.png'
import vertical_graph from './assets/vertical_graph.png'
import hamburger from './assets/hamburger.png'
import cross from './assets/cross.png'
import wheel from './assets/wheel.png'
import bot from './assets/features_antibot.png'
import whale from './assets/features_antiwhale.png'
import gift from './assets/features_gift.png'

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
        <img
          src={small_logo}
          onClick={scrollToTop}
          className='pointer'
          id='nav-logo'
        />
        <ul className='nav-menu gotham yellow'>
          {/* <li className='white yellow-box'>Buy on PCS</li>
          <li className='white pink-box'>See Graph</li> */}
          <li className='nav-line' onClick={scrollToRoadmap}>
            Roadmap
          </li>
          <li className='nav-line' onClick={scrollToToken}>
            Tokenomics
          </li>
          <li className='nav-line' onClick={scrollToFeatures}>
            Features
          </li>
        </ul>
      </nav>
      <div className='mobile-nav'>
        <div>
          <img src={small_logo} id='mobile-logo' />
        </div>
        <img src={hamburger} id='hamburger' onClick={hamburgetClick} />
      </div>
      <div className={mobileNav}>
        <img src={cross} className='cross' onClick={hamburgetClick} />
        <div className='mobile-menu'>
          <h1 onClick={scrollToFeatures}>Features</h1>
          <h1 onClick={scrollToToken}>Tokenomics</h1>
          <h1 onClick={scrollToRoadmap}>Roadmap</h1>
        </div>
      </div>
      <div className='one'>
        <div className='one-flex'>
          <img src={big_logo} id='logo' />
          <div className='one-2'>
            <div className='albra bold pink albra one-dare'>
              WE
              <br />
              DARE
              <br />
              YOU
              <br />
              TO
              <br />
              SNIPE
              <br />
            </div>
            <div className='albra bold pink albra one-dare-mobile'>
              {/* <div className='button-flex'>
                <a className='one-button normal-text gotham'>See Graph</a>
                <a className='one-button normal-text gotham'>Buy Tokens</a>
              </div> */}
              WE DARE YOU TO SNIPE
            </div>
            <div className='black helvethaicaX normal-text one-text'>
              This is BabyUni ($BABYU) token. We are the first BSC token with
              $UNI auto-claim feature. 4% of every transaction will be rewarded
              back to every holder, while another 4% will be burnt forever and
              2% will be added to our Liquidity. Our smart contract has 111PG
              Anti-bot code, coupled with Anti-whale feature, please rest
              assured that bot will not have any place here.
            </div>
          </div>
        </div>
      </div>
      <div className='albra bold pink albra one-dare-mobile2'>
        WE DARE YOU TO SNIPE
      </div>
      <div className='black helvethaicaX normal-text one-text2'>
        This is BabyUni ($BABYU) token. We are the first BSC token with $UNI
        auto-claim feature. 4% of every transaction will be rewarded back to
        every holder, while another 4% will be burnt forever and 2% will be
        added to our Liquidity. Our smart contract has 111PG Anti-bot code,
        coupled with Anti-whale feature, please rest assured that bot will not
        have any place here.
      </div>
      <div className='features content-box' ref={featuresRef}>
        <h1 className='header-text blue albra normal'>Features</h1>
        <div className='features-flex'>
          <div className='features-box'>
            <img src={bot} />
            <h2 className='header-text black helvethaicaX bold'>Anti-Bot</h2>
            <h3 className='features-dare black helvethaicaX normal center'>
              WE
              <br />
              DARE
              <br />
              YOU
              <br />
              TO
              <br />
              SNIPE
              <br />
            </h3>
          </div>
          <div className='features-box'>
            <img src={whale} />
            <h2 className='header-text black helvethaicaX bold'>Anti-Whale</h2>
            <h3 className='normal-text black helvethaicaX normal'>
              Transaction involving more than 10 million $BabyU will be rejected
            </h3>
          </div>
          <div className='features-box'>
            <img src={gift} />
            <h2 className='header-text black helvethaicaX bold'>
              Distribution in Uniswap
            </h2>
            <h3 className='normal-text black helvethaicaX normal'>
              $UNI auto-claim 4% of every transaction will be rewarded back to
              holders
            </h3>
          </div>
        </div>
      </div>
      <div className='tokenomic content-box' ref={tokenRef}>
        <h1 className='header-text blue albra normal'>Tokenomics</h1>
        <div className='tokenomic-supply'>
          <div className='tokenomic-flex'>
            <h1 className='header-text white helvethaicaX bold'>Supply :</h1>
            <h2 className='white bebas normal'> 1 BILLION</h2>
          </div>
          <div className='tokenomic-flex'>
            <h1 className='header-text white helvethaicaX bold'>Initial LP</h1>
            <h2 className='white bebas normal'> 2 BNB</h2>
          </div>
        </div>
        <div className='center'>
          <img src={chart} id='chart' />
          <br />
          <img src={graph} id='graph' />
          <img src={vertical_graph} id='vertical_graph' />
        </div>
      </div>
      <div className='roadmap content-box' ref={roadMapRef}>
        <h1 className='header-text blue albra normal'>Roadmap</h1>
        <div className='roadmap-flex'>
          <div className='roadmap-box'>
            <div>
              <h2 className='normal-text blue gotham normal'>Launch and</h2>
              <h2 className='normal-text blue gotham normal '>Awareness</h2>
              <h3 className='blue gotham normal center line1'>
                Q<span className='bolder'>4</span>
              </h3>
              <h4 className='blue gotham bolder center'>
                <span>2021</span>
              </h4>
              <div>
                <ul className=''>
                  <li className='normal-text helvethaicaX lighter black '>
                    Publish Whitepaper
                  </li>
                  <li className='normal-text helvethaicaX lighter black '>
                    Influencer Marketing
                  </li>
                  <li className='normal-text helvethaicaX lighter black '>
                    Start initial lotto
                  </li>
                  <li className='normal-text helvethaicaX lighter black '>
                    List CMC
                  </li>
                  <li className='normal-text helvethaicaX lighter black '>
                    List Coingecko
                  </li>
                  <li className='normal-text helvethaicaX lighter black '>
                    Techrate Audit
                  </li>
                </ul>
              </div>
            </div>
            <div className=''>
              <h2 className='highlight-text helvethaicaX bold blue telenum'>
                10,000
              </h2>
              <h2 className='highlight-text helvethaicaX bold blue'>
                Telegram Members
              </h2>
            </div>
            <div className=''>
              <h2 className='highlight-text helvethaicaX bold blue'>
                5,000 Holders
              </h2>
            </div>
          </div>
          <div className='roadmap-box'>
            <div>
              <h2 className='normal-text blue gotham normal'>
                Building strong
              </h2>
              <h2 className='normal-text blue gotham normal'>
                ecosystem and Community
              </h2>
              <h3 className='blue gotham normal center line2'>
                Q<span className='bolder'>1</span>
              </h3>
              <h4 className='blue gotham bolder center'>
                <span>2022</span>
              </h4>
              <div>
                <ul className=''>
                  <li className='normal-text helvethaicaX lighter black '>
                    Certik Audit
                  </li>
                  <li className='normal-text helvethaicaX lighter black '>
                    Website Improvement
                  </li>
                  <li className='normal-text helvethaicaX lighter black '>
                    List more CEX
                  </li>
                </ul>
              </div>
            </div>
            <div className=''>
              <h2 className='highlight-text helvethaicaX bold blue telenum'>
                20,000
              </h2>
              <h2 className='highlight-text helvethaicaX bold blue'>
                Telegram Members
              </h2>
            </div>
            <div className=''>
              <h2 className='highlight-text helvethaicaX bold blue'>
                15,000 Holders
              </h2>
            </div>
          </div>
          <div className='roadmap-box'>
            <div>
              <h2 className='normal-text blue gotham normal'>
                Establishment as top
              </h2>
              <h2 className='normal-text blue gotham normal'>
                token in cryptoverse
              </h2>
              <h3 className='blue gotham normal center'>
                Q<span className='bolder'>2</span>
              </h3>
              <h4 className='blue gotham bolder center'>
                <span>2022</span>
              </h4>
              <div>
                <ul className=''>
                  <li className='normal-text helvethaicaX lighter black '>
                    Announce NFT
                  </li>
                  <li className='normal-text helvethaicaX lighter black '>
                    Get Elon Musk to tweet about us
                  </li>
                </ul>
              </div>
            </div>
            <div className=''>
              <h2 className='highlight-text helvethaicaX bold blue telenum'>
                50,000
              </h2>
              <h2 className='highlight-text helvethaicaX bold blue'>
                Telegram Members
              </h2>
            </div>
            <div className=''>
              <h2 className='highlight-text helvethaicaX bold blue'>
                30,000 Holders
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='contact'>
        <h1 className='header-text albra white bold'>Contact</h1>
        <div className='contact-flex2'>
          <div className='contact-flex'>
            <img src={twitter} />
            <a
              className='not-soon helvethaicaXCond white bold'
              href='https://twitter.com/CloudnineCrypto'
              target='_blank'
            >
              Cloudnine Crypto
            </a>
          </div>
          <div className='contact-flex'>
            <img src={telegram} />
            <a
              className='not-soon helvethaicaXCond white bold'
              href='https://t.me/cloud9crypto'
              target='_blank'
            >
              Cloudnine Crypto
            </a>
          </div>
          <div className='contact-flex'>
            <img src={telegram} />
            <a
              className='not-soon helvethaicaXCond white bold'
              href='https://t.me/babyuniofficial'
              target='_blank'
            >
              BabyUni
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
