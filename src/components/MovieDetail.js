import Movie from "./Movie";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1``;
const Description = styled.div``;
//! styles --------------------------------------

const MovieDetail = ({ data }) => {
    const {
        title,
        description_full,
        medium_cover_image,
        rating,
        runtime,
        language,
        summary,
    } = data;

    return (
        <Container>
            <Title>{title}</Title>
            <Description></Description>
            <img src={medium_cover_image} alt="medium_cover_image" />
        </Container>
    );
};

export default MovieDetail;
