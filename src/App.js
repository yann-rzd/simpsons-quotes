import React from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
//import QuoteCard from './components/QuoteCard';


/*function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCard 
      image="https://pm1.narvii.com/7070/aeaeadea89d89327a8e5f4f83d10272dc337425fr1-1200-1200v2_128.jpg"
      character="Nelson Muntz"
      quote="Shoplifting is a victimless crime, like punching someone in the dark."
      />
      <QuoteCard 
      image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
      character="Homer Simpson"
      quote="I believe the children are the future... Unless we stop them now!"
      />
    </div>
  );
}*/

function App() {
  return (
    <div>
      <Navbar/>
      <QuoteList/>
    </div>
  )
}



export default App;
