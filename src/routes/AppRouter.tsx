import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wizard from "../pages/Wizard";
import Summary from "../pages/Summary";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Wizard/>} />
            <Route path="/summary" element={<Summary/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter