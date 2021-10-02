import React from "react";
import Charts from 'react-apexcharts'
 
function Mychart({closeBox}){

    return(
      <>
      
      <div className="hey">
      <button onClick={()=>
            closeBox(false)
        }>x</button>
      <div className="hello">
        

      <Charts
      type = "boxPlot"
      height= {450}
      width= {600}
      series = {[
        {
          data: [
            {
              x: 'M',
              y: [55,78,90,75,99]
            },
            {
              x: 'B',
              y: [45,56,80,66,88]
            },]}]}

          options ={{

            chart: {
              type: 'boxPlot',
              height: 350
            },
            title: {
              text: 'Basic BoxPlot Chart',
              align: 'left'
            },
            subtitle:{
                text:'testAIng Task',
                fontSize:30
            },
            plotOptions: {
              boxPlot: {
                colors: {
                  upper: '#ff0000',
                  lower: '#A5978B'
                }
              }
            }
          }}
          
        ></Charts>
        </div>
        </div>
        </>
    )
        }
      

  export default Mychart