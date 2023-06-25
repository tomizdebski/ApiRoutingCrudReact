

export const addOrder=async (newOrder)=>{
    const response = await fetch(`http://localhost:3000/orders`, {
      method: "POST", // wysyłamy dane
       headers: {"Content-type": "application/json;charset=UTF-8"}, //dodatkowe nagłówki potrzebne JSON-serverowi
      body: JSON.stringify(newOrder), // zamówienie jako json
    });
    if (!response.ok) {
      console.log("dodano", newOrder);;
    }
    const data = await response.json();
    return data;
  };
  
  const updateProductById=async (updateProductData,id)=>{
    const response=await fetch(`http://localhost:3000/products/${id}`,{
     method: "PUT",
       headers: {"Content-type": "application/json;charset=UTF-8"},
       body: JSON.stringify(updateProductData)
  })
   const data=await response.json()
   return data;
  };
  
  const deleteProductById=async (id)=>{
    const response=await fetch(`http://localhost:3000/products/${id}`,{
     method: "DELETE",
  })
   const data=await response.json()
   return data;
  }
  