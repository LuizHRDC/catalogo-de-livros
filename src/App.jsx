import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddBookPage from "./pages/AddBookPage";
import EditBookPage from "./pages/EditBookPage";
import DetailsPage from "./pages/DetailsPage";
import BookSearch from "./components/BookSearch/BookSearch";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateUser from "./components/UpdateUser/UpdateUser"; // Importe a nova página
import { BookProvider } from "./context/BookContext";
import { AuthProvider } from "./context/AuthContext";
import PremiumAuth from "./components/PremiumAuth/PremiumAuth";
import Stats from "./components/Stats/Stats";

export function App() {
  return (
    <AuthProvider>
      <BookProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<AddBookPage />} />
            <Route path="/edit/:id" element={<EditBookPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/search" element={<BookSearch />} />
            <Route path="/update-user" element={<UpdateUser />} />{" "}
            <Route path="/authpremium" element={<PremiumAuth />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </Router>
      </BookProvider>
    </AuthProvider>
  );
}
