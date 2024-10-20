import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Luke Goodson</h2>
        <p>
          <a href="mailto:lukejgoodson@gmail.com">lukejgoodson@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Luke Goodson, an experienced Business Intelligence Analyst with a passion for transforming raw data into actionable insights.{' '}
        I specialise in data analysis, visualisation, and crafting impactful solutions that drive decision-making.{' '}
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Luke Goodson <Link to="/">lukegoodson.co.uk</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
