import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "src/app/layout/theme";
import Loader from "./app/components/Loader";
import Layout from "src/app/layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./app/views/Home"));
const TaskOne = React.lazy(() => import("./app/views/TaskOne"));
const TaskTwo = React.lazy(() => import("./app/views/TaskTwo"));
const UserList = React.lazy(() => import("./app/views/TaskOne/UserList"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="taskone">
                <Route index element={<TaskOne />} />
                <Route path="users" element={<UserList />} />
              </Route>
              <Route path="tasktwo" element={<TaskTwo />} />
            </Route>
          </Routes>
        </Router>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
