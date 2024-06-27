import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayChange } from "../store/reducers/b4";

export default function B4() {
  const state: any = useSelector((state: any) => state.b4);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <div>
      B4
      <div className="d-flex flex-column gap-3 w-100">
        <div>
          <button
            className="btn btn-light border border-black"
            onClick={() => dispatch(displayChange())}
          >
            {state ? "List mode" : "Grid mode"}
          </button>
        </div>
        <div className={`d-flex ${state ? "flex-column" : "flex-wrap"} gap-2`}>
          <div
            className={`${state ? "w-50" : "w-25"} bg-danger p-3 text-center`}
          >
            1
          </div>
          <div
            className={`${state ? "w-50" : "w-25"} bg-danger p-3 text-center`}
          >
            2
          </div>
          <div
            className={`${state ? "w-50" : "w-25"} bg-danger p-3 text-center`}
          >
            3
          </div>
          <div
            className={`${state ? "w-50" : "w-25"} bg-danger p-3 text-center`}
          >
            4
          </div>
        </div>
      </div>
    </div>
  );
}