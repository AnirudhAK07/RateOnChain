import {ethers} from 'ethers';
import roc from './roc_abi.json'
import connectWallet from "./utils/Connect";

export default function Register(){
    var l=[];

    const rocContractAddress='0x056B53d7Aa2D6895F394e6cb6d0d1CF9Cbd5eeC9'
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const rocContract = new ethers.Contract(rocContractAddress,roc.abi,signer);

    function upload(){
        connectWallet();
        var t = document.getElementById('title').value;
        var c = document.getElementById('category').value;
        rocContract.register('123',t,c);
    }

    async function ipfsUpload(e) {
        var t= document.getElementById('img');
        const file = e.target.files[0]
        try{ //try uploading the file
            const added = await client.add(
                file,
                {
                    progress: (prog) => console.log(`received: ${prog}`)
                }
            )
            //file saved in the url path below
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setFileUrl(url)
        }catch(e){
            console.log('Error uploading file: ', e)
        }
    }

    async function createItem(){
        const {name, description, price} = formInput; //get the value from the form input
        
        //form validation
        if(!name || !description || !price || !fileUrl) {
            return
        }

        const data = JSON.stringify({
            name, description, image: fileUrl
        });

        try{
            const added = await client.add(data)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            //pass the url to sav eit on Polygon adter it has been uploaded to IPFS
            return url;
        }catch(error){
            console.log(`Error uploading file: `, error)
        }
    }

    return(
        <div className='Regiter-main'>
            <label for='title'>Title : </label>
            <input type='text' id='title' name='' onChange={null} />
            <br/>

            <label for='category'>Category : </label>
            <input type='text' id='title' name='' onChange={null} />
            <br/>

            <input id='img' type="file" name="Asset" className="my-4" onChange={ipfsUpload}/>

            <button className='Register' onClick={upload()}>
                Register
            </button>

        </div>
    );
}