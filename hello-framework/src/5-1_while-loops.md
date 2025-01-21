
# While Loops
--- 

Loops are a great tool that we can use in our programs to run code that we want repeated more than once. There are many ways to use loops, and two main kinds of loops we can write:
1) ***Counter controlled loops** - when we know exactly how many times we need to loop over something* 
2) ***Sentinel controlled loops** - when we don't know how many times we'll need to run some code, but we do know what the state of being done looks like, and can write a Boolean expression to check for that state.*

To write either kind of loop, we need two things:
- ***A loop variable** - stores a value to keep track of the number of iterations or loop state*.
- ***A loop condition** - a Boolean expression to check the variable after each iteration*.

Here are examples of each loop type using the ***while*** loop.

```R
# create a variable to track the number of iterations
num_iterations <- 0

while (num_iterations < 10) {
    # do something here
    ...

    # increment the loop variable
    num_iterations <- num_iterations + 1
}
```
This first loop is a counter controlled loop. We know this will run exactly 10 times, because in each iteration of the loop our variable `num_iterations` is increased by 1. If we forgot to increment this variable, our code would loop infinitely! Alternatively, if we started with `num_iterations` having a value >= 10, the code in the loop would never execute.

Alternatively, here is an example of a sentinel controlled loop:
```R
# create a Boolean var to track if loop complete
done <- FALSE

while (!done) {
    # do something here
    ...

    # check the status and update our variable
    if (desired_outcome) {
        done <- TRUE
    } 
}
```
In this loop, we don't know how many times it will iterate, but as soon as our desired outcome condition is met and `done` is set to `TRUE`, then the loop will halt.

With these examples in mind, the general flow for adding a loop into our program includes:
1) **Loop Setup:** make sure we initialize the loop variable(s), set their values appropriately, write the loop condition, etc.
1) **Run the Code:** here our loop will iterate until the desired outcome is complete
1) **End of Loop Tasks:** we typically want to loop until something happens with our data, so we then send our data or object somewhere else for the rest of the program to proceed. 

---

### Optional Exercise
\
Write a while loop that will print out all multiples of 10 in the range 1 - 100 (inclusive), but in decreasing order (100 should print first).

**Solution**

```R
# create a loop variable to keep track of the number we are on
number <- 100

# start the loop
while (number > 0) {
    if (number %% 10 == 0) {
        # cat function can concatenate strings and variables to be printed
        cat("The number ", number, " is a multiple of 10.\n", sep = "")
    }

    # update the loop variable
    number <- number - 1
}
```

Unlike our previous example when we incremented the looping variable, we can also decrement it, which gets us the desired outcome of printing the multiples from greatest to least.