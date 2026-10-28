export function Item({name, price}){
    return(
        <div className = "menu-item">
            <h4>{name}</h4>
            <p>Price: ${price}</p>
        </div>
    )
}