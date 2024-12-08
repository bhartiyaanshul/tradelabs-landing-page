import React from 'react'
import './HomePage.css'
import { Navbar } from '../../components/Navbar/Navbar'
import betaicon from './BetaIcon.png';
import accessicon from './AccessIcon.png';
import ctaicon from './CTAIcon.png';
import partner1 from './Logo.png';
import partner2 from './Logo (1).png';
import partner3 from './Logo (2).png';
import partner4 from './Logo (3).png';
import display from './display.png';

export const HomePage = () => {
  return (
    <div className='home-page'>
        <Navbar />
        <div className='main-section'>
            <div className='main-section-content'>
                <div className='beta-button'>
                    <img src={betaicon} className='beta-icon' />
                    <div>TradeLabs bot is now in beta</div>
                </div>
                <div className='main-heading'>
                    Automate Your Trades <br></br>
                    with AI Precision
                </div>
                <div className='sub-heading'>
                    Copy trades, automate strategies, and manage accounts effortlessly-powered by AI. <br></br>
                    Compatible with Discord, Telegram, TradingView, and Top brokers.
                </div>
                <div className='group-buttons'>
                    <div className='get-started-button'>
                        <div>Get Started</div>
                        <img src={ctaicon} />
                    </div>
                    <div className='get-access-button'>
                        <img src={accessicon} /> 
                        <div>Get Access</div>
                    </div>
                </div>
            </div>
            <div className='partners'>
                <img src={partner1} className='partner'/>
                <img src={partner2} className='partner'/>
                <img src={partner3} className='partner'/>
                <img src={partner4} className='partner'/>
            </div>
        </div>
        <img src={display} className='display'/>
    </div>
  )
}
