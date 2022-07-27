import "./suggestion.css";
import { IconContext } from 'react-icons'
import { MdVerified } from 'react-icons/md'

export default function Suggestion(){
    return(
        <div className="container-suggestion">
            <div className="header-suggestion">
                <img src="https://avatars.githubusercontent.com/u/77364859?v=4"/>
                <div className="user-infos-suggestion">
                    <div className="infos">
                        <span>Hashtag_Igor</span>
                        <p>Igor Perdigão</p>
                    </div>
                    <button className="switch">Mudar</button>
                </div>
            </div>

            <div className="main-suggestion">
                <p>Sugestões para você</p>
                <span>Ver tudo</span>
            </div>

            <div className="user-suggestion">
                <IconContext.Provider value={{size: '10px', color: "#0095f6"}}>
                    <div className="infos-suggestion">
                        <img src="https://pbs.twimg.com/profile_images/1267529218222686208/AZcZTThs_400x400.jpg"/>
                        <div className="info-suggestion">
                            <span>Ronaldo <MdVerified/></span>
                            <p>Seguido por Cruzeiro</p>
                        </div>
                        <button className="follow">Seguir</button>
                    </div>
                    <div className="infos-suggestion">
                        <img src="https://i.pinimg.com/236x/8c/6f/83/8c6f83c437fe9627afaa9649fc258611.jpg"/>
                        <div className="info-suggestion">
                            <span>Cruzeiro <MdVerified/></span>
                            <p>Seguido por Ronaldo</p>
                        </div>
                        <button className="follow">Seguir</button>
                    </div>
                    <div className="infos-suggestion">
                        <img src="https://i.pinimg.com/originals/99/8f/b9/998fb91fc09780ee63a399d69f7f004c.jpg"/>
                        <div className="info-suggestion">
                            <span>Zidane <MdVerified/></span>
                            <p>Seguido por Ronaldo</p>
                        </div>
                        <button className="follow">Seguir</button>
                    </div>
                    <div className="infos-suggestion">
                        <img src="https://pbs.twimg.com/profile_images/1500657700258164736/ODXpRL4a_400x400.jpg"/>
                        <div className="info-suggestion">
                            <span>Duda.rubert</span>
                            <p>Seguido por Neymar</p>
                        </div>
                        <button className="follow">Seguir</button>
                    </div>
                    <div className="infos-suggestion">
                        <img src="https://cdn.abcdoabc.com.br/curry-17-06-2_a15bc072.jpg"/>
                        <div className="info-suggestion">
                            <span>Stephencurry30 <MdVerified/></span>
                            <p>Seguido por Messi</p>
                        </div>
                        <button className="follow">Seguir</button>
                    </div>
                </IconContext.Provider>
            </div>

            <footer className="footer-suggestion">
                <p>Sobre &bull; Ajuda &bull; Impresa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localização &bull; Idioma</p>
                <p>&copy; 2022 INSTAGRAM FROM META</p>
            </footer>
        </div>
    )
}
