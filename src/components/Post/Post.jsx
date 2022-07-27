import "./post.css";
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty} from 'react-icons/io'
import { BsBookmark, BsEmojiSmile, BsChat } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { MdVerified } from 'react-icons/md'



export default function Post(){
    return(
        <>
            <header className="header-post">
                <div className="info-post">
                    <img className="img-header-post" src="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F10b0c008-03ac-4a72-9e14-33149e66069b.2Ejpeg/326x326/quality/80/crop-from/center/cristiano-ronaldo.jpeg" />
                    <IconContext.Provider value={{size: '14px', color: "#0095f6"}}>
                        <p>Cristiano <MdVerified/></p>
                    </IconContext.Provider>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src="https://static.poder360.com.br/2021/08/photo_2021-08-27_15-23-08.jpg"/>
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{size: '25px'}}>
                    <section className="engagements-post">
                        <div className="icons">
                            <div className="icon"><IoMdHeartEmpty/></div>
                            <div className="icon"><BsChat/></div>
                            <div className="icon"><FiSend/></div>
                        </div>
                    
                        <div className="icon"><BsBookmark/></div>
                    </section>
                </IconContext.Provider>

                    <section className="like">
                        <span>1.792.028 curtidas</span>
                    </section>

                    <div className="legend">
                        <p><strong>Cristiano</strong></p>
                    </div>

                    <div className="time">
                        <time>Há 7 hora</time>
                    </div>

                    <div className='comment'>
                        <div className="fake-comment">
                            <IconContext.Provider value={{ color: 'gray', size: '25px'}}>
                                <div className="icon">
                                    <BsEmojiSmile />
                                </div>
                            </IconContext.Provider>

                            <input placeholder='Adicione um comentário...'/>
                        </div>
                        <button>Publicar</button>
                    </div>
            </div>
        </>
    )
}