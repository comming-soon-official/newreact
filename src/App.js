import React from "react";
import Chart from "./charts/chart";
import Scatter from "./charts/Scatter";
import Area from "./charts/area";
import Mychart from "./charts/box";
import Heat from "./charts/heat";
import Image from "./charts/image";
import "./charts/charts.css";
import './charts/image.css'
import Data from './charts/image.json'
// import Dup from './charts/dup'
import Demojs from "./demojs";

import Newjs from "./charts/new";

const App = () => {
  return (
    <>

      {Data.map((val) => {
        return (
          <Newjs image={val.imgs} title={val.title} content={val.content} />
        );
      })}
    </>
  );
};

export default App;
