import "./Card.css"

const items = [
    {
        _id: '1234',
        nome: 'Rick Sanchez',
        imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
        _id: '5678',
        nome: 'Morty Smith',
        imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    },
];

function Card() {
    return(
        <div className="card">
            <h1>Rick Sanchez</h1>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
        </div>
    )
}

export default Card