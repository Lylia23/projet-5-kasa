import './App.scss';
import {getLogements} from "./services/back-end-service";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Accueil} from "./pages/accueil/Accueil";
import {NotFound} from "./pages/erreur/NotFound";
import {APropos} from "./pages/a-propos/APropos";
import {Header} from "./components/header/Header";
import {Logement} from "./pages/logement/Logement";

function App() {
    const logements = getLogements();
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Accueil logements={logements}/>}></Route>
                    <Route path="/a-propos" element={<APropos/>}></Route>
                    <Route path="/logement/:id" element={<Logement/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
