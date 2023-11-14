import { Routes, Route } from "react-router-dom";
import AddTask from "../Components/AddTask";
import Home from "../Components/Home";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addtask" element={<AddTask />} />
    </Routes>
  );
};

export default RouterPage;
