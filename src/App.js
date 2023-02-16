import './styles/App.css';
import {ethers} from 'ethers';
import {useEffect,useState} from 'react';
import roc from './roc_abi.json'
import { FaStar } from 'react-icons/fa';
import pic from './images/logo192.png'

function App() {

  useEffect(()=>{
    displayAll();
  });

  const [entity,setEntity] = useState([[]]);

  const rocContractAddress=''
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const rocContract = new ethers.Contract(rocContractAddress,roc.abi,signer);


  const displayAll=async()=>{

    console.log("Display function called");

    const n = await rocContract.registerCount;
    console.log("Length = "+n);
    var things=[];
    for (var i=1;i<=n;i++)
    {
        const data = await rocContract.getItemFromId(i);
        
        let item = {
            cid:data.cid,
            title:data.courseTitle,
            category:data.category,
            star:data.star,
            voters:data.voters,
        }
        things.push(item);
    }
    console.log(things);

    const [entity,setEntity] = useState([[]]);
  
    setEntity(things);
    console.log(entity);
  }

  return (
    <div className='Home'>
      <h1><strong>Rate on Chain</strong></h1>
      <h2><em>Advertise with your service</em></h2>

      <div className='Vdo-Container'>
        
        <div className='Vdo-box'>
        <img src={pic} alt='img' />
          <p><em>Title</em></p>
          <p>Category : </p>

          <div className='Rating'>
          <p>5.0</p>
          <FaStar color="goldenrod" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
