import React from "react";
import ".././App.module.css";
import Loading from "../Loading/Loading";

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
        <React.Suspense fallback={<Loading />}>
          <LazyClassment />
        </React.Suspense>
        <React.Suspense fallback={<Loading />}>
          <LazyEabXV />
        </React.Suspense>
        <React.Suspense fallback={<Loading />}>
          <LazyMatchs />
        </React.Suspense>
        <React.Suspense fallback={<Loading />}>
          <LazyProchaineMatch />
        </React.Suspense>
      </div>
    </div>
  );
}

export default EabXV;
