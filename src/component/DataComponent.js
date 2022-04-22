import React, { useState, useEffect } from 'react';
import UserService, { fetchStates } from '../service/UserService';


const DataComponent = () => {

  const [states, setStates] = useState("");

  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      console.log("states brfore ---> "+states);
      let result = fetchStates (states);
     result.then(data => setResult(data.data));
     
    };

    fetchAPI();
  }, [states]);

  

  const handleStateChange  = (value) =>{
    setStates(value);
  }
  console.log("state is ---->  "+states);
  return (
    <div className='center'>
         <select onChange={(e) => handleStateChange(e.target.value)}>
         <option disabled selected="true" defaultValue="" >Select</option>
               <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
               <option value="Andhra Pradesh">Andhra Pradesh</option>
               <option value="Bihar">Bihar</option>
               <option value="Chandigarh">Chandigarh</option>
               <option value="Delhi">Delhi</option>
               <option value="Goa">Goa</option>
               <option value="Gujarat">Gujarat</option>
               <option value="Haryana">Haryana</option>
               <option value="Himachal Pradesh">Himachal Pradesh</option>
               <option value="Jammu and Kashmir">Jammu and Kashmir</option>
               <option value="Karnataka">Karnataka</option>
               <option value="Kerala">Kerala</option>
               <option value="Ladakh">Ladakh</option>
               <option value="Madhya Pradesh">Madhya Pradesh</option>
               <option value="Maharashtra">Maharashtra</option>
               <option value="Manipur">Manipur</option>
               <option value="Mizoram">Mizoram</option>
               <option value="Odisha">Odisha</option>
               <option value="Punjab">Punjab</option>
               <option value="Rajasthan">Rajasthan</option>
               <option value="Tamil Nadu">Tamil Nadu</option>
               <option value="Telengana">Telengana</option>
               <option value="Uttar Pradesh">Uttar Pradesh</option>
               <option value="Uttarakhand">Uttarakhand</option>
               <option value="West Bengal">West Bengal</option>
             </select>
             {
               result && <>
               {
                <div>
                             <h1 className="text-center">Data List</h1>
                             <table className="table table-striped">
                                 <thead>
                                     <tr>
                
                                         <td>Sno</td>
                                         <td>Date</td>
                                         <td>Time</td>
                                         <td>State</td>
                                         <td>Indian Count</td>
                                         <td>foreigner Count</td>
                                         <td>Cured</td>
                                         <td>Deaths</td>
                                         <td>confimred</td>
                                     </tr>
                
                                 </thead>
                                 <tbody>
                                     {
                                         result.map(
                                             data =>
                                             <tr key = {data.sno} >
                                                 <td>{data.sno}</td>
                                                 <td>{data.date}</td>
                                                 <td>{data.time}</td>
                                                 <td>{data.state}</td>
                                                 <td>{data.indian}</td>
                                                 <td>{data.foreigner}</td>
                                                 <td>{data.cured}</td>
                                                 <td>{data.deaths}</td>
                                                 <td>{data.confirmed}</td>
                                             </tr>
                                         )
                                     }
                                 </tbody>
                
                             </table>
                        </div>
               }
               </>
             }
    </div>
  )
}

export default DataComponent

// class DataComponent extends React.Component{

//      App = () => {
//         return (
//           <div>
//             <select>
//               <option value="fruit">Fruit</option>
//               <option value="vegetable">Vegetable</option>
//               <option value="meat">Meat</option>
//             </select>
//           </div>
//         );
//       };

// constructor(props){
//     super(props)
//     this.state={
//         data:[]
//     }
// }

// componentDidMount(){
//     UserService.getData().then((response) => {
//         this.setState({
//             data: response.data
//         })
//     });
// }

// render(){
//     return(
//         <div>
//             <h1 className="text-center">Data List</h1>
//             <table className="table table-striped">
//                 <thead>
//                     <tr>

//                         <td>Sno</td>
//                         <td>Date</td>
//                         <td>Time</td>
//                         <td>State</td>
//                         <td>Indian Count</td>
//                         <td>foreigner Count</td>
//                         <td>Cured</td>
//                         <td>Deaths</td>
//                         <td>confimred</td>
//                     </tr>

//                 </thead>
//                 <tbody>
//                     {
//                         this.state.data.map(
//                             data =>
//                             <tr key = {data.sno} >
//                                 <td>{data.sno}</td>
//                                 <td>{data.date}</td>
//                                 <td>{data.time}</td>
//                                 <td>{data.state}</td>
//                                 <td>{data.indian}</td>
//                                 <td>{data.foreigner}</td>
//                                 <td>{data.cured}</td>
//                                 <td>{data.deaths}</td>
//                                 <td>{data.confirmed}</td>
//                             </tr>
//                         )
//                     }
//                 </tbody>

//             </table>
//         </div>
//     )
// }
// }


//export default DataComponent;


