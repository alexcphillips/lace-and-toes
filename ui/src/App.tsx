import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./Pages/Home";

export default function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <Navbar />
                <main style={{ paddingTop: "60px" }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </ThemeProvider>
        </BrowserRouter>
    );
}
