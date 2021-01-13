import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ebebeb;
    padding: 2.5rem 0;
    border-radius: 7.5px;
    box-shadow: 0 0.1px 1.2px -6px rgba(0, 0, 0, 0.048),
        0 0.6px 4px -6px rgba(0, 0, 0, 0.072),
        0 3px 18px -6px rgba(0, 0, 0, 0.12);
`;

const Movie = ({ id }) => (
    <Box>
        movie id:<Link to={`/${id}`}>{id}</Link>
    </Box>
);

export default Movie;
