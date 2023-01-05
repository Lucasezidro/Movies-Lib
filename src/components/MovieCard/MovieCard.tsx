import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

const imageURL = import.meta.env.VITE_IMG

export type Movie = {
    poster_path: any
    title: string
    id: number
    vote_average: number
    tagline: string
    budget: any
    revenue: any
    runtime: number
    overview: string
}

interface MovieCardProps {
    movie: Movie
    showLink?: boolean
}

export function MovieCard({ movie, showLink }: MovieCardProps) {

    return (
        <div className="movie-card">
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>

            { !showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link> }
        </div>
    )
}
