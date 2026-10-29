export function Item({name, info}){
    console.log(info)
    // destructuring
    const {size, price, toppings} = info
    return(
        <div className = "menu-item">
            <h4>{name}</h4>
            <p>Size: {size}</p>
            <p>Price: ${price}</p>
            <p>Toppings: {toppings.join(", ")}</p>
        </div>
    )
}