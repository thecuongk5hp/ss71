import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "../store/reducers/b1";

export default function B1() {
  const state: any = useSelector((state) => state);

  const dispath = useDispatch();
  return (
    <div>
      B1
      <p>Giá trị count: {state.b1}</p>
      <button onClick={() => dispath(increase())}>Increase</button>
      <button onClick={() => dispath(decrease())}>decrease</button>
      <button onClick={() => dispath(reset())}>reset</button>
    </div>
  );
}