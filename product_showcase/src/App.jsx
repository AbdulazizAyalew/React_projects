import {Productcard} from "./components/productcard"

function App() {
  const products = [
    {id:1,name:"Asus",price:"100,000",image:"/images/ASUS.jpg",instock:true,isfeatured:false},
    {id:2,name:"MSI",price:"120,000",image:"/images/MSI.jpg",instock:false,isfeatured:false},
    {id:3,name:"ENVY",price:"150,000",image:"/images/ENVY.jpg",instock:true,isfeatured:true},
    {id:4,name:"Elitebook",price:"50,000",image:"/images/Elitebook.jpg",instock:true,isfeatured:true},
  ]

  return (
    <Productcard products = {products}/>
  )
}

export default App
