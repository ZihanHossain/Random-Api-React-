import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BoredDetails } from "./BoredDetails";
import { CatDetails } from "./CatDetails";
import { IpDetails } from "./IpDetails";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/apis"} element={<Main />} />
        <Route path={"/catfact"} element={<CatDetails />} />
        <Route path={"/bored"} element={<BoredDetails />} />
        <Route path={"/ipcheck"} element={<IpDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
