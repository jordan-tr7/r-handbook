
# Debugging a Loop
--- 

Debugging loops can require some extra steps, because it is not always apparent what is causing an error within a loop. We typically need to debug ***while*** loops, because ***for*** loops have a built-in range or stopping point. Because ***while*** loops are contigent on the loop condition becoming `FALSE` for the loop to end *(or a break statement occuring)*, we run the risk of an infinite loop error if we did not set up the loop conditions properly. 

Here's an example of an infinite loop error: 

```R
# create a number to keep track of the loop progress
number <- 1

# loop to print first 10 numbers
while (number <= 10) {
    number <- 1
    print(number)
    number <- number + 1
}
```

We can see that the numbers aren't increasing, and it infinitely prints `1` to the console. When this happens, it can help to add print statements at different points in the loop. Because it looks like our last line incrementing the number failed, we can add another print statement at the end:

```R
# create a number to keep track of the loop progress
number <- 1

# loop to print first 10 numbers
while (number <= 10) {
    number <- 1
    print(number)
    number <- number + 1
    print(number)
}
```

We can see with the additional print statement that the number variable starts out 
at 1, is incremented to 2, but then resets back to 1 on the next iteration. This is happening because we have 
a line we don't need, where our `number` variable is reassigned to 1 on the first line within each loop.
To fix this problem we can simply remove that line: 

```R
# create a number to keep track of the loop progress
number <- 1

# loop to print first 10 numbers
while (number <= 10) {

    print(number)

    number <- number + 1
}
```

Printing values can be helpful when we have a loop condition that is based on a variable 
that is incrementing or decrementing. For sentinel controlled loops, we can sometimes have an 
infinite loop error that results from a Boolean expression that is always true or false. 
To debug errors of this nature we can add a print statement copying the Boolean expression for
the loop condition to see how that condition is evaluating.

---

### Optional Exercise
\
Review the following code block. What error(s) are present in this loop? And what will happen if we run the code as is? 
How could we fix it to run as intended? 

```R
# initialize a number var for the loop
number <- 1

# while loop to print multiples of 7 from 1 - 100 (inclusive)
while ((number >= 1) | (number <= 100)) {
    
    # if number is a multiple of 7, print to console
    if ((number / 7) == 0) {
        cat("The number", number, "is a multiple of 7.\n", sep = " ")
    }

    # increment loop var
    number <- number + 1
}
```

**Solution**

If we run this code, the program will not stop due to an infinite loop error, and 
no messages will be printed to the console. The reason for this is:
- Our loop condition will always evaluate to `TRUE`, because when incrementing a number that starts at 1, the first part of the condition *(number >= 1)* will always be `TRUE`.
- We incorrectly missed the modulo for the print statement, so *(number / 7)* will never equal 0. 

We can change these two areas as follows for the code to run as intended:

```R
 # initialize a number var for the loop
number <- 1

# while loop to print multiples of 7 from 1 - 100 (inclusive)
while ((number >= 1) & (number <= 100)) {
    
    # if number is a multiple of 7, print to console
    if ((number %% 7) == 0) {
        cat("The number", number, "is a multiple of 7.\n", sep = " ")
    }

    # increment loop var
    number <- number + 1
}
```