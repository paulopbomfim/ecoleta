import React from 'react';
import { Route, Routes } from "react-router-dom";
import * as Pages from './pages';

export function AllRoutes() {
  return (
    <Routes>
      <Route index element={ <Pages.Home /> } />
      <Route path="/places" element={ <Pages.PlaceList /> } />
    </Routes> 
  )
}
