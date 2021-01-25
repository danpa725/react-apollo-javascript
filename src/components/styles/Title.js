import styled, { css } from "styled-components";
const Title = styled.h1`
    flex: 3;
    font-weight: 500;
    font-size: 35px;
    color: #fcfff5;

    padding: 2.5rem;
    ${(props) =>
        props.isDeatailPage &&
        css`
            flex: none;
            padding: 5rem;
            padding-bottom: 0;
            font-size: 65px;
            color: whitesmoke;
            opacity: 1;
        `};
`;

export default Title;
