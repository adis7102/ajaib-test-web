import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./Components/Layout/index.jsx";
import Home from "./Pages/Home/index.jsx";
import DataListPage from "./Pages/DataListPage/index.jsx";
import NotFound from "./Pages/NotFound/index.jsx";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datalist" element={<DataListPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
