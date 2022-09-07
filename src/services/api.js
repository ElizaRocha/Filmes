
import axios from "axios";
//BASE DA URL: https://api.themoviedb.org/3
//URL da api:  /movie/now_playing?api_key=b659af91e152bd764084191da549d5b3

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api