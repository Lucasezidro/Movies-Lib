import styled from 'styled-components'

export const Container = styled.div`

#navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    padding: 1rem 2rem;
    background-color: var(--gray-800);
}

#navbar h2 a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

#navbar form {
    display: flex;
    gap: 0.5rem;
}

#navbar input {
    padding: 0.2rem 0.8rem;
    border-radius: 4px;
    border: none;
}

#navbar form button {
    background-color: var(--yellow-400);
    border: 2px solid var(--yellow-400);
    border-radius: 4px;
    color: #000;
    padding: 0.3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .4s;
}

#navbar form button:hover {
    background-color: transparent;
    color: var(--yellow-400);
}
`
