import { Button, Typography } from "@mui/material"
import axios from "axios"



import { useState } from "react";


// type Post= {
//     id: number;
//     title: string;
//     body: string;
//   }
  



  export default function PostData() {
    const [renderdata,setrenderdata]=useState<any>([]);
    let getData = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then ((res)=>{
            console.log(res.data)
           setrenderdata([...res.data])
             
        })
        .catch((err)=>{
            console.log(err)
        })
    }


 return <>
 
<Button variant="contained" color="error" onClick={getData}>Click</Button>

{
  
  
   
    renderdata.map((coldata:any,i:any)=>{
        return <table border={1}>
         
               <tbody>
                <tr>
                     <td>{coldata.id}</td>
                    <td>{coldata.title}</td>
                     <td>{coldata.body}</td>
                </tr>
                    </tbody>
               </table>
 

    })

     

  
}

 </>
}



