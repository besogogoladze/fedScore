import React from "react";

const LazyClassment = React.lazy(() => import("./EabXV/Classment"));
const LazyEabXV = React.lazy(() => import("./EabXV/EabXV"));
const LazyMatchs = React.lazy(() => import("./EabXV/Matchs"));
const LazyProchaineMatch = React.lazy(() => import("./EabXV/ProchaineMatch"));

function EabXV() {
  return (
    <div>
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

      {/* Add your additional components here */}
    </div>
  );
}

export default EabXV;
