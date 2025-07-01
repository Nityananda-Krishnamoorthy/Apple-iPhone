import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import Chip from './components/Chip';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';


const App = () => {
  return (
    <main className='bg-black overflow-x-hidden'>
      <Navbar  />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Chip/>
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);