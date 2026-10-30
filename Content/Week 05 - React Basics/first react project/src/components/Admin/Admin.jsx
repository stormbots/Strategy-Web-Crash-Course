import { useActionState } from "react"

export function Admin({ pizzas, setPizzas }) {
    console.log(pizzas)
    
    let sizePrices = { small: 8, medium: 10, large: 12 }
    let toppingPrices = { veg: 0.5, meat: 1 }
    let toppings = {
        veg: ["pineapple", "olives", "bell pepper", "onions"],
        meat: ["pepperoni", "ham", "bacon"]
    }

    const [formState, addPizzaForm, isPending] = useActionState(addPizzaAction, null)
    
    async function addPizzaAction(prevState, formData){
        const name = formData.get("name");
        const size = formData.get("size");
        const selectedToppings = formData.getAll("toppings");

        if(name==""){
            return { 
                success: false, 
                message: "Please enter a name for the pizza!"
            };
        }

        let price = 0
        price+=sizePrices[size];

        selectedToppings.forEach(topping => {
            if (toppings.veg.includes(topping)) {
                price += toppingPrices.veg
            }
            else if (toppings.meat.includes(topping)){
                price += toppingPrices.meat;
            }
        });

        const newPizza = {
            id: crypto.randomUUID(), 
            name: name,
            specs:{
                size: size,
                toppings: selectedToppings,
                price: price
            }
        };

        console.log(newPizza)

        await new Promise ((resolve)=>setTimeout(resolve, 2000))
        setPizzas([...pizzas, newPizza]);
        
        return { 
            success: true, 
            message: "Successfully added!"
        };
    }

    return (
        <>
            <form 
                action={addPizzaForm} 
            >
                <div className="formQuestion">
                    <label>Pizza Name: </label>
                    <input type="text" name="name" />
                </div>

                <div className="formQuestion">
                    <label>Size: </label>
                    <select name="size" defaultValue="small">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>

                <div className="formQuestion">
                    {toppings.veg.map(topping => (
                        <div key={topping}>
                            <label>
                                <input type="checkbox" name="toppings" value={topping} /> 
                                {topping}
                            </label>
                        </div>
                    ))}
                    {toppings.meat.map(topping => (
                        <div key={topping}>
                            <label>
                                <input type="checkbox" name="toppings" value={topping}/> 
                                {topping}
                            </label>
                        </div>
                    ))}
                </div>

                <button className = "formButton" type="submit" disabled={isPending}>
                    {isPending ? "Adding Pizza..." : "Add Pizza"}
                </button>

                {formState?.message && (
                    <div className = "formStateMessage">{formState.message}</div>
                )}

            </form>

        </>
    )
}