import { useState, useEffect, useContext } from 'react'
import { MovieCard } from '../components/MovieCard/MovieCard'
import { MovieContext } from '../context/MovieContext'
import { Container } from './styles/MoviesGrid'

const api_key = import.meta.env.VITE_API_KEY
const movieURL = import.meta.env.VITE_API

export function Home() {
    const [topMovies, setTopMovies] = useState([])
    const { getApiData, movies } = useContext(MovieContext)

    useEffect(() => {
        const topRatedUrl = `${movieURL}top_rated?${api_key}`

        setTopMovies(movies)
        
        getApiData(topRatedUrl)

    }, [movies])

    return (
        <Container className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard movie={movie} />)}
            </div>
        </Container>
    )
}
