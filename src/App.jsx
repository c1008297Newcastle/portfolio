import Footer from './Footer';
import Header from "./Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import Portfolio from "./Portfolio.jsx";
import Research from "./Research.jsx";
import License from "./License.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/research" element={<Research />} />
                <Route path='/license' element={<License />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;