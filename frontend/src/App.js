import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import BenchIndexPage from "./components/BenchIndexPage";
import BenchShowPage from "./components/BenchShowPage";

function App() {
    return (
        <>
            <Navigation />
                <Switch>
                    <Route exact path="/">
                        <BenchIndexPage />
                    </Route>

                    <Route path="/benches/:benchId">
                        <BenchShowPage />
                    </Route>
                    
                    <Route path="/signup">
                        <SignupFormPage />
                    </Route>
                </Switch>
        </>
    );
}

export default App;
