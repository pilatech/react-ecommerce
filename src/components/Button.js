import styled from 'styled-components'

export const Button = styled.button`
    background: transparent;
    border-radius: 5px;
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    border: 2px solid currentColor;
    border-color:${props => props.cart ? "var(--mainYellow)" : ""};
    cursor: pointer;
    text-transform: capitalize;
    padding: .6rem 1rem;
    transition: .2s;
    &:not(last-of-type){
        margin-right: 10px;
    }

    &:hover {
        background: ${props => props.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
        color: ${props => props.cart ? "var(--mainWhite)" : ""};
    }
`