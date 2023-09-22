import { useRef, useState } from "react";
import UserData from "./UserData";
import '../Styles/Home.css'


const Home = () => {

    let Insurancename = useRef(null)
    let Productname = useRef(null)
    let Claimsstatus = useRef(null)
    let Premium = useRef(null)
    let Minmaxage = useRef(null)

    let addProducts = () =>{
        let data = {
            Insurancename:Insurancename.current.value,
            Productname:Productname.current.value,
            Claimsstatus:Claimsstatus.current.value,
            Premium:Premium.current.value,
            Minmaxage:Minmaxage.current.value
        }
        fetch('http://localhost:4000/productsmatrix',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('Product Added Successfully')
    }

    let [product,setProduct] = useState([])

    useState(()=>{
        let fetchData = async () =>{
            let response = await fetch('http://localhost:4000/productsmatrix')
            let data = await response.json()
            setProduct(data)
        }
        fetchData()
    })
    return <>
    <div className="homedis" onSubmit={addProducts}>
        <div className="addProds">
            <h1>Product Matrix Page</h1>
            <form action="">
                <input ref={Insurancename} type="text" placeholder="Enter Insurance Name" /><br />
                <input ref={Productname} type="text" placeholder="Enter Product Name" /><br />
                <input ref={Claimsstatus} type="text" placeholder="Enter Claims Status" /><br />
                <input ref={Premium} type="text" placeholder="Enter Premium" /><br />
                <input ref={Minmaxage}type="text" placeholder="Enter Minmum-Maximum Age" /><br />
                <button>Add Products</button>
            </form>
        </div>

    </div>
    <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Insurance Name</th>
            <th>Product Name</th>
            <th>Claims Status</th>
            <th>Premium</th>
            <th>Max-Min Age</th>
            </tr>
        </thead>
        <tbody>
            <UserData product={product} />
        </tbody>
    </table>
    <div className="marque">
        <span>New Launches<a href="">Click Here</a></span>
        <marquee behavior="" direction="left">Hey Here It is which new products are getting in to your way have to wait for some more little time untill then have little patience to use them...</marquee>
    </div>

    <div className="youtubevideo">
        <h4>Product Preview</h4>
        <iframe src="https://www.youtube.com/embed/CfV0ataxr4k?si=ZuO4TJipVWR_hYhP" frameborder="0"></iframe>
    </div>
    
    </>
}
 
export default Home;