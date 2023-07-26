import React, { useState } from "react";
import Data from './data.json';
import './table.css';
import Addproducts from "./Addproducts";
import Editproducts from "./Editproducts";





function Table(){
    const [data,setdata] = useState(Data)
       const [edit,editvalue] = useState(-1)

    return(
        <div>
            
                <Addproducts setdata={setdata}/>
                <form onSubmit={handleupdate}>
                {data.map((value)=>(
                    edit ===value.id ?<Editproducts value={value} data={data} setdata={setdata}/>:
                    <div >

                        <h3>{value.productname}</h3>
                        <ul >
                            <li>price:{value.price}</li>
                            <li>oldprice:{value.oldprice}</li>
                            <li><button type="button" onClick={()=>handleedit(value.id)}>edit</button>
                            <button type="button" onClick={()=>handledelete(value.id)}>delete</button></li>


                        </ul>
                   
                        </div>



                ))}
            </form>
            
         </div>
       






    );

    function handleedit(id){

        return(
            editvalue(id)
        )
    }

    function handledelete(id){
const updatedatas = data.filter((d)=>id !== d.id)
setdata(updatedatas)
    }

    function handleupdate(e){
        e.preventDefault();
        const productname = e.target.elements.productname.value;
        const price = e.target.elements.price.value;
        const oldprice = e.target.elements.oldprice.value;
        const newProducts = data.map(d=>d.id === edit ?{...d,productname:productname,price:price,oldprice:oldprice}:d)
        editvalue(-1)
        setdata(newProducts)






    }









}




export default Table;
