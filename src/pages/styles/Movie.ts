import styled from "styled-components";

export const Container = styled.div`
    .movie-page {
        color: var(--gray-300);
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin: 6rem auto;
    }
    .movie-page svg {
        font-size: 1.5rem;
        color: var(--yellow-300);
    }
    .movie-page .movie-card {
        text-align: center;
    }
    .movie-page .movie-card img,
    .movie-page .movie-card h2,
    .movie-page .movie-card p {
        margin-bottom: 1rem;
    }
    .movie-page .movie-card h2 {
        font-size: 2rem;
    }
    .movie-page .movie-card p {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .4rem;
        color: var(--gray-200)
    }
    .tagline {
        text-align: center;
        font-size: 1.3rem;
        margin-bottom: 2rem;
    }
    .info {
        margin-bottom: 1.5rem;
    }
    .info h3 {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .info p {
        color: var(--gray-400);
    }
    .description {
        padding-bottom: 10rem;    
    }
    .description p {
        line-height: 1.4rem;
    }
`