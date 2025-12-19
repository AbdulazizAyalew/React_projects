import ProductList from "./components/Product_list"

function App() {
  const products = [
    {id:1,name:"Asus",price:100000,image:"/images/ASUS.jpg",instock:true,isfeatured:false},
    {id:2,name:"MSI",price:120000,image:"/images/MSI.jpg",instock:true,isfeatured:false},
    {id:3,name:"ENVY",price:150000,image:"/images/ENVY.jpg",instock:false,isfeatured:true},
    {id:4,name:"Elitebook",price:50000,image:"/images/Elitebook.jpg",instock:true,isfeatured:true},
  ]

  return (
    <ProductList products = {products}/>
  )
}

export default App
