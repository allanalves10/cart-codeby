import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 4rem auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 60vh;
    width: 100vw;
    max-width: 800px;
    background-color: var(--background);
    border-radius: 1rem;
    gap: 2rem;

    p {
        color: var(--main);
        font-size: 2rem;
    }
`;

export const Button = styled.button`
    background: var(--main);
    color: var(--shape);
    font-size: 1.5rem;
    padding: 1.5rem;
    width: 100%;
    max-width: 20rem;
    border-radius: 1rem;
    border: none;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`;