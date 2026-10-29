import {Item} from "../../components"
import { useState } from "react"
export function Menu({pizzas}){

    return (
        <>
            <h2>Check out our most popular pizzas!</h2>
            {
                pizzas.map(pizza=>{
                    return <Item key={pizza.id} name={pizza.name} info={pizza.specs}/>
                })
            }
            
        </>
    )
}