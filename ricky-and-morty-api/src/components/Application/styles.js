import styled from 'styled-components';
// Container
export const ContainerApp = styled.div`
    width: 100%;
    max-width: 124.6rem;
    margin: 0 auto;
    padding: 4rem 1.5rem;
`;
// Header
export const HeaderApp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    h1{
        font-size: 3.2rem;
    }
    span{
        font-size: 1.6rem;
        opacity: 0.7;
    }
`;
// Content
export const ContentCharacters = styled.div`
    & > div{ // seleciona a primeira div dentro de ContentCharacters
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1.6rem;
    }
    button{
        display: block;
        margin: 0 auto;
        line-height: 6.5rem;
        background-color: #5b1fa6;
        border-radius: 4px;
        border: none;
        width: 300px;
        font-size: 1.8rem;
        cursor: pointer;
        margin-top: 48px;
        transition: filter .3s;
        &:hover{
            filter: brightness(0.8);
        }
    }
`;
// Loader
export const Loader = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2022;
    background-color: #040011;
    display: flex;
    align-items: center;
    justify-content: center;
`