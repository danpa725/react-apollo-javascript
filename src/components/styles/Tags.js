import styled from "styled-components";
const Tags = styled.div`
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    margin-bottom: 10px;

    font-family: "Notable", sans-serif;
    font-family: "Rajdhani", sans-serif;

    gap: ${(props) => props.isDetail && "2.5rem"};
`;

export default Tags;
