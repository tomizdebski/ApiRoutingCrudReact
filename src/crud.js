

export const add=async (newOrder, url)=>{
  const response = await fetch(url, {
    method: "POST", // wysyłamy dane
     headers: {"Content-type": "application/json;charset=UTF-8"}, //dodatkowe nagłówki potrzebne JSON-serverowi
    body: JSON.stringify(newOrder), // zamówienie jako json
  });
  if (!response.ok) {
    return {};
  }
  const data = await response.json();
  return data;
}

  

  export const updateId =async (updateProductData,id,url)=>{
    const response=await fetch(`${url}${id}`,{
     method: "PUT",
       headers: {"Content-type": "application/json;charset=UTF-8"},
       body: JSON.stringify(updateProductData)
  })
   const data=await response.json()
   console.log("zapis się powiódł");
   return data;
  };
  

  export const deleteId =async (url, id)=>{
    const response=await fetch(`${url}${id}`,{
     method: "DELETE",
  })
   const data=await response.json()
   return data;
  }



  