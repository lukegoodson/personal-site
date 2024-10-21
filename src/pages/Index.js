import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Luke Goodson's personal website."
      + ' bit of this and that'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome to my Professional Portfolio</Link>
          </h2>
          <p>
            Explore my work, skills, and Professional journey here!
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website!{' '}
        Within my <Link to="/resume">resume</Link>, you&apos;ll find an overview of my professional journey, the skills I&apos;ve developed, or you can check out my{' '}
        <Link to="/projects">Projects</Link> that highlight some of my expertise.{' '}
        Whether you&apos;re looking to explore my work or learn more <Link to="/about">about</Link> me, I hope this site provides valuable insight into my contributions and capabilities.{' '}
        Thank you for visiting, and feel free to <Link to="/contact">reach</Link> out for any inquiries!
      </p>
    </article>
  </Main>
);

export default Index;
