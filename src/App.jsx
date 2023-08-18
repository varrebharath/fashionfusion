import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/signin/signin.component";
const Shop = () => {
  return <h1>i am the shop page</h1>;
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home></Home>} />
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path="/sign-in" element={<SignIn></SignIn>} />
      </Route>
    </Routes>
  );
}

export default App;
