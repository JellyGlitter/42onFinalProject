import React from 'react'

import './Toolbar.css'
import Logo from './LOGO420.png';

const toolbar = props => (
  <header className="toolbar">
      <nav className="toolbar_navigation">
          <div className="toolbar_logo">
                <img src={Logo} className="logo" alt=""/>
          </div>
           <div className="spacer"/>
            <div className="toolbar_nav_items">
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/idea">The Idea</a></li>
                  <li><a href="/form">Get In Touch</a></li>
                  <li><a href="/login">Login</a></li>
              </ul>
            </div>
      </nav>
  </header>
);

export default toolbar;