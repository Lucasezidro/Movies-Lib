import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard/MovieCard'
import { Container } from './styles/MoviesGrid'

const searchUrl = import.meta.env.VITE_SEARCH
const api_key = import.meta.env.VITE_API_KEY

export function Search() {
    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchedMovies = async (url: string) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
    }

    useEffect(() => {
        const searchWithQueryUrl = `${searchUrl}?${api_key}&query=${query}`

        getSearchedMovies(searchWithQueryUrl)
    }, [query])

    return (
        <Container className="container">
            <h2 className="title">Resultados para: <span className='query-text'>{query}</span></h2>
            <div className="movies-container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard movie={movie} />)}
            </div>
        </Container>
    )
}