
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import "./about.css"


function About(){

    
   const {id} = useParams();
   const navigate = useNavigate();
   const [filme, setFilmes] = useState([]);
   const [loading, setLoading] = useState(true)

   useEffect(()=>{

    async function loadFilmes(){
       await api.get(`/movie/${id}`, {
        params:{
            api_key: 'b659af91e152bd764084191da549d5b3',
            language: "pt-BR",
        }
       })
       .then((response) =>{
        setFilmes(response.data)
        setLoading(false)
       })
       .catch(()=>{
        console.log("Filme não encontrado")
        navigate("/", {replace: true})
        return
       })
    }

    loadFilmes()
    }, []);

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@filmFlix")
        
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvos)=>
            filmesSalvos.id === filme.id
        )

        if(hasFilme){
            toast.warn("Este filme já está salvo!")

            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem("@filmFlix", JSON.stringify(filmesSalvos))
        toast.success("Salvo com sucesso!")
    
    }



    if(loading){
        <div>
            <h1>Carregando informações do filme...</h1>
        </div>
    }
    return(
        <div className="filme">
          
            <h1> {filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
          
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average}/10</strong>
       
            <div className="areaBtn">
                <button className="favorito" onClick={salvarFilme}>Salvar</button>
                
                <a href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`}  rel="external" target="blank">
                 <button className="trailer">Assistir ao trailer</button>
                </a>
            </div>
       
        </div>
    )
}
export default About