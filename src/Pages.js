import './App.css';
import Main from './Main'
import About from './About'
import Resume from './Resume'
import Skills from './Skills'
import Contact from './Contact'

function pages(){
    return(
    <>
      <Main />
      <About />
      <Resume />
      <Skills />
      <Contact />
    </>
    );
}

export default pages;