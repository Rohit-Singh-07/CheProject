import React, { useEffect, useState } from "react";
import axios from '../utils/axios';
import Dropdown from "./Dropdown";

const Installation = () => {
  const [capacity, setCapacity] = useState([]);
  const [Region, setRegion] = useState("Northern");
  const [Month, setMonth] = useState("Jan");
  const [Year, setYear] = useState("2019");

  const handleRegionChange = (e) => {
    const selectedCategory = e.target.value;
    setRegion(selectedCategory);
  };

  const handleMonthChange = (e) => {
    const selectedCategory = e.target.value;
    setMonth(selectedCategory);
  };

  const handleYearChange = (e) => {
    const selectedCategory = e.target.value;
    setYear(selectedCategory);
  };

  const getInstallation = async () => {
    try {
      const { data } = await axios.get(`/installed_capacity_statewise.php`);
      console.log(data);
      setCapacity(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInstallation();
  }, [Region, Month, Year]);

  return (
    <div className="text-white pt-[6.5vh]">
      <div className="flex justify-end">
      <Dropdown title="drop" options={["Northern", "Eastern", "Western", "Southern", "North Eastern"]} category={handleRegionChange}/>
      <Dropdown title="drop" options={["Jan", "Feb", "Mar", "Apr", "May"]} category={handleMonthChange}/>
      <Dropdown title="drop" options={["2019", "2020", "2021", "2022", "2023"]} category={handleYearChange}/>
      </div>
      {capacity?.map((e, i) => {
        return e.region === Region && e.month === `${Month}-${Year}` ? <h1 key={i}>something</h1> : null;
      })}
    </div>
  );
};

export default Installation;
