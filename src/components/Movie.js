import { Link } from "react-router-dom";
import styled from "styled-components";
import Tag from "./styles/Tag";
import Tags from "./styles/Tags";
import Title from "./styles/Title";

const Box = styled.div`
    transition: all ease-in-out 0.5s;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 3.5rem;
    height: 400px;

    border-radius: 5px;
    box-shadow: 0 0.1px 1.2px -6px rgba(0, 0, 0, 0.048),
        0 0.6px 4px -6px rgba(0, 0, 0, 0.072),
        0 3px 18px -6px rgba(0, 0, 0, 0.12);

    a {
        box-sizing: border-box;
        color: #121517;
    }
    a:hover {
        color: #121517;
    }
`;

const Number = styled.div`
    z-index: 100;
    flex: 1;
    font-family: "Notable", sans-serif;
    font-size: 7.5rem;
    color: #fcfff5;
    text-shadow: 10px 10px 0px #262626;

    margin-left: -4.5rem;
`;

const Wrapper = styled.div`
    transition: all ease-out 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #ebebeb;
    background-image: url(${(props) => props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    border-radius: 5px;

    &:hover {
        /* filter: url("../components/styles/images/blurMask.svg"); */
        transform: translateY(-5px);
    }
`;

const Movie = ({ data, index }) => {
    const { id, title, rating, runtime, large_cover_image } = data;
    return (
        <Wrapper src={large_cover_image}>
            <Box>
                <Number>{index + 1}</Number>

                <Link to={`/${id}`} style={{ textDecoration: "none" }}>
                    {/* react-router-dom style 초기화 */}
                    <Title>{title}</Title>
                </Link>
            </Box>
            <Tags>
                <Tag>⭐{rating}</Tag>
                <Tag>🔘{runtime}m</Tag>
            </Tags>
        </Wrapper>
    );
};
export default Movie;
