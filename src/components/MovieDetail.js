import styled, { css } from "styled-components";
import Tags from "./styles/Tags";
import Tag from "./styles/Tag";
import Title from "./styles/Title";

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    background-image: url(${(props) => props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
const Box = styled.div`
    width: 50%;
    height: 100vh;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
        props.isTextBox &&
        css`
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            flex-direction: column;
        `}
`;
const Description = styled.div`
    margin: 5rem;

    line-height: 1.75rem;
    font-size: 1.25rem;
    font-weight: 300;
    color: gray;
`;
const Img = styled.img`
    height: 50rem;
    border-radius: 10px;
    filter: contrast(125%);
`;
//! styles --------------------------------------

const MovieDetail = ({ data }) => {
    const {
        title,
        description_full,
        large_cover_image,
        background_image,
        rating,
        runtime,
        language,
    } = data;

    return (
        <Container src={background_image}>
            <Box>
                <Img src={large_cover_image} alt="medium_cover_image" />
            </Box>
            <Box isTextBox={true}>
                <Title isDeatailPage={true}>{title}</Title>
                <Description>{description_full}</Description>
                <Tags isDetail={true}>
                    <Tag isDetail={true}>⭐{rating}</Tag>
                    <Tag isDetail={true}>🔘{runtime}m</Tag>
                    <Tag isDetail={true}>🗨{language}</Tag>
                </Tags>
            </Box>
        </Container>
    );
};

export default MovieDetail;
