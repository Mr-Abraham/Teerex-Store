import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  colorFilter,
  genderFilter,
  priceFilter,
  setProductData,
  typeFilter,
} from "./store/useStore";
import Item from "./Item";

function Sidebar() {
  const dispatch = useDispatch();
  const definedColors = ["Red", "Blue", "Green", "Black"];
  const definedGender = ["Men", "Women"];
  const definedaTypes = ["Polo", "Hoodie", "Basic"];
  const definedRanges = [
    { key: "0-Rs250", value: { min: 0, max: 250 } },
    { key: "Rs251-Rs450", value: { min: 251, max: 450 } },
    { key: "500", value: { min: 500, max: 999 } },
  ];
  let clrs = [];
  let genders = [];
  let ranges = [];
  let types = [];
  return (
    <div className="fixed w-[200px] border px-4 bg-white">
      <div>
        <section className="my-3 p-1">
          <h1 className="my-2 text-xl text-gray-700 font-semibold">Colour</h1>
          {definedColors.map((color) => (
            <div key={color} className="flex items-center mb-2">
              <input
                type="checkbox"
                name={color}
                id={color}
                onChange={(e) => {
                  if (e.target.checked) {
                    clrs.push(color);
                    dispatch(colorFilter(clrs));
                  } else {
                    clrs = clrs.filter((clr) => clr !== color);
                    dispatch(colorFilter(clrs));
                  }
                }}
              />
              <label className="ml-2" htmlFor={color}>
                {color}
              </label>
            </div>
          ))}
        </section>
        <section className="my-3 p-1">
          <h1 className="my-2 text-xl text-gray-700 font-semibold">Gender</h1>
          {definedGender.map((gender, ind) => (
            <div key={ind}>
              <input
                type="checkbox"
                name={gender}
                id={gender}
                onChange={(e) => {
                  if (e.target.checked) {
                    genders.push(gender);
                    dispatch(genderFilter(genders));
                  } else {
                    genders = genders.filter((gend) => gend !== gender);
                    dispatch(genderFilter(genders));
                  }
                }}
              />
              <label className="ml-2" htmlFor={gender}>
                {gender}
              </label>
            </div>
          ))}
        </section>
        <section className="my-3 p-1">
          <h1 className="my-2 text-xl text-gray-700 font-semibold">Price</h1>
          <div>
            {definedRanges.map((range, ind) => (
              <div key={ind}>
                <input
                  type="checkbox"
                  name={range.key}
                  id={range.key}
                  onChange={(e) => {
                    if (e.target.checked) {
                      ranges.push(range.value);
                      // console.log(ranges);
                      dispatch(priceFilter(ranges));
                    } else {
                      ranges = ranges.filter((item) => item !== range.value);
                      dispatch(priceFilter(ranges));
                    }
                  }}
                />
                <label className="ml-2" htmlFor={range.key}>
                  {range.key}
                </label>
              </div>
            ))}
          </div>
        </section>
        <section className="my-3 p-1">
          <h1 className="my-2 text-xl text-gray-700 font-semibold">Type</h1>
          <div>
            {definedaTypes.map((type, ind) => (
              <div key={ind}>
                <input
                  type="checkbox"
                  name={type}
                  id={type}
                  onChange={(e) => {
                    if (e.target.checked) {
                      types.push(type);
                      dispatch(typeFilter(types));
                    } else {
                      types = types.filter((Item) => Item !== type);
                      dispatch(typeFilter(types));
                    }
                  }}
                />
                <label className="ml-2" htmlFor={type}>
                  {type}
                </label>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sidebar;
