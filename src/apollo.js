import { ApolloClient, InMemoryCache } from "@apollo/client";

// const link = createHttpLink({
//     uri: "https://48p1r2roz4.sse.codesandbox.io",
// });

// .168.0.114:4000

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
});

export default client;

//! apollo ver 3.0업그레이드 되면서 기본 설정이 바뀜. cache 반드시 포함 할 것.
