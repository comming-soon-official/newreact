import React from 'react'
import Charts from 'react-apexcharts'
import Demojs from '../demojs'




const Heat = ({closeHeat})=>{


  return(
    <>
    <div className="hey">
    <button onClick={()=>
            closeHeat(false)
        }>x</button>
    <div className="hello">
      

    <Charts
    type="heatmap"
    height= {450}
    width= {600}
    series={[
      {
        name:'A',
        data:[3,10,7,1,9,6,8,1,4,7,8,9,0],
        color:'#FF0000'
      },
      {
        name:'B',
        data:[2,5,1,9,6,3,0,8,4,6,9,1,4],
        color:'#FF0000'
      },
      {
        name:'C',
        data:[8,3,6,9,5,7,1,0,4,7,3,2,5],
        color:'#FF0000'
      },
      {
        name:'D',
        data:[3,10,7,1,9,6,8,1,4,7,8,9,0],
        color:'#FF0000'
      },
      {
        name:'E',
        data:[3,5,9,2,1,7,1,5,0,6,4,7,9],
        color:'#FF0000'
      },
      {
        name:'F',
        data:[3,10,7,1,9,6,8,1,4,7,8,9,0],
        color:'#FF0000'
      },
      {
        name:'G',
        data:[3,10,7,1,9,6,8,1,4,7,8,9,0],
        color:'#FF0000'
      },
      {
        name:'H',
        data:[2,5,1,9,6,3,0,8,4,6,9,1,4],
        color:'#FF0000'
      },
      {
        name:'I',
        data:[8,3,6,9,5,7,1,0,4,7,3,2,5],
        color:'#FF0000'
      },
      {
        name:'J',
        data:[3,10,7,1,9,6,8,1,4,7,8,9,0],
        color:'#FF0000'
      },

      
      
    ]}
    
     options={{
      theme:{
        mode:'light'
      },
       title:{
         text:'HeatMap',
         style:{
            fontSize:30
         }

        },
        subtitle:{
          text:'teastAIng Task',
          style:{
            fontSize:20
          }
        }
    
    }}   
    
    >


    </Charts>
    <Demojs />
    </div>
    </div>
    </>

  )



}
export default Heat