import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
