import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BlockedCard from "./components/BlockedCard";

function App() {
  return (
    <div>
      <Login></Login>
      <Register></Register>
      <Home></Home>
      {/* <BlockedCard /> */}
    </div>
  );
}

export default App;
