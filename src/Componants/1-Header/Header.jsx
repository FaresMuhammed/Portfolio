import { useEffect, useState } from 'react';
import './header.css'

const Header = () => {

    const [ShowModel , setShowModel] = useState(false)
    const [Theme , setTheme] = useState(localStorage.getItem('mode') ?? 'dark')
    useEffect(() =>{
        if (Theme === 'light') {
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        }else{
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        }
    }, [Theme])

    return (
        <header className='flex'>

            <button className='menu flex' onClick={() => setShowModel(true)}>
                <span className='icon-menu'></span>
            </button>
            <div/>
            <nav>
                <ul className='flex'>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Articals</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Speaking</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>

            <button onClick={() => {
                localStorage.setItem('mode' , Theme ==='dark'? 'light' : 'dark')
                setTheme(localStorage.getItem('mode'))
            }} 
            className='mood flex'>
                <span className={ Theme === 'dark' ? 'icon-moon-o' : 'icon-sun'}></span>
            </button>

            {ShowModel && (            
                <div className='fixed'>
                    
                    <ul className="model">

                        <li>
                            <button className='icon-close' onClick={ () => setShowModel(false)} />
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Articals</a>
                        </li>
                        <li>
                            <a href="">Projects</a>
                        </li>
                        <li>
                            <a href="">Speaking</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>

                </div>)}

        </header>
    )
}

export default Header;
