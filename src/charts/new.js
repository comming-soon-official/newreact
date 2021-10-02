import React, { useState } from "react";
// import { Chart } from "react-chartjs-2";
import Chart from './chart'
import Scatter from './Scatter'
import Area from "./area";
// import Mychart from "./box";
import Mychart from './box'
import Heat from './heat'
import "./image.css"
import "./charts.css"


const Newjs = (props) => {

//   const [chart, setChart] = useState(false);
//   const [area, setArea] = useState(false);
//   const [mychart, setMychart] = useState(false);
//   const [heat, setHeat] = useState(false);
//   const [scatter, setScatter] = useState(false);

const Hello = () =>{
    if (props.content === 'area')
    {
        
    }
}

  return (
    <>
      <div> 
        <h1>testAIng Task</h1>
        <div className="cards">
          <div className="card">
            <img
              src={props.image}
              alt="mypic"
              className="card__img"
              onClick={() => {
                Hello()
              }}
            />

            <div className="cardinfo">
              <h3 className="card__title"> {props.title} </h3>
            </div>
          </div>
        </div>
        {/* {chart && <Chart closeChart={setChart}/>} */}
      </div>

    </>
  );
};

export default Newjs;
