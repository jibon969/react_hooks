import React from "react";
import { Route, Routes } from "react-router-dom";
import List from '../components/Crud/List'
import Add from '../components/Crud/Add'
import Update from '../components/Crud/Update'
import Delete from '../components/Crud/Delete'

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </>
  );
};

export default Index;
