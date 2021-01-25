import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MovieDetail from "../components/MovieDetail";
import Loader from "../components/styles/Loading Motion/Loader";
import Title from "../components/styles/Title";

const GET_MOVIE = gql`
    # apollo에서 query로 변수를 사용 할 때에는 $변수명: type을 이용한다
    query getMovie($id: Int!) {
        movie(id: $id) {
            title
            description_full
            large_cover_image
            background_image
            rating
            runtime
            language
            summary
        }
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;

    padding-bottom: 1.25rem;

    font-family: "Notable", sans-serif;
    font-family: "Rajdhani", sans-serif;
    font-weight: 300;

    background-color: #121517;
`;

function Detail() {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: {
            id: +id,
        },
        //! 변수를 전달하는 방법 : varaibles 객체에 query에 전달 할 변수를 준다.
    });
    return (
        <>
            {loading && (
                <Container>
                    <Title>Searchable</Title>
                    <Loader />
                </Container>
            )}
            {!loading && data && data.movie && (
                <MovieDetail data={data.movie} />
            )}
        </>
    );
}

export default Detail;
