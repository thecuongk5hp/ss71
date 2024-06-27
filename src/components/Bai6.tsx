import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../store/reducers/b6";

export default function B6() {
  const language = useSelector((state: any) => state.b6.language);
  const dispatch = useDispatch();

  return (
    <div>
      B6
      <select onChange={(e) => dispatch(toggleLanguage())}>
        <option value="en">English</option>
        <option value="vn">Vietnamese</option>
      </select>
      <div>
        {language === "en" ? <p>Rikkei Academy</p> : <p>Học Viện Rikkei</p>}
      </div>
    </div>
  );
}