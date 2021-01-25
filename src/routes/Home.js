import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";
import Loader from "../components/styles/Loading Motion/Loader";

const GET_MOVIES = gql`
    {
        movies {
            id
            title
            large_cover_image
            rating
            runtime
        }
    }
`;

//!styles----------------------------------------------
const Container = styled.div`
    width: 100%;
    height: 100vh;

    padding-bottom: 1.25rem;

    font-family: "Notable", sans-serif;
    font-family: "Rajdhani", sans-serif;
    font-weight: 300;

    background-color: #121517;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 15rem;
    margin: auto;

    color: white;
    background-color: #121517;
`;

const Title = styled.h1`
    margin-bottom: 2.5rem;

    font-size: 3.5rem;
    font-weight: 700;
`;

const Subtitle = styled.h2`
    font-size: 1.65rem;
`;

const Contents = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 2fr));

    padding: 1.25rem;
    gap: 1.25rem;

    background-color: #121517;
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
            {loading && <Loader />}
            {err && <div>err occure!</div>}

            <Contents>
                {!loading &&
                    data.movies &&
                    data.movies.map((movie, index) => {
                        return (
                            <Movie key={movie.id} data={movie} index={index} />
                        );
                    })}
            </Contents>
        </Container>
    );
};

export default Home;
