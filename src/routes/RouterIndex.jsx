import React from "react";
import { Routes, Route } from "react-router-dom";
import { MAIN_ROUTES } from "../models/RouterModel";

function RouterIndex() {
  return (
    <>
      <Routes>
        <Route>
          {MAIN_ROUTES.length > 0 ? (
            <>
              {MAIN_ROUTES.map((res, i) => (
                <Route
                  key={i}
                  path={res.routerPath}
                  element={res.routerComponent}
                />
              ))}
            </>
          ) : (
            <></>
          )}
        </Route>
      </Routes>
    </>
  );
}

export default RouterIndex;
