import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BlockedCard from "./components/BlockedCard";
import PopupCard from "./components/PopupCard";
import ViewPost from "./pages/ViewPost";
import Profile from "./pages/Profile";
import NewPost from "./pages/NewPost";
import Admin from "./pages/Admin";
function App() {
  return (
    <div>
      <Login></Login>
      <Register></Register>
      <Home></Home>
      {/* <BlockedCard /> */}
      {/* <PopupCard></PopupCard> */}
      <ViewPost />
      <Profile />
      <NewPost></NewPost>
      <Admin></Admin>
    </div>
  );
}

export default App;
