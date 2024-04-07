import React, { useState } from 'react';
import './style.css';

const Calculator = () => {
  const [applianceName, setApplianceName] = useState('');
  const [appliancePower, setAppliancePower] = useState('');
  const [powerUnit, setPowerUnit] = useState('w');
  const [usage, setUsage] = useState('');
  const [usageUnit, setUsageUnit] = useState('hpDay');
  const [electricityPrice, setElectricityPrice] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [displayResult, setDisplayResult] = useState(false);

  const handleReset = () => {
    setApplianceName('');
    setAppliancePower('');
    setPowerUnit('w');
    setUsage('');
    setUsageUnit('hpDay');
    setElectricityPrice('');
    setResultMessage('');
    setDisplayResult(false);
  };

  const calculateElectricity = (event) => {
    event.preventDefault();

    let power = parseFloat(appliancePower);
    let consumption = parseFloat(usage);
    let price = parseFloat(electricityPrice);

    if (powerUnit === 'w') {
      power /= 1000;
    }

    if (usageUnit === 'mpDay') {
      consumption *= 60;
    }

    const electricityConsumption = power * consumption;
    const totalCost = electricityConsumption * price;

    const message =
      'Appliance Name: ' + applianceName + '<br>' +
      'Electricity Consumption: ' + electricityConsumption.toFixed(2) + ' kWh per day<br>' +
      'Total Cost: ₹' + totalCost.toFixed(2) + ' per day';

    setResultMessage(message);
    setDisplayResult(true);
  };
    
  return (
    <div className="main bg-slate-800 h-[100vh] w-[100vw]">
      <div className="calculator-container shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <h3 className="text-center">
          Daily Appliance Electricity Consumption Calculator
        </h3>
        <form onSubmit={calculateElectricity}>
          <div className="form-group row">
            <label htmlFor="applianceName" className="col-4 col-form-label">
              Appliance Name:
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                id="applianceName"
                required=""
                value={applianceName}
                onChange={(e) => setApplianceName(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label htmlFor="appliancePower" className="col-4 col-form-label">
              Appliance Power:
            </label>
            <div className="col-3">
              <input
                type="number"
                className="form-control"
                id="appliancePower"
                required=""
                value={appliancePower}
                onChange={(e) => setAppliancePower(e.target.value)}
              />
            </div>
            <div className="col-5">
              <select className="custom-select bg-white" id="powerUnit" onChange={(e) => setPowerUnit(e.target.value)}>
                <option value="w">watt (W)</option>
                <option value="kw">kilowatt (kW)</option>
              </select>
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label htmlFor="usage" className="col-4 col-form-label">
              Usage:
            </label>
            <div className="col-3">
              <input
                type="number"
                className="form-control"
                id="usage"
                required=""
                value={usage}
                onChange={(e) => setUsage(e.target.value)}
              />
            </div>
            <div className="col-5">
              <select className="custom-select bg-white" id="usageUnit" onChange={(e) => setUsageUnit(e.target.value)}>
                <option value="hpDay">hours per day</option>
                <option value="mpDay">minutes per day</option>
              </select>
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label htmlFor="electricityPrice" className="col-4 col-form-label">
              Electricity Price:
            </label>
            <div className="col-4">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">₹</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="electricityPrice"
                  value={electricityPrice}
                  onChange={(e) => setElectricityPrice(e.target.value)}
                />
              </div>
            </div>
            <label className="col-4 col-form-label">per kWh</label>
          </div>
          <br />
          <div className="form-group row">
            <button type="reset" className="btn btn-danger col-5 mr-auto ml-4" onClick={handleReset}>
              Clear
            </button>
            <button type="submit" className="btn btn-dark col-5 ml-auto mr-4">
              Calculate
            </button>
          </div>
        </form>
        {displayResult && (
          <div className="result">
            <h4>Result:</h4>
            <p dangerouslySetInnerHTML={{ __html: resultMessage }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
