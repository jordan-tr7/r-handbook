
# Testing Functions
--- 

A benefit of writing functions is that it can make our code more modular. Having smaller separated chunks of code that make up a larger program can make debugging easier. We can also write code to test our functions, ensuring that they produce expected results when given varying input arguments.

For an example, let's write a function to calculate how much cash we need to pay the pizza delivery person when ordering pizza:

```R
# NOTE: this function is written in file "pizza_time.R"

# create a new function to calc total pizza bill owed
pizza_time <- function(num_pizzas, cost_per_pizza, tip_percentage) {

    # calculate sub-total
    sub_total <- (num_pizzas * cost_per_pizza)

    # add sales tax to sub-total
    grand_total <- (0.08 * sub_total) + sub_total #.08 for ME sales tax

    # calculate tip amount
    tip_amount <- (tip_percentage * grand_total)

    return(grand_total + tip_amount)
}
```

We can now write a testing function to verify whether our pizza_time function is working as expected:

```R
# NOTE: source() can be used to run the code in another R file
#       if only specifying file name, it should exist in the same working
#       directory you run your other script from
source("pizza_time.R")

# create a new testing function
test_pizza_time <- function(num_pizzas, cost_per_pizza, 
tip_percentage, expected_value) {

    # print message with parameters being tested
    cat("Testing pizza_time() with parameters:",
        "\n",
        "Number of Pizzas: ", num_pizzas,
        "\n",
        "Cost / Pizza: ", cost_per_pizza, 
        "\n",
        "Tip Percentage: ", tip_percentage
    )

    # call original function for actual value
    actual_value <- pizza_time(num_pizzas, cost_per_pizza, tip_percentage)

    # create boolean var to track whether or not actual equals expected
    passed <- (actual_value == expected_value)

    # message based on pass/fail
    if(passed) {
        cat("\n", "Test passed!")
    } else {
        cat("\n", "Test failed. Actual value did not match expected value.")
    }

    return(passed)
}
```

This test function looks very similar to our original function, except we've added an extra argument for `expected_value` to compare the value we expect our given inputs to produce with what the function actual produce. This testing function then:
1) Stores the actual value returned by our function in a variable
2) Compares the actual value to the expected value parameter, printing a message based on the result.

If we manual calculate one bill with the parameters:
- 4 pizzas
- $10 / pizza
- 0.2 (20%) tip

We'd expect the total bill to be $51.84. We can then test this to see:
```R
...
# calling test function
test_pizza_time(
    num_pizzas = 4, 
    cost_per_pizza = 10, 
    tip_percentage = .20, 
    expected_value = 51.84
)

# Prints --------------------------------
Testing pizza_time() with parameters: 
 Number of Pizzas:  4 
 Cost / Pizza:  10 
 Tip Percentage:  0.2
 Test passed!

# Returns -------------------------------
[1] TRUE
```

In testing scenarios for more complicated programs, you'd want to consider a few things when choosing test cases:
- *Did we test what happens for unexpected inputs like very large numbers, negative numbers, etc.?*
- *What does the function do if it receives a `NULL` argument?*
- *Does our function raise errors to prohibit invalid function argument entry? Try to fix values? Etc...*