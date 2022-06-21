import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
