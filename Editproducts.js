import React from "react";

const Editproducts = ({value,data,setdata}) =>{

    const handlename =(e) =>{
        const productname = e.target.value;
        const updatedata = data.map((d)=>d.id === value.id?{...d,productname:productname}:d)
        setdata(updatedata)

    }
    const handleprice =(e) =>{
        const price = e.target.value;
        const updatedata = data.map((d)=>d.id === value.id?{...d,price:price}:d)
        setdata(updatedata)

    }
    const handleoverprice =(e) =>{
        const overprice = e.target.value;
        const updatedata = data.map((d)=>d.id === value.id?{...d,overprice:overprice}:d)
        setdata(updatedata)

    }

    return(
        <tr>
           <td> <input type="text" name="productname" onChange={handlename} value={value.productname} placeholder="Enter the productname"/></td>
           <td>  <input type="text" name="price" onChange={handleprice}  value={value.price} placeholder="Price" /></td>
           <td>  <input type="text"name="oldprice" onChange={handleoverprice}  value={value.oldprice} placeholder="old Price" /></td>
           <td>   <button>update</button></td>





        </tr>



    );





}



export default Editproducts;