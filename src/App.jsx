import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './views/Welcome';
import Skills from './views/Skills';
import Contact from './views/Contact';
import Projects from './views/Projects';
import './reset.css'; // Importa el reset CSS

const App = () => {
  return (

    <div className="font-sans">
      <Navbar/>
      <div>
        {/* Sección de bienvenida con animación */}
        <Welcome/>

        {/* Sección "Skills" */}
        <Skills/>
        
        {/* Sección "Projects" */}
        <Projects/>
        
        {/* Sección "Contact" */}
        <Contact/>
      </div>
    </div>
    
  );
};

export default App;
