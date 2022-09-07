import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Fav.css"

 function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        
        const minhaLista = localStorage.getItem("@filmFlix")
        setFilmes(JSON.parse(minhaLista) || [])
       
    }, [])

    function excluir(id){
        let filtroFilme = filmes.filter((item)=>{
            return(item.id !== id)
        })

        setFilmes(filtroFilme)
        localStorage.setItem("@filmFlix", JSON.stringify(filtroFilme))
        toast.success("Removido com sucesso!")
    }


    return(
        <div className="pageFav">
            {filmes.length === 0 &&   
                <span>Você não possui filmes salvos ainda</span>
            }
            {
            filmes.map((filme) => {
                return(
                <div key={filme.id} className="filmFav">
                    
                        <strong> {filme.title}</strong>
                        <img className="imgFav" src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
                        <div className="areaBtn">
                            <Link className="sobre" to={`/about/${filme.id}`}>Sobre</Link>
                            
                            <button className="excluir" onClick={()=>excluir(filme.id)}>
                                Excluir
                            </button>
                        </div>
                       
                
                </div>
                )
            })}  
         
    </div>

    )
}

export default Favoritos