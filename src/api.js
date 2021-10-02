import React from 'react'
import data from './soak_statistics.json'
import './index.css'


const Api = () => {
  return (

    <>
  <h1>Soak Satistics</h1>
      {data.map((detials) => {
        return <>
        <table>
        <tr>
            <th>Average Response Time</th>
            <th>Max Response Time</th>
            <th>Median Response Time</th>
            <th>Minumum Reponse Time</th>
            <th>No of Request</th>
            <th>Request Type</th>
            <th>Response Time Percentiles</th>
            <th>Response Times</th>
            <th>Total Rpm</th>
            <th>Total Rps</th>
          </tr>
          <tr>
            <td>{detials.avg_response_time}</td>
            <td>{detials.max_response_time}</td>
            <td>{detials.median_response_time}</td>
            <td>{detials.min_response_time}</td>
            <td>{detials.num_requests}</td>
            <td>{detials.request_type}</td>
            <td>{JSON.stringify(detials.response_time_percentiles)}</td>
            <td>{JSON.stringify(detials.response_times)}</td>
            <td>{detials.total_rpm}</td>
            <td>{detials.total_rps}</td>
            
          </tr>

        </table>

        </>
      })}
    </>
  )
}

export default Api


