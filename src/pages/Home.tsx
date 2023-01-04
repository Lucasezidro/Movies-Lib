import { useState, useEffect } from 'react'
import { MovieCard } from '../components/MovieCard/MovieCard'
import "./styles/MoviesGrid.css"

const api_key = import.meta.env.VITE_API_KEY
const movieURL = import.meta.env.VITE_API

export function Home() {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url: string) => {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${movieURL}top_rated?${api_key}`
        
        getTopRatedMovies(topRatedUrl)
    }, [])

    return (
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard movie={movie} />)}
            </div>
        </div>
    )
}