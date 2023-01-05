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

export function MoviesContextProvider(props: MovieProviderProps) {
    const [movies, setMovies] = useState([])

    const getApiData = async (url: string) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
    }

    return (
        <MovieContext.Provider value={{ movies, getApiData }}>
            {props.children}
        </MovieContext.Provider>
    )
}