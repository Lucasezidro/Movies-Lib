import styled from "styled-components";

export const Container = styled.div`
    .title {
        color: var(--gray-300);
        font-size: 2.5rem;
        text-align: center;
        margin: 7rem 0 1rem;
    }
    .title .query-text {
        color: var(--yellow-400);
    }
    .movies-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }
    .movies-container div {
        width: 30%;
        color: var(--gray-300);
        margin-bottom: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: .5rem;
        background-color: var(--gray-700);
        padding: 1rem;
    }
    .movies-container div img {
        max-width: 100%;
    }
    .movies-container div img,
    .movies-container div h2,
    .movies-container div p {
        margin-bottom: 1rem;
    }
    .movies-container div svg {
        color: #f7d354;
    }
    .movies-container div a {
        background-color: #f7d354;
        border: 2px solid #f7d354;
        border-radius: 4px;
        color: #000;
        padding: 1rem 0.5rem;
        align-items: center;
        transition: .4s;
        text-align: center;
        font-weight: bold;
    }
    .movies-container div a:hover {
        background-color: transparent;
        color: #f7d354;
    }
`