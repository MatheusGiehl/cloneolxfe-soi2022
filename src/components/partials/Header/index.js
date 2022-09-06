import React from 'react'
import { HeaderArea } from './styled'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <HeaderArea>
        <div className='container'>
            <div className='logo'>
                <Link to='/'>
                <span className='logo-1'>O</span>
                <span className='logo-2'>L</span>
                <span className='logo-3'>X</span>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/signin'>Login</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Cadastrar</Link>
                    </li>
                    <li>
                        <Link to='/signin' className='button'>Anúnciar</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </HeaderArea>
    )
}

export default Header 