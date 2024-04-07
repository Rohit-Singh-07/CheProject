import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import Dropdown from "./Dropdown";

const RegionWiseIsntall = () => {
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
    <div className="text-white pt-[6.5vh] bg-zinc-900">
      <div className="flex justify-end gap-[4vw] px-[4vw]">
        <Dropdown
          title="Region"
          options={[
            "Northern",
            "Eastern",
            "Western",
            "Southern",
            "North Eastern",
          ]}
          category={handleRegionChange}
        />
        <Dropdown
          title="Month"
          options={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]}
          category={handleMonthChange}
        />
        <Dropdown
          title="Year"
          options={["2019", "2020", "2021", "2022", "2023"]}
          category={handleYearChange}
        />
      </div>
      <div className="flex justify-center flex-wrap gap-[3vw] mx-[3vw] py-[5vw]">
        {capacity?.map((e, i) => {
          return e.region === Region && e.month === `${Month}-${Year}` ? (
            <div
              key={i}
              className="w-[22vw] h-[30vw] bg-gradient-to-l from-amber-500 via-orange-400 to-yellow-500 rounded-md overflow-hidden bg-transparent-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            >
              <img
                className="w-full h-[40%] object-cover"
                src={`https://source.unsplash.com/featured/?${e.state}`}
                alt=""
              />
              <div className="w-full flex justify-center items-center bg-blue-500 text-[2vw] font-bold">{e.state}</div>
              <h1>( {e.month} )</h1>
              <div className="text-[1.5vw] px-[1vw]">
                <h1>
                  <span className="font-semibold">Coal:</span> {e.coal}MV
                </h1>
                <h1>
                  <span className="font-semibold">Diesel:</span> {e.diesel}MV
                </h1>
                <h1>
                  <span className="font-semibold">Gas:</span>Gas: {e.gas}MV
                </h1>
                <h1>
                  <span className="font-semibold">Nuclear:</span> {e.nuclear}MV
                </h1>
                <h1>
                  <span className="font-semibold">Hydro:</span> {e.hydro}MV
                </h1>
                <h1>
                  <span className="font-semibold">Thermal:</span>{" "}
                  {e.thermal_total}MV
                </h1>
                <h1>
                  <span className="font-semibold">Total:</span> {e.grand_total}MV
                </h1>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default RegionWiseIsntall;
