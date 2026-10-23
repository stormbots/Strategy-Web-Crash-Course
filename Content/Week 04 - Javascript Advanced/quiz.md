# Quiz

1. What is the parameter in this function?


    ```js
    function goodMorning(firstName){
        let message = "Good morning " + firstName
        return message
    }
    goodMorning("Jane")
    ```

   <details>
   <summary>Answer</summary>

   firstName

   </details>

2. Write a function named add that receives 2 numbers and returns the sum.

   <details>
   <summary>Answer</summary>

    ```js
    function add(num1, num2){
        return num1+num2
    }
    ```

   </details>

3. Write code that will log the banana from the array using the index number.

    ```js
    let fruit = ["apple", "tomato", "banana", "kiwi"]
    ```

   <details>
   <summary>Answer</summary>

    ```js
    console.log(fruit[2])
    ```

   </details>

4. Write a function that receives a list of names and returns a list of good night messages to each person in the list. 

   <details>
   <summary>Answer</summary>

    ```js
    function goodNight(names){
        let messages=[]
        for(i=0;i<names.length;i++){
            let message = "Goodnight " + names[i]
            messages.push(message)
        }
        return messages
    }
    ```

   </details>

5. Write a function that receives an array of snack objects containing a price key and returns the sum of all the prices

   <details>
   <summary>Answer</summary>

    ```js
    function snackCost(snacks){
        let total=0
        for(i=0;i<snacks.length;i++){
            let snack = snacks[i]
            let price = snack.price
            total = total + price
        }
        return total
    }
    ```

   </details>