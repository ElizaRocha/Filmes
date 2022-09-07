import {Link} from "react-router-dom"
import "./header.css"

function Header(){
    return(
        <div className="container">
            <Link className="logo" to={'/'}>FilmFlix</Link>
            <Link className="fav" to={'/Favoritos'}>Meus filmes favoritos</Link>
        </div>
    )
}
export default Header