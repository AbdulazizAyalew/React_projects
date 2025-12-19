import { createRoot } from "react-dom/client"

function App() {
  const products = [
    {id:1,name:"Asus",price:"100,000",Image:"",instock:true,isfeatured:false},
    {id:2,name:"MSI",price:"120,000",Image:"",instock:false,isfeatured:false},
    {id:3,name:"ENVY",price:"150,000",Image:"",instock:true,isfeatured:true},
    {id:4,name:"Elitebook",price:"50,000",Image:"",instock:true,isfeatured:true},
  ]

  const root = createRoot(document.getElementById("root"))
  root.render(
    
  )
}

export default App
