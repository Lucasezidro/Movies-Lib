import React, { useState, useEffect, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard/MovieCard'
import { MovieContext } from '../context/MovieContext'
import { Container } from './styles/MoviesGrid'

const searchUrl = import.meta.env.VITE_SEARCH
const api_key = import.meta.env.VITE_API_KEY

export function Search() {
    const [searchParams] = useSearchParams()
    const [searchMovies, setSearchMovies] = useState([])
    const { getApiData, movies } = useContext(MovieContext)

    const query = searchParams.get("q")

    useEffect(() => {
        const searchWithQueryUrl = `${searchUrl}?${api_key}&query=${query}`

        setSearchMovies(movies)

        getApiData(searchWithQueryUrl)
    }, [query, movies])

    return (
        <Container className="container">
            <h2 className="title">Resultados para: <span className='query-text'>{query}</span></h2>
            <div className="movies-container">
                {searchMovies.length === 0 && <p>Carregando...</p>}
                {searchMovies.length > 0 && movies.map((movie: any) => <MovieCard key={movie} movie={movie} />)}
            </div>
        </Container>
    )
}
