import React from 'react';
import "./layout.css";
import Story from '../Story/Story';
import Post from '../Post/Post';
import Suggestion from '../Suggestion/Suggestion';

export default function Layout(){
    return(
        <>
            <div className='main-div'>
                <div className='first-column' style={{gridArea: 'firstColumn'}}>
                    <div className='box'>
                        <Story/>
                    </div>

                    <div className='box'>
                        <Post />
                    </div>
                </div>

                <div style={{gridArea: 'secondColumn'}}>
                    <div className='suggestion-box'>
                        <Suggestion/>
                    </div>
                </div>
            </div>
        </>
    )
};