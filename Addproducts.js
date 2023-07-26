import React, { useRef } from "react";





const Addproducts = ({setdata}) =>{


    const productnameRef = useRef()
    const priceRef = useRef()
    const oldpriceRef = useRef()

    const handlevalues = (e) =>{
        e.preventDefault();

        const productname = e.target.elements.productname.value;
        const price = e.target.elements.price.value;
        const oldprice = e.target.elements.oldprice.value;
        const newProduct ={
            id:4,
            productname,
            price,
            oldprice
            


        }
        setdata(prevdata =>prevdata.concat(newProduct))
        productnameRef.current.value = ""
        priceRef.current.value = ""
        oldpriceRef.current.value = ""
        

 


    }

    return(
        <form onSubmit={handlevalues}>
            <input type="text" name="productname"placeholder="Enter the productname" ref={productnameRef}/>
            <input type="text" name="price"placeholder="Price" ref={priceRef}/>
            <input type="text"name="oldprice"placeholder="old Price" ref={oldpriceRef}/>
            <button>Add</button>







        </form>



    )







}




export default Addproducts;