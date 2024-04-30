import './App.scss';
import {getLogements} from "./services/back-end-service";
import {useEffect, useState} from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Accueil} from "./pages/accueil/Accueil";
import {NotFound} from "./pages/erreur/NotFound";
import {APropos} from "./pages/a-propos/APropos";
import {Header} from "./components/header/Header";

function App() {
    const [logements, updateLogements] = useState(getLogements());

    useEffect(() => {
        console.log('Effect executé sur logements');
    }, [logements]);

    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Accueil/>}></Route>
                    <Route path="/a-propos" element={<APropos/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
