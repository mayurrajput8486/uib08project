import React, { useEffect } from 'react'
import { useState } from 'react';
const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        async function productsData () {
            const a = await fetch("https://dummyjson.com/products");
            console.log(a);
            const b = await a.json();
            //console.log(b)
            console.log(b.products);
            setProducts(b.products)
        }
        productsData();
    },[])
   
  return (
    <div>
        <h1>The Products Details are as follows :-</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>Thumbnail</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td><img src={item.thumbnail} width={175}/></td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
           
        </table>
    </div>
  )
}

export default Products