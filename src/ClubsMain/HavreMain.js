import React from "react";
import ".././App.css";
const LazyClassment = React.lazy(() => import("../Clubs/Havre/Classment"));
const LazyEabXV = React.lazy(() => import("../Clubs/Havre/Havre"));
const LazyMatchs = React.lazy(() => import("../Clubs/Havre/Matchs"));
const LazyProchaineMatch = React.lazy(() =>
  import("../Clubs/Havre/ProchaineMatch")
);

function HavreMain() {
  return (
    <div className="mainDiv">
      <div className="componentDiv">
        <React.Suspense fallback={<div>Loading...</div>}>
          <LazyClassment />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <LazyEabXV />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <LazyMatchs />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <LazyProchaineMatch />
        </React.Suspense>
      </div>
    </div>
  );
}

export default HavreMain;
