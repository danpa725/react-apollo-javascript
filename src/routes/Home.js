import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
    {
        movies {
            title
            medium_cover_image
        }
    }
`;

const Home = () => {
    const { loading, err, data, refetch, networkStatus } = useQuery(GET_MOVIES);
    console.log(loading, err, data, refetch, networkStatus);

    if (loading) return <p>Loading...</p>;
    if (err) return <p>Error :(</p>;
    return <h1>hi</h1>;
};

export default Home;
