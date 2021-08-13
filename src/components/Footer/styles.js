import styled from 'styled-components';

export const Container = styled.footer`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background);
    padding: 20px;
    width: 100%;

    h4 {
        color: var(--main);
;       transition: filter 0.2s;

        &:hover {
            filter: brightness(0.7)
        }
    }
`;