import { useEffect, useState } from "react";
import Card from "../cards/Card"
import "./ReadAll.css"

const itemsMock = [
    {
      _id: "63ee1e0b18f2b9a93da8435a",
      nome: "Rick Sanchez",
      imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      tags: ["Status: Vivo", "Especie: Humana", "Origem: Terra C-137"]
    },
    {
      _id: "63ef87c74522de2944ab1fa8",
      nome: "Morty Smith",
      imageUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      _id: "63ef87cc4522de2944ab1fa9",
      nome: "Summer Smith",
      imageUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      _id: "63ef87d44522de2944ab1faa",
      nome: "Beth Smith",
      imageUrl: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
      _id: "63ef87e24522de2944ab1fab",
      nome: "Jerry Smith",
      imageUrl: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    },
  ];

function ReadAll() {
  //useState returns 2 things:
  //1 state's value
  //2 function to update state's value
  const [items, setItens] = useState([])

  async function toRequest() {
    //calling backend:
    //const response = await fetch('http://localhost:3000/itens');
    const response = await fetch('https://backend-jornada-fullstack-fevereiro-23.onrender.com/itens')
    const data = await response.json();
    setItens(data)
  }

  useEffect(function(){ toRequest() }, [])
  


  return <div className="ReadAll">
      {items.map(function (item) {
          return <Card key={'card-' + item._id} item={item}/>
      })}         
  </div>
}

export default ReadAll