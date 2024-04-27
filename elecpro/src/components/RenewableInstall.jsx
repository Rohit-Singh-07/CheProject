import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import Dropdown from "./Dropdown";
import anyrgb from "../assets/anyrgb.com.png";
import detailbg from "../assets/detailbg.mp4";

const RenewableInstall = () => {
  const [capacity, setCapacity] = useState([]);
  const [Month, setMonth] = useState("Jan");
  const [Year, setYear] = useState("2019");

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
      const { data } = await axios.get(`/instcap_allindia_res.php`);
      console.log(data);
      setCapacity(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInstallation();
  }, [Month, Year]);

  return (
    <div className="text-white pt-[8vh] bg-zinc-900 w-full min-h-screen">
      <video src={detailbg} className="absolute h-full w-full object-cover top-0 z-0" muted autoPlay loop></video>
      <div className="flex justify-end gap-[4vw] px-[4vw] z-10 absolute top-0 right-0 mt-[8vh]">
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
          options={["2019", "2020", "2021", "2022"]}
          category={handleYearChange}
        />
      </div>
      <div className="flex justify-center flex-wrap gap-[3vw] mx-[3vw] z-10">
      {capacity?.map((e, i) => {
          return e.Month === `${Month}-${Year}` ? (
            <div key={i} className="relative bg-white bg-opacity-10 mt-[15vh] px-[5vw] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] pb-[5vw]">
              <div>
              <img className="w-[45vw] h-[20vw]" src={anyrgb} alt="" />
              <h1 className="absolute top-[24%] left-[35%] text-[2.5vw] font-bold italic">All India Installed Capacity(RES)</h1>
              </div>
              <div className="flex justify-between text-[1.5vw]">
              <div>
                <div><span className="text-amber-600 font-semibold">Month: </span>{e.Month} MW</div>
                <div><span className="text-amber-600 font-semibold">BioMas..: </span>{e.bmpower_congen} MW</div>
                <div><span className="text-amber-600 font-semibold">Solar: </span>{e.solar_power} MW</div>
              </div>
              <div>
                <div><span className="text-amber-600 font-semibold">Hydro: </span>{e.small_hydro_power} MW</div>
                <div><span className="text-amber-600 font-semibold">From Waste: </span>{e.wastetoenergy} MW</div>
                <div><span className="text-amber-600 font-semibold">Wind: </span>{e.wind_power} MW</div>
              </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};



export default RenewableInstall
