import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Singup from "./pages/singup";
import Rootlayout from "./components/Layout/Rootlayout";
import Leanding from "./pages/leanding";
import Studentprofile from "./pages/StudentProfile/StudentProfile";
import Verify from "./pages/verify";
import ExamZone from "./pages/examZone";
import LiveExpert from "./pages/LiveExpert";
import TeacherPanel from "./pages/teacherPanel";
import ExamPaper from "./pages/ExamPaper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/singup" element={<Singup />}></Route>
      <Route path="/verify" element={<Verify />}></Route>
      <Route path="/jobexpart" element={<Rootlayout />}>
        <Route index element={<Leanding />}></Route>
        <Route path="examZone" element={<ExamZone />}></Route>
        <Route path="live-expert" element={<LiveExpert />}></Route>
        <Route path="teacherPanel" element={<TeacherPanel />}></Route>
        <Route path="teacherPanel/examPaper/:id" element={<ExamPaper />}></Route>
        <Route path="live-expert/examPaper/:id" element={<ExamPaper />}></Route>
        <Route path="studentprofile" element={<Studentprofile />}></Route>
      </Route>
    </>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
