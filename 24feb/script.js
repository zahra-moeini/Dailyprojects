const root=document.createElement("div")
document.body.appendChild(root);
root.classList.add("root");

//Cart
const Cart = document.querySelector(".cart");
async function getdata(){
    const data = await axios("https://api.tvmaze.com/shows/179/episodes");
   const Responce= data.data
   console.log(Responce);  
   for (const iterator of Responce) {
     console.log(iterator);
     const img = document.createElement("img");
     const images = iterator.image.medium;
     img.setAttribute("src", `${images}`);
     Cart.append(img)
   }
}
getdata();