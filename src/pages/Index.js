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
            <Link to="/">Welcome to my site about... well me!</Link>
          </h2>
          <p>
            This site is statically-generated and created using react application
            written with modern Javascript.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
