import { createContext, useState } from "react";

type MovieContextData = {
    getApiData: (url: any) => Promise<void>
    movies: any
}

type MovieProviderProps = {
    children: React.ReactNode
}

type Props = {
    url: string
}

export const MovieContext = createContext({} as MovieContextData) 

export function MoviesProvider(props: MovieProviderProps) {
    const [movies, setMovies] = useState([])

    async function getApiData({ url }: Props) {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.result)
    }

    return (
        <MovieContext.Provider value={{ movies, getApiData }}>
            {props.children}
        </MovieContext.Provider>
    )
}