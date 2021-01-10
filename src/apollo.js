import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://movieql.now.sh/",
    cache: new InMemoryCache(),
});

export default client;

//! apollo ver 3.0업그레이드 되면서 기본 설정이 바뀜. cache 반드시 포함 할 것.
