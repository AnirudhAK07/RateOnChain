import './styles/App.css';
import {ethers} from 'ethers';
import {useEffect,useState} from 'react';
import roc from './roc_abi.json'
import { FaStar } from 'react-icons/fa';
import tom from './images/tom.jpeg'
import connectWallet from "./utils/Connect";

function Home() {

  var v;

  useEffect(()=>{
    connectWallet();
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
  
    setEntity(things);
    console.log(entity);
  }

  function rate(id,value){
    connectWallet();
    rocContract.rate(id,value,"");
    console.log(value);
  }

  return (
    
    <div className='Home'>
      <h1><strong>Rate on Chain</strong></h1>
      <h2><em>Advertise with your service</em></h2>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className="connectButton">Register</button>
      <div class="grid">
      <div className='Vdo-Container'>
        
        <div className='Vdo-box'>
        <img src={tom} alt='img' width="200" height="200" />
          <p><em>Title</em></p>
          <p>Category : </p>

          
          <p>0.0  <FaStar color="goldenrod" /></p>
          
          
          <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" onClick={v=5} />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" onChange={v=4}/>
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" onChange={v=3}/>
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" onChange={v=2}/>
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" onChange={v=1}/>
            <label for="star1" title="text">1 star</label>
          </div>

<<<<<<< HEAD
          <button className='rate-b' onClick={rate(1,v)} >RATE</button>
=======
          <button className='rate-b' onClick={console.log(v)}>RATE</button>
>>>>>>> 800f9aad75d3610b39a76ae73f9719f4d2519d94
        
        </div>

      </div>
     
      <div className='Vdo-Container'>
        
        <div className='Vdo-box'>
        <img src={tom} alt='img' width="200" height="200" />
          <p><em>Title</em></p>
          <p>Category : </p>

          
          <p>5.0  <FaStar color="goldenrod" /></p>
          
          
          <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" onClick={v=5} />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" onChange={v=4}/>
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" onChange={v=3}/>
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" onChange={v=2}/>
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" onChange={v=1}/>
            <label for="star1" title="text">1 star</label>
          </div>

          <button className='rate-b' onClick={console.log(v)}>RATE</button>
        
        </div>

      </div>
      <div className='Vdo-Container'>
        
        <div className='Vdo-box'>
        <img src={tom} alt='img' width="200" height="200" />
          <p><em>Title</em></p>
          <p>Category : </p>

          
          <p>5.0  <FaStar color="goldenrod" /></p>
          
          
          <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" onClick={v=5} />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" onChange={v=4}/>
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" onChange={v=3}/>
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" onChange={v=2}/>
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" onChange={v=1}/>
            <label for="star1" title="text">1 star</label>
          </div>

          <button className='rate-b' onClick={console.log(v)}>RATE</button>
        
        </div>

      </div>
      <div className='Vdo-Container'>
        
        <div className='Vdo-box'>
        <img src={tom} alt='img' width="200" height="200" />
          <p><em>Title</em></p>
          <p>Category : </p>

          
          <p>5.0  <FaStar color="goldenrod" /></p>
          
          
          <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" onClick={v=5} />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" onChange={v=4}/>
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" onChange={v=3}/>
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" onChange={v=2}/>
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" onChange={v=1}/>
            <label for="star1" title="text">1 star</label>
          </div>

          <button className='rate-b' onClick={console.log(v)}>RATE</button>
        
        </div>

      </div>
      <div className='Vdo-Container'>
        
        <div className='Vdo-box'>
        <img src={tom} alt='img' width="200" height="200" />
          <p><em>Title</em></p>
          <p>Category : </p>

          
          <p>5.0  <FaStar color="goldenrod" /></p>
          
          
          <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" onClick={v=5} />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" onChange={v=4}/>
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" onChange={v=3}/>
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" onChange={v=2}/>
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" onChange={v=1}/>
            <label for="star1" title="text">1 star</label>
          </div>

          <button className='rate-b' onClick={console.log(v)}>RATE</button>
        
        </div>

      </div>
    </div>
    </div>
  );
}

export default Home;
