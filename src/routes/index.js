import React from "react";
import { Route, Routes } from "react-router-dom";
import List from '../components/Crud/List'
const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </>
  );
};

export default Index;
