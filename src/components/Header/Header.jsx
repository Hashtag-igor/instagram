import React from 'react';
import "./header.css";
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { BsPlusSquare } from 'react-icons/bs';
import { MdOutlineExplore } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { IconContext } from 'react-icons';


export default function Header(){
    return(
        <header className='header'>
            <div className='container'>
                <img className='logo' src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
                <div className='input-fake'>
                    <IconContext.Provider value={{ color: 'gray', size: '20px'}}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                    <input placeholder='Pesquisar'/>
                </div>
                <div className='menu-icons'>
                    <IconContext.Provider value={{size: '26px'}}>
                        <div><AiFillHome /></div>
                        <div><RiMessengerLine /></div>
                        <div><BsPlusSquare /></div>
                        <div><MdOutlineExplore /></div>
                        <div><FiHeart /></div>
                    </IconContext.Provider>
                    <img className='img-user' src="https://avatars.githubusercontent.com/u/77364859?v=4"/>
                </div>
            </div>
        </header>
    )
}