import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Loading from './Loading'
const LazySharedComponent = React.lazy(() => import("./component/SharedComponent"));
const LazyHome = React.lazy(() => import("./Home"));
const LazyReserve = React.lazy(() => import("./Reservation"));


function App() {
  return (
    <>
      <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazySharedComponent />
              </React.Suspense>
            }
          >
      <Route
        index
        element={
          <React.Suspense fallback={<Loading />}>
            <LazyHome />
          </React.Suspense>
        }
      />
        <Route
          path="/reservation"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyReserve />
            </React.Suspense>
          }
        />
        </Route>
      </Routes>
    </>
  );
}

export default App;
