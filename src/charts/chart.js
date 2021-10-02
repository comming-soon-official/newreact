import React from 'react'
import { Bar } from 'react-chartjs-2';

const Chart = ({ closeChart }) => {

    return (
        <>
        <div className="hey">
        <button onClick={()=>
            closeChart(false)
        }>x</button>
            <div className="hello">
            
                
            <h1 className="ok">diagnosis: Distribution of Target Variable</h1>
            <p>Freq Distribution of Target Variable = diagnosis</p>
                <Bar
                data={{
                    labels: ['B','M'],
                    datasets : [{
                        label:'# of votes',
                        data: ['0.63','0.37'],
                        backgroundColor: ' blue',
                        borderColor:[
                            'black'
                        ],

                        borderWidth:1
                    },
            ]


                    }}


            /></div>
            </div>
            {/* <div className="ooi">
                <p>Percentage Distribution of Targeet = diagnosis</p><Bar
                data={{
                    labels: ['B','M'],
                    datasets : [{
                        label:'# of votes',
                        data: ['357','212'],
                        backgroundColor: ' blue',
                        borderColor:[
                            'black'
                        ],

                        borderWidth:1
                    },
            ]


                    }}

            />
            </div> */}
        </>
    )
}

export default Chart
