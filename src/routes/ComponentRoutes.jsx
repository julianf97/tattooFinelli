import { Routes, Route } from "react-router-dom";
import BlackAndGrey from "../pages/BlackAndGrey/BlackAndGrey.jsx";

export const ComponentRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="/blackandgrey" element={<BlackAndGrey/>}></Route>
      </Routes>
    </>
  );
};
