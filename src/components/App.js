import { BrowserRouter as Routes, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
    return (
        <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={Detail} />
        </Routes>
    );
}

export default App;
