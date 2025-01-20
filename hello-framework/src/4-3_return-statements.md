
# Return Statements
--- 

In previous examples we've included the ***return*** keyword in our functions, and mentioned the importance of considering the data type returned by a function. There are a few more details about return statements that can be helpful to know. These include:

1) The ***return*** keyword will end a function and return whatever values are specified. This means that if there are additional lines of code after the return statement, they will not be executed. *Sometimes you will want to include multiple return statements with conditional logic. For example...*
```R
if (error) {
    return(a)
} else {
    return(b)
}
```
2) Return values exist temporarily in memory, so if we want to use the returned value from a function we need to store it in a variable or pass it along to another function as an argument.
3) Some IDEs may print return statements to the console, but in general if you want to show users return values from certain functions, you may need to add logging statements with functions like ***print()***.

---

### Optional Exercise
\
Consider the following function. What value does calling this function return?

```R
multiple_returns <- function() {
    number <- 1
    return(number)

    number <- 5
    return(number)

    number <- 50
    return(number)

    number <- 500
    return(number)
}

multiple_returns()
```

**Solution**

The function will return a value of 1. Because ***return*** statements end the function call in question, none of the other code below the first return will be executed.
