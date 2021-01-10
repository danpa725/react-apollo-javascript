import { Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={Detail} />
        </>
    );
}

export default App;
