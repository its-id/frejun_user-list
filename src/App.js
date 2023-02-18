import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login, HomePage, Navbar } from "./components";

function App() {
  const isLoggedIn = localStorage.getItem("token") !== null;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <>
                  <Navbar />
                  <HomePage />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
