import React ,{ useState }from "react";
// import Chart from './chart'
// import Scatter from './Scatter'
import Area from './area'
// import Mychart from './box'
// import Heat from './heat'
import './image.css'

const Image = (props) => {
    const [myNew, setMyNew] = useState(false)
  return (
    <>
          <div>
            <div className="cards">
              <div className="card">

                <img src={props.image} alt="mypic" className="card__img" 
                onClick={()=>{setMyNew(true)}} />

                <div className="cardinfo">

                  <h3 className="card__title"> {props.title} </h3>

                </div>
              </div>
            </div>
            </div>
            {myNew && <Area />}
    </>
  );
};

export default Image;

