import React from "react";
import Styles from ".././Styles.module.css";
import Loading from "../Loading/Loading";


const LazyClassment = React.lazy(() => import("../Clubs/Havre/Classement"));
const LazyEabXV = React.lazy(() => import("../Clubs/Havre/Havre"));
const LazyMatchs = React.lazy(() => import("../Clubs/Havre/Matchs"));
const LazyProchaineMatch = React.lazy(() =>
  import("../Clubs/Havre/ProchaineMatch")
);

function HavreMain() {
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.componentDiv}>
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

export default HavreMain;
