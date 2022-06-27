import React,{useState,useEffect} from 'react';
import Axios from "axios";
import './App.css';

function App() {

  const [list,setList]=useState([]);
  

  
  
  useEffect(()=>{

    Axios.get('https://data.covid19india.org/data.json').then((response)=>{
      setList(response.data.statewise);
      console.log(list[0]);
     // console.log(response.data.statewise);

    })

  },[])

  





 
  return (
    <div className="App">
      <div className="header">
          <h1>Covid19 Tracker</h1>
          <hr></hr>
      </div>

      <div className="total">
        <div className="item"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMq_m5LH8BZEYB5Nsu0-GyscCART00iFhYCA&usqp=CAU"></img></div>
        <div className="item" id="one">
          <div><h5>Active</h5></div>
        
          <div className="num">{list[0].active}</div>
        </div>
        <div className="item" id="two">
          <div><h5>Confirmed</h5></div>
         
          <div className="num">{list[0].confirmed}</div>
        </div>
        <div className="item" id="three">
          <div><h5>Deaths</h5></div>
         
          <div className="num">{list[0].deaths}</div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <table className="table">
          <thead className="head">
            <tr>
              <th>State</th>
              <th>Active</th>
              <th>Confirmed</th>
              <th>Deaths</th>
              <th>Recovered</th>
              <th>Last updated</th>
            </tr>

          </thead>
          <tbody>
            {list.map((obj)=>{
              if(obj.state!=="State Unassigned"){
              if(obj.state!=="Total"){
              return(
              <tr>
                <td>{obj.state}</td>
                <td>{obj.active}</td>
                <td>{obj.confirmed}</td>
                <td>{obj.deaths}</td>
                <td>{obj.recovered}</td>
                <td>{obj.lastupdatedtime}</td>
              </tr> 

              )
              }
            }
            })}
            

          </tbody>
        </table>

      </div>

    
      
    </div>
  );
}

export default App;
