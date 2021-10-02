import React from 'react'
import Charts from 'react-apexcharts'


function Area({closeArea}){

  

  return(
    <>
    <div className="hey">
    <button onClick={()=>
            closeArea(false)
        }>x</button>
    <div className="hello">
      

    <Charts
    type="area"
    width={600}
    height={450}
    series={[
      {
        name:'M',
        data:[2,10,60,0,0,0],
        color:'#0d25d6'
      },
      {
        name:'B',
        data:[0,0,5,40,40,0],
        color:'#ff0000'
      },
    ]}
     options={{

      theme:{
        mode:'light'
      }
    }}
    
    >


    </Charts>
    </div>
    </div>
    </>

  )



}
export default Area