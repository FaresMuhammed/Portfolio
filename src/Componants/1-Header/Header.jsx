import { useState } from 'react';
import './header.css'

const Header = () => {

    const [ShowModel , setShowModel] = useState(false)

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

            <button className='mood flex'>
                <span className='icon-moon-o'></span>
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
