import styled, { css } from "styled-components";
const Tag = styled.div`
    transition: all ease-in-out 0.25s;

    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 62.5px;
    height: 25px;

    margin-right: 5px;

    color: whitesmoke;
    font-weight: 500;

    background-color: #121517;
    border: 2px solid whitesmoke;
    border-radius: 10px;

    &:hover {
        color: #121517;
        background-color: whitesmoke;
    }

    ${(props) =>
        props.isDetail &&
        css`
            width: 85px;
            height: 35px;
            border: none;
            border-radius: 5px;
        `}
`;

export default Tag;
