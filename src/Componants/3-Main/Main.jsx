import { useState } from 'react'
import './Main.css'
import { AnimatePresence, motion } from 'framer-motion'
const Allprojects = [
  {Title: 'Dashboard' , Category: 'design' , IMG: 'Images/Screenshot 2025-03-18 221700.png' , Link: 'https://beautiful-tiramisu-f27bee.netlify.app/' , Link2: 'https://github.com/FaresMuhammed/Dashboard'},
  {Title: 'Facebook clone' , Category: 'design' , IMG: 'Images/Screenshot 2025-03-18 215208.png' , Link: 'https://roaring-maamoul-486e07.netlify.app/' , Link2: 'https://github.com/FaresMuhammed/Facebook-Clone'},
  {Title: 'Netflix clone' , Category: 'design' , IMG: 'Images/Screenshot 2025-03-18 222121.png' , Link: 'https://musical-beignet-7a74a8.netlify.app/' , Link2: 'https://github.com/FaresMuhammed/Netflix-Clone'},
  {Title: 'CRUD system' , Category: 'java' , IMG: 'Images/Screenshot 2025-03-18 222525.png' , Link: 'https://clever-narwhal-6252b1.netlify.app/' , Link2: 'https://github.com/FaresMuhammed/CRUD'},
  {Title: 'E-commerce project' , Category: 'react' , IMG: 'Images/Screenshot 2025-03-21 142557.png' , Link: 'https://reactproject-ecommerce.netlify.app/' , Link2: 'https://github.com/FaresMuhammed/React-ecommerce'},
  {Title: 'Streamlines oil and gas' , Category: 'react' , IMG: 'Images/Screenshot 2025-03-18 223602.png' , Link: 'https://slsog.com/' , Link2: 'https://github.com/FaresMuhammed/streams'},
]


const Main = () => {

  const [ active , setactive ] = useState('all')
  const [ Projects , setProjects ] = useState(Allprojects)


  return (
    <main className='flex'>

      <section className='left-sectionn flex '>
        <button onClick={() => {
          setactive('all')
          setProjects(Allprojects)}} 
          className={ active === 'all' ? 'active' : null}>
            All Projects
        </button>

        <button onClick={() => {
          setactive('design'); 
          const Design = Allprojects.filter((item) => {
            return item.Category === 'design'
          })
          setProjects(Design)
          }}
          className={ active === 'design' ? 'active' : null}>
            HTML & CSS
        </button>

        <button onClick={() => {setactive('java'); 
          const Java = Allprojects.filter((item) => {
            return item.Category === 'java'
          })
          setProjects(Java)
          }}
          className={ active === 'java' ? 'active' : null}>
            Javascript
        </button>
        
        <button onClick={() => {setactive('react')           
        const React = Allprojects.filter((item) => {
            return item.Category === 'react'
          })
          setProjects(React)
          }}
          className={ active === 'react' ? 'active' : null}>
            React
        </button>
      </section>

      <section className='right-sectionn flex '>
        {Projects.map( (item) => {
          return(
            <AnimatePresence>

            <motion.article
            layout
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{type: 'spring'}}
            key={item.IMG} className='card'>
              <img src={item.IMG} width={266} />
              <div style={{width: '266px'}} className="box">
                <h1 className='titlee mb-2'>{item.Title}</h1>
                {/* <p className='subtitlee'>{item.Category}</p> */}
                <div className="flex iconss mt-2">
                  <div className='flex' style={{gap: '11px'}}>
                    <a href={item.Link2} target='_blank'><div className="icon-github"></div></a>
                  </div>
    
                  <a href={item.Link} target='_blank' className='link flex'>
                    View project
                    <span style={{alignSelf: 'end'}} className='icon-arrow-right'></span>
                  </a>
                </div>
              </div>
            </motion.article>
            </AnimatePresence>

          )
        } )}
      </section>
    </main>
  )
}
export default Main;
