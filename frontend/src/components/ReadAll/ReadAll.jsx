import Card from "../cards/Card"
import "./ReadAll.css"

const items = [
    {
      _id: "63ee1e0b18f2b9a93da8435a",
      nome: "Rick Sanchez",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      _id: "63ef87c74522de2944ab1fa8",
      nome: "Morty Smith",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      _id: "63ef87cc4522de2944ab1fa9",
      nome: "Summer Smith",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      _id: "63ef87d44522de2944ab1faa",
      nome: "Beth Smith",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
      _id: "63ef87e24522de2944ab1fab",
      nome: "Jerry Smith",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    },
  ];

function ReadAll() {
    return <div className="ReadAll">
        {items.map(function (item) {
            return <Card key={'card-' + item._id} item={item}/>
        })}         
    </div>
}

export default ReadAll