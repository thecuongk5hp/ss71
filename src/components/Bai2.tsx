import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRandom } from "../store/reducers/b2";

export default function B2() {
  const state: any = useSelector((state) => state);
  const dispath = useDispatch();
  return (
    <div>
      B2
      <p>List number: [{state.b2.join(", ")}]</p>
      <button onClick={() => dispath(addRandom())}>Random number</button>
    </div>
  );
}