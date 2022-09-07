
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./Home.css"

 function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get('/movie/now_playing', {
                params:{
                    api_key: 'b659af91e152bd764084191da549d5b3',
                    language: "pt-BR",
                    page: 1
                }
            })
            setFilmes(response.data.results.slice(0,10))
            setLoading(false)
        }

        loadFilmes()

    }, []);


    if(loading){
        return(
            <div className="loading">Carregando filmes...</div>
        )
    }



    return(
        <div className="page">
            <div>
                <h2>Aqui você encontrará todos os principais filmes em cartaz!</h2>
            </div>

            <div className="lista-filmes">
           
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                                 <strong> {filme.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
                                <Link className="saibaMais" to={`/about/${filme.id}`}>Clique para saber mais</Link>
                      </article>
                      )
                })}      
            </div>
        </div>
    )
}

export default Home