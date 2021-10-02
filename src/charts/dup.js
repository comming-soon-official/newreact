import React, { useState } from "react";
// import { Chart } from "react-chartjs-2";
import Chart from './chart'
import Scatter from './Scatter'
import Area from "./area";
// import Mychart from "./box";
import Mychart from './box'
import Heat from './heat'
import "./image.css";

const Dup = () => {

  const [chart, setChart] = useState(false);
  const [area, setArea] = useState(false);
  const [mychart, setMychart] = useState(false);
  const [heat, setHeat] = useState(false);
  const [scatter, setScatter] = useState(false);

  return (
    <>
      <div> 
        <h1>testAIng Task</h1>
        <div className="cards">
          <div className="card">
            <img
              src="/images/chart1.png"
              alt="mypic"
              className="card__img"
              onClick={() => {
                setChart(true);
              }}
            />

            <div className="cardinfo">
              <h3 className="card__title"> Bar </h3>
            </div>
          </div>
        </div>
        {chart && <Chart closeChart={setChart}/>}
      </div>


      <div>
        <div className="cards">
          <div className="card">
            <img
              src="/images/area.png"
              alt="mypic"
              className="card__img"
              onClick={() => {
                setArea(true);
              }}
            />

            <div className="cardinfo">
              <h3 className="card__title"> Area </h3>
            </div>
          </div>
        </div>
        {area && <Area closeArea={setArea}/>}
      </div>


      <div>
        <div className="cards">
          <div className="card">
            <img
              src="/images/box.png"
              alt="mypic"
              className="card__img"
              onClick={() => {
                setMychart(true);
              }}
            />

            <div className="cardinfo">
              <h3 className="card__title"> Box </h3>
            </div>
          </div>
        </div>
        {mychart && <Mychart closeBox={setMychart} />}
      </div>


      <div>
        <div className="cards">
          <div className="card">
            <img
              src="/images/Heatmap.png"
              alt="mypic"
              className="card__img"
              onClick={() => {
                setHeat(true);
              }}
            />

            <div className="cardinfo">
              <h3 className="card__title"> Heat </h3>
            </div>
          </div>
        </div>
        {heat && <Heat closeHeat={setHeat}/>}
      </div>


      <div>
        <div className="cards">
          <div className="card">
            <img
              src="/images/Scatter.png"
              alt="mypic"
              className="card__img"
              onClick={() => {
                setScatter(true);
              }}
            />

            <div className="cardinfo">
              <h3 className="card__title"> Scatter </h3>
            </div>
          </div>
        </div>
        {scatter && <Scatter closeScatter={setScatter}/>}
      </div>
    </>
  );
};

export default Dup;
