import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

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

function Detail() {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: {
            id: +id,
        },
        //! 변수를 전달하는 방법 : varaibles 객체에 query에 전달 할 변수를 준다.
    });
    if (loading) {
        return <div>loading...</div>;
    }
    if (!loading && data && data.movie) {
        return <MovieDetail data={data.movie}></MovieDetail>;
    }
    return null;
}

export default Detail;
