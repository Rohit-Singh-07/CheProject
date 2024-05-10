import { useEffect, useState } from "react";
import axios from "../utils/axios";
import detailbg from "../assets/detailbg.mp4";
import LoadingAni from "../partials/LoadingAni";

const Growth = () => {
  const [capacity, setCapacity] = useState([]);

  const getInstallation = async () => {
    try {
      const { data } = await axios.get(`/installed_capacity_progressive.php`);
      console.log(data);
      setCapacity(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInstallation();
  }, []);

  return (
    <div className="text-white pt-[8vh] bg-zinc-900 w-full min-h-screen">
      <video
        src={detailbg}
        className="fixed h-[100vh] w-[100vw] object-cover top-0 z-0"
        muted
        autoPlay
        loop
      ></video>
      <div className="flex justify-center flex-wrap gap-[3vw] m-[3vw] overflow-auto">
        {capacity ? (
          capacity?.map((e, i) => {
            return (
              <div
                key={i}
                className="w-[20vw] relative bg-white bg-opacity-10 px-[2vw] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-md"
              >
                <div>
                  <div>
                    <span className="text-amber-600 font-semibold">
                      As &nbsp; on &nbsp;: &nbsp;
                    </span>
                    {e.as_on} MV
                  </div>
                  <div>
                    <span className="text-amber-600 font-semibold">
                      Coal &nbsp;: &nbsp;
                    </span>
                    {e.coal} MV
                  </div>
                  <div>
                    <span className="text-amber-600 font-semibold">
                      Gas &nbsp;: &nbsp;
                    </span>
                    {e.gas} MV
                  </div>
                  <div>
                    <span className="text-amber-600 font-semibold">
                      Diesel &nbsp;: &nbsp;
                    </span>
                    {e.diesel} MV
                  </div>
                  <div>
                    <span className="text-amber-600 font-semibold">
                      Hydro &nbsp;: &nbsp;
                    </span>
                    {e.hydro} MV
                  </div>
                  <div>
                    <span className="text-amber-600 font-semibold">
                      nuclear &nbsp;: &nbsp;
                    </span>
                    {e.nuclear} MV
                  </div>
                  <div>
                    <span className="text-amber-600 font-semibold">
                      Renewable &nbsp;: &nbsp;
                    </span>
                    {e.res} MV
                  </div>
                  <div>
                    <span className="text-amber-600 font-semibold">
                      Thermal &nbsp;: &nbsp;
                    </span>
                    {e.thermal_total} MV
                  </div>
                  <div>
                    <span className="text-amber-600 font-semibold">
                      Total &nbsp;: &nbsp;
                    </span>
                    {e.grand_total} MV
                  </div>
                </div>
              </div>
            );
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

export default Growth;
