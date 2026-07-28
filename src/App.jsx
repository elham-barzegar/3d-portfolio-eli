import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainPage from "./pages/MainPage.jsx";
import About from "./pages/About.jsx";


function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/main' element={<MainPage />} />
                <Route path='/about' element={<About />} />

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
