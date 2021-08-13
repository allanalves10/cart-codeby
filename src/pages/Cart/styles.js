import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 8rem auto;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100vw;
    max-width: 800px;
    background-color: var(--shape);
    border-radius: 1rem;
    gap: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    div:not(:last-child) {
        border-bottom: 1px solid var(--background);
        width: 100%;
    }
`;

export const HeaderCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
`;

export const FooterCart = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 2rem;

    button {
        background: var(--main);
        color: var(--shape);
        font-size: 2rem;
        font-weight: bold;
        border-radius: 1rem;
        padding: 2rem;
        width: 90%;
        border: none;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TotalCart = styled.div`
    display: flex;
    flex-direction: column;

    > section {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 2rem 2rem 2rem;
        justify-content: space-between;

        p {
            font-size: 2rem;
            font-weight: bold;
        }
    }

    section#noInterest {
        display: flex;
        align-items: center;
        width: 80%;
        margin: auto;
        text-align: center;
        justify-content: center;
        background: #bbffb9;
        border-radius: 2rem;
        padding: 1rem;
        margin-bottom: 2rem;

        p {
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            color: #006400;
            font-size: 1.5rem;
        }
    }
    
`;

export const ProductCart = styled.div`

    > section {
        display: flex; 
        align-items: center;
        flex-direction: row;
        gap: 2rem; 
        padding: 0 2rem 2rem;
    }

    img {
        width: 14rem; 
        height: 14rem; 
        border: 1px solid var(--background);
        padding: 0.5rem;
    }

    p:first-child {
        font-size: 1.5rem; 
        font-weight: bold;
    }

    p:last-child {
        font-size: 1.5rem; 
        font-weight: bold;
    }
`;