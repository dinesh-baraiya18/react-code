import React from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UseMemo2 from "./useMemo/UseMemo2";
import Class from "./class/Class";
import StudentsData from "./studentsData/Students";
// import UseRef2 from "./useRef/USeref2";
// import UseRef from "./useRef/UseRef";
// import UseMemo from "./useMemo/UseMemo";
// import Progress from "./6-progressbar/Progress";
// import Que1 from "./questions/Que1";
// import Que2 from "./questions/Que2";
// import Que3 from "./questions/Que3/Que3";
// import Que4 from "./questions/Que4";
// import Main from "./questions/Que5/Main";
// import RestApi from "./questions/RestApi/RestApi";
// import Read from "./questions/RestApi/Read";
// import Index from "./HOC";
// import Home from "./pages/Home/Home";
// import Chart from "./07-chart/Chart";
import Form from "./08-formik/Form";
// import ReduxCounter from "./ReduxCounter";
// import CountDown from "./countdown/CountDown";
import Tab from "./Tab/Tab";
import SearchFun from "./searchFun/SearchFun";
import { useDarkMode } from "./context/darkContext";

const App = () => {
  const { dark, handleDarkMode } = useDarkMode();

  return (
    <div className={dark ? "darkMode" : ""}>
      <button onClick={handleDarkMode}>mode</button>
      {/* <RestApi />
      <Read /> */}
      {/* <UseRef2 /> */}
      {/* <Index /> */}
      {/* <Counter /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      {/* <Header /> */}
      {/* <Form /> */}
      {/* <Class name="dinesh" /> */}
      <Form />
    </div>
  );
};

export default App;
