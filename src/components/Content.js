import React, { Component } from 'react';
import ParallaxBack from './ParallaxBack';
import '../styles/Content.css';

import { Divider, Anchor, Avatar, Icon } from 'antd';
import { Collapse } from 'react-collapse';

const { Link } = Anchor;

class Content extends Component {
  render() {
    return (
      <main>
        <section className="content-section" id="home">
          <div className="hero px-4" style={{ zIndex: 0 }}>
            <div className="hero-item">
              <ParallaxBack />
            </div>
            {/* <div className="hero-item ml-5 mb-3" style={{ zIndex: 1 }}>
              <h1 className="text-shadow"> lo-fi prototype </h1>
              <div className="pl-1 text-shadow">
                <p>
                  <b>haha, not really.</b> Imagine doing things when you can just screenshot the emulator.
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </main>
    )
  }
}

export default Content;
