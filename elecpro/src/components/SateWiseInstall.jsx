import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Dropdown from "./Dropdown";
import anyrgb from "../assets/anyrgb.com.png";
import detailbg from "../assets/detailbg.mp4";
import LoadingAni from "../partials/LoadingAni";

const SateWiseInstall = () => {
  const [capacity, setCapacity] = useState([]);
  const [State, setState] = useState("Chandigarh");
  const [Month, setMonth] = useState("Jan");
  const [Year, setYear] = useState("2019");

  const handleStateChange = (e) => {
    const selectedCategory = e.target.value;
    setState(selectedCategory);
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
  }, [State, Month, Year]);

  return (
    <div className="text-white pt-[8vh] bg-zinc-900 w-full min-h-screen">
      <video src={detailbg} className="absolute h-full w-full object-cover top-0 z-0" muted autoPlay loop></video>
      <div className="flex justify-end gap-[4vw] px-[4vw] z-10 absolute top-0 right-0 mt-[8vh]">
        <Dropdown
          title="State"
          options={[
            "Chandigarh",
            "Delhi",
            "Haryana",
            "Himachal Pradesh",
            "Jammu and Kashmir",
            "Punjab",
            "Rajasthan",
            "Uttar Pradesh",
            "Uttarakhand",
            "Andaman & Nicobar Islands",
            "Bihar",
            "Jharkhand",
            "Odisha",
            "Sikkim",
            "West Bengal",
            "Chhatisgarh",
            "Dadra & Nagar Haveli",
            "Daman & Diu",
            "Goa",
            "Gujarat",
            "Madhya Pradesh",
            "Maharashtra",
            "Andhra Pradesh",
            "Karnataka",
            "Kerala",
            "Lakshadweep",
            "Puducherry",
            "Tamil Nadu",
            "Telangana",
            "Arunachal Pradesh",
            "Assam",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Tripura",
          ]}
          category={handleStateChange}
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
      <div className="flex justify-center flex-wrap gap-[3vw] mx-[3vw]">
        {capacity ? capacity?.map((e, i) => {
          return e.state === State && e.month === `${Month}-${Year}` ? (
            <div key={i} className="relative bg-white bg-opacity-10 mt-[15vh] px-[5vw] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] pb-[5vw]">
              <div>
              <img className="w-[45vw] h-[18vw] object-centre" src={anyrgb} alt="" />
              <h1 className="absolute top-[25%] left-[35%] text-[2.5vw] font-bold italic">{e.state}</h1>
              </div>
              <div className="flex justify-between text-[1.5vw]">
              <div>
                <div><span className="text-amber-600 font-semibold">Coal: </span>{e.coal} MV</div>
                <div><span className="text-amber-600 font-semibold">Gas: </span>{e.gas} MV</div>
                <div><span className="text-amber-600 font-semibold">Diesel: </span>{e.diesel} MV</div>
              </div>
              <div>
                <div><span className="text-amber-600 font-semibold">Hydro: </span>{e.hydro} MV</div>
                <div><span className="text-amber-600 font-semibold">Nuclear: </span>{e.nuclear} MV</div>
                <div><span className="text-amber-600 font-semibold">Renewable: </span>{e.res} MV</div>
              </div>
              </div>
            </div>
          ) : null;
        }): <div className="z-10"><LoadingAni/></div>}
      </div>
    </div>
  );
};

export default SateWiseInstall;
