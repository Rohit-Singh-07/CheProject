import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Dropdown from "./Dropdown";
import anyrgb from "../assets/anyrgb.com.png";
import detailbg from "../assets/detailbg.mp4";
import LoadingAni from "../partials/LoadingAni";

const PowerGen = () => {
  const [capacity, setCapacity] = useState([]);
  const [State, setState] = useState("Chandigarh");
  const [Year, setYear] = useState("2021-22");

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
      const { data } = await axios.get(`/percapitalConsumtion.php`);
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
      <video
        src={detailbg}
        className="absolute h-full w-full object-cover top-0 z-0"
        muted
        autoPlay
        loop
      ></video>
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
            "Jharkhand",
            "Odisha",
            "Sikkim",
            "West Bengal",
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
          options={[
            "2002-03",
            "2003-04",
            "2004-05",
            "2005-06",
            "2006-07",
            "2007-08",
            "2008-09",
            "2009-10",
            "2010-11",
            "2011-12",
            "2012-13",
            "2013-14",
            "2014-15",
            "2015-16",
            "2016-17",
            "2017-18",
            "2018-19",
            "2019-20",
            "2020-21",
            "2021-22",
          ]}
          category={handleYearChange}
        />
      </div>
      <div className="flex justify-center flex-wrap gap-[3vw] mx-[3vw]">
        {capacity ? (
          capacity?.map((e, i) => {
            return e.State === State && e.Year === `${Year}` ? (
              <div
                key={i}
                className="relative bg-white bg-opacity-10 mt-[15vh] px-[5vw] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] pb-[5vw]"
              >
                <div>
                  <img
                    className="w-[45vw] h-[18vw] object-centre"
                    src={anyrgb}
                    alt=""
                  />
                  <h1 className="absolute top-[30%] left-[35%] text-[2.5vw] font-bold italic">
                    {e.State}
                  </h1>
                </div>
                <div className="flex justify-between text-[1.5vw]">
                  <div>
                    <div>
                      <span className="text-amber-600 font-semibold">
                        Year:{" "}
                      </span>
                      {e.Year}
                    </div>
                  </div>
                  <div>
                    <div>
                      <span className="text-amber-600 font-semibold">
                        Per Capita Consumption:{" "}
                      </span>
                      {Math.round(e.value)} kWh
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })
        ) : (
          <div className="z-10">
            <LoadingAni />
          </div>
        )}
      </div>
    </div>
  );
};

export default PowerGen;
