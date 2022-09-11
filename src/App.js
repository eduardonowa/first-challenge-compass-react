import Login from "./pages/Login/Login";
import Success from "./pages/Success/Success";
import Error404 from "./pages/Error404/Error404";
import Error401 from "./pages/Error401/Error401";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="*" element={<Error404 />} />
        <Route exact path="error-401" element={<Error401 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
