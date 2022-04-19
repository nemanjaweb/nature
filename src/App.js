import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ViewPost from "./pages/ViewPost";
import Profile from "./pages/Profile";
import NewPost from "./pages/NewPost";
import Admin from "./pages/Admin";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/post" element={<ViewPost />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/new-post" element={<NewPost />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
