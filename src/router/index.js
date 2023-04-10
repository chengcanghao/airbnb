import NotFound404 from "@/views/404";
import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";
import Demo from '@/views/demo'

const Home = React.lazy(() => {
  return import("@/views/home");
});
const Detail = React.lazy(() => {
  return import("@/views/detail");
});
const Entire = React.lazy(() => {
  return import("@/views/entire");
});
// import All from '@/views/all'
// import Detail from '@/views/detail'
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/detail",
    element: (
      <Suspense>
        <Detail />
      </Suspense>
    ),
  },
  {
    path: "/entire",
    element: (
      <Suspense>
        <Entire />
      </Suspense>
    ),
  },
  {
    path: "/demo",
    element: (
      <Suspense>
        <Demo />
      </Suspense>
    ),
  },
  {
    path: "/*",
    element: (
      <Suspense>
        <NotFound404 />
      </Suspense>
    ),
  },
];

export default routes;
