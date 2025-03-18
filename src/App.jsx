

import Header from "./Componants/1-Header/Header"
import Hero from './Componants/2-Hero/Hero'
import Main from './Componants/3-Main/Main'
import Contact from './Componants/4-Contact/Contact'
import Footer from './Componants/5-Footer/Footer'

function App() {

  return (
    <div className="container" id="up">

      <Header/>
      <Hero/>
      <div className="divider"/>
      <Main/>
      <div className="divider"/>
      <Contact/>
      <div className="divider"/>
      <Footer/>

      <a href="#up">
        <button className="btn-scroll icon-keyboard_arrow_up"></button>
      </a>

    </div>
  )
}

export default App