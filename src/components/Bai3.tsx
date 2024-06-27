import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeChange } from "../store/reducers/b3";

export default function B3() {
  const state: any = useSelector((state) => state);

  const dispath = useDispatch();
  return (
    <div>
      B3
      <div className={`d-flex w-25 h-50 bg-${state.b3 ? "light" : "dark"}`}>
        <button
          className={`btn btn-${
            state.b3 ? "light" : "dark"
          } border border-black`}
          onClick={() => dispath(themeChange())}
        >
          {state.b3 ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}