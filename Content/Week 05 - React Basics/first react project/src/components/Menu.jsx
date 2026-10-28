import {Item} from "../components"

export function Menu(){

let drinks = [
    {id:"1",name:"pepsi", price:5},
    {id:"2",name:"sprite", price:3}
]

    return (
        <h1>
            This is the menu page
            <Item name = "Pepsi" price = "5"/>
            {
                drinks.map(drink=>{
                    return <Item key={drink.id}name = {drink.name} price = {drink.price}/>
                })
            }
        </h1>
    )
}