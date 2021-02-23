import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react'
import GoogleMap from './Components/GoogleMap/GoogleMap'
import { ipService } from './services/ipService'
import ClipLoader from "react-spinners/ClipLoader";

const App=()=> {

  const [data,setData] = useState('')
  

  useEffect(()=>{
    const fetchData = async ()=>{
      const mapData = await ipService.getLocation();
      setData(mapData);
    };
    
    fetchData()

  },[])




  return (
    <div className="main">
      {data === '' ? '':<h3>Your contry is <span>{data.country_name}</span> & your city is <span>{data.city}</span></h3>}
      {data === '' ? <ClipLoader color={true} loading={"#ffffff"} size={300} css={`display: block;margin: 0 auto;`} /> : <GoogleMap data={data}/>}
    </div>
  );
}

export default App;
