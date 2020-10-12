import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="Navbar">
      <a
        className="SimpsonsQuotes"
        href="https://fr.wikipedia.org/wiki/Les_Simpson"
        target="_blank"
        rel="noopener noreferrer"
      >
        Simpsons Quotes
      </a>
    </nav>
  )
}

export default Navbar;