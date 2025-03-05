import React from "react";
import Select from "react-select"

const SortOptions = {
  Newest: "Newest",
  LowTohigh: "Low to high",
  highToLow: "High to low",
  MostPopular: "Most Popular",

}

const SelectSort = () => {
  return <Select options={SortOptions}/>

 };


export default SelectSort