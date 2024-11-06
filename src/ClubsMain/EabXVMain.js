import React from "react";
import ".././App.css";
const LazyClassment = React.lazy(() => import("../Clubs/EabXV/Classment"));
const LazyEabXV = React.lazy(() => import("../Clubs/EabXV/EabXV"));
const LazyMatchs = React.lazy(() => import("../Clubs/EabXV/Matchs"));
const LazyProchaineMatch = React.lazy(() =>
  import("../Clubs/EabXV/ProchaineMatch")
);

function EabXV() {
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

export default EabXV;
