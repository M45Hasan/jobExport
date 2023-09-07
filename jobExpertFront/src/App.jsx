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
import ExamZone from "./pages/ExamZone";
import LiveExpert from "./pages/LiveExpert";
import TeacherPanel from "./pages/teacherPanel";
import ExamPaper from "./pages/ExamPaper";
import DailyQuiz from "./pages/DailyQuiz";
import Dictionary from "./pages/Dictionary";
import PremiumZone from "./pages/PremiumZone";
import PdfSupport from"./pages/PdfSupport"
import paymentReq from "./pages/paymentreq";
import paymentSucc from "./pages/paymentSucc"
import paymentFail from "./pages/paymentFail"


import PdfSupport from "./pages/PdfSupport";
import VideoSupport from "./pages/VideoSupport";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/singup" element={<Singup />}></Route>
      <Route path="/verify" element={<Verify />}></Route>

      <Route path="/jobexpart" element={<Rootlayout />}>

      <Route path="ssl-request" element={<paymentReq/>}></Route>
      <Route path="ssl-payment-success/:id" element={<paymentSucc/>}></Route>
      <Route path="ssl-payment-fail" element={<paymentFail/>}></Route>

        <Route path="ssl-request" element={<paymentReq />}></Route>

        <Route index element={<Leanding />}></Route>
        <Route path="examZone" element={<ExamZone />}></Route>
        <Route path="premiumZone" element={<PremiumZone />}></Route>
        <Route path="live-expert" element={<LiveExpert />}></Route>
        <Route path="teacherPanel" element={<TeacherPanel />}></Route>
        <Route path="dailyquiz" element={<DailyQuiz />}></Route>
        <Route path="video" element={<VideoSupport />}></Route>
        <Route path="pdfSupport" element={<PdfSupport />}></Route>
        <Route path="dictionary" element={<Dictionary />}></Route>
        <Route
          path="teacherPanel/examPaper/:id"
          element={<ExamPaper />}
        ></Route>
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
