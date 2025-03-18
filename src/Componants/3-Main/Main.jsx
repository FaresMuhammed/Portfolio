import { useState } from 'react'
import './Main.css'

const Allprojects = [
  {Title: '' , Category: '' , IMG: ''},
  {Title: '' , Category: '' , IMG: ''},
  {Title: '' , Category: '' , IMG: ''},
]
const Design = [
  {Title: '' , Category: '' , IMG: ''},
  {Title: '' , Category: '' , IMG: ''},
]
const Java = [
  {Title: '' , Category: '' , IMG: ''},
]
const React = [

]

const Main = () => {

  const [ active , setactive ] = useState('all')
  const [ Projects , setProjects ] = useState(Allprojects)


  return (
    <main className='flex'>

      <section className='left-sectionn flex '>
        <button onClick={() => {setactive('all')}} className={ active === 'all' ? 'active' : null}>All Projects</button>
        <button onClick={() => {setactive('design') , setProjects(Design)}}  className={ active === 'design' ? 'active' : null}>HTML & CSS</button>
        <button onClick={() => {setactive('java') , setProjects(Java)}}  className={ active === 'java' ? 'active' : null}>Javascript</button>
        <button onClick={() => {setactive('react') , setProjects(React)}}  className={ active === 'react' ? 'active' : null}>React</button>
      </section>

      <section className='right-sectionn flex '>
        {Projects.map( (item) => {
          return(
            <article key={item.IMG} className='card'>
              <img src={item.IMG} width={266} />
              <div style={{width: '266px'}} className="box">
                <h1 className='titlee'>{item.Title}</h1>
                <p className='subtitlee'>{item.Category}</p>
                <div className="flex iconss">
                  <div className='flex' style={{gap: '11px'}}>
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
    
                  <a href="" className='link flex'>
                    more
                    <span style={{alignSelf: 'end'}} className='icon-arrow-right'></span>
                  </a>
                </div>
              </div>
            </article>
          )
        } )}
      </section>


    
    </main>
  )
}
export default Main;
