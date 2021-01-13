import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
    {
        movies {
            id
            title
            medium_cover_image
        }
    }
`;

//!styles----------------------------------------------
const Container = styled.div`
    width: 100%;
    height: 100vh;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    font-weight: 300;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    width: 100%;
    height: 25rem;
    margin: auto;
    align-items: center;
    justify-content: center;
    background-color: #1f1f1f;
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 2.5rem;
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
`;

const Loading = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    color: gray;
`;

const Contents = styled.div`
    display: grid;
    margin: 0.5rem;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

const Home = () => {
    const { loading, err, data } = useQuery(GET_MOVIES);
    return (
        <Container>
            <Header>
                <Title>Searchable</Title>
                <Subtitle>Searching Movies for You</Subtitle>
            </Header>
            {/* 로딩 상태에 따른 렌더링 */}
            {loading && <Loading>Loading...</Loading>}
            {err && <div>err occure!</div>}
            <Contents>
                {!loading &&
                    data.movies &&
                    data.movies.map((obj) => (
                        <Movie key={obj.id} id={obj.id} />
                    ))}
            </Contents>
        </Container>
    );
};

export default Home;
