import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Dropdown from "./Dropdown";
import anyrgb from "../assets/anyrgb.com.png";
import detailbg from "../assets/detailbg.mp4";
import LoadingAni from "../partials/LoadingAni";

const Sales = () => {

    const [capacity, setCapacity] = useState([]);
    const [State, setState] = useState("Chandigarh");
    const [Year, setYear] = useState("2012-13");
  
    const handleStateChange = (e) => {
      const selectedCategory = e.target.value;
      setState(selectedCategory);
    };
  
    const handleYearChange = (e) => {
      const selectedCategory = e.target.value;
      setYear(selectedCategory);
    };
  
    const getInstallation = async () => {
      try {
        const { data } = await axios.get(`/electricEnergySales.php`);
        console.log(data);
        setCapacity(data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      getInstallation();
    }, [State, Year]);


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
            "Punjab",
            "Rajasthan",
            "Uttar Pradesh",
            "Uttarakhand",
            "Bihar",
            "Odisha",
            "Sikkim",
            "Chhatisgarh",
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
          title="Year"
          options={["2012-13", "2013-14", "2014-15", "2015-16", "2016-17", "2017-18", "2018-19", "2019-20", "2020-21"]}
          category={handleYearChange}
        />
      </div>
      <div className="flex justify-center flex-wrap gap-[3vw] mx-[3vw]">
        {capacity ? capacity?.map((e, i) => {
          return e.State === State && e.Year === `${Year}` ? (
            <div key={i} className="relative bg-white bg-opacity-10 mt-[15vh] px-[5vw] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] pb-[5vw]">
              <div>
              <img className="w-[45vw] h-[18vw] object-centre" src={anyrgb} alt="" />
              <h1 className="absolute top-[25%] left-[35%] text-[2.5vw] font-bold italic">{e.State}</h1>
              </div>
              <div className="flex justify-between text-[1.5vw]">
              <div>
                <div><span className="text-amber-600 font-semibold">Domestic: </span>{e.domestic} GWH</div>
                <div><span className="text-amber-600 font-semibold">Commercial: </span>{e.commercial} GWH</div>
                <div><span className="text-amber-600 font-semibold">Industrial Low Volt: </span>{e.industrial_low_volt} GWH</div>
                <div><span className="text-amber-600 font-semibold">Industrial High Volt: </span>{e.industrial_high_volt} GWH</div>
                <div><span className="text-amber-600 font-semibold">Miscellaneous: </span>{e.miscellaneous} GWH</div>
              </div>
              <div>
                <div><span className="text-amber-600 font-semibold">Public Lighting: </span>{e.public_lighting} GWH</div>
                <div><span className="text-amber-600 font-semibold">Traction: </span>{e.traction} GWH</div>
                <div><span className="text-amber-600 font-semibold">Agriculture: </span>{e.agriculture} GWH</div>
                <div><span className="text-amber-600 font-semibold">Public Water Works: </span>{e.public_water_works} GWH</div>
                <div><span className="text-amber-600 font-semibold">Total Energy Sold: </span>{e.total_energy_sold} GWH</div>
              </div>
              </div>
            </div>
          ) : null;
        }): <div className="z-10"><LoadingAni/></div>}
      </div>
    </div>
  )
}

export default Sales
