import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const Layout = lazy(() => import("./Routes/Layout"));
const Home = lazy(() => import("./Routes/Home"));
const About = lazy(() => import("./Routes/About"));
const Contact = lazy(() => import("./Routes/Contact"));
const Form = lazy(() => import("./components/Form.js"));
const NoPage = lazy(() => import("./Routes/NoPage"));
const EmployeeData = lazy(() => import("./Routes/EmployeeData"));

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="form" element={<Form />} />
              <Route path="employee/:id" element={<EmployeeData />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
