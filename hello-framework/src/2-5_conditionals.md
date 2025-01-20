
# Conditional Statements
--- 

We can use Boolean expressions to make a new form of statement called a conditional statement. These statements are used to only execute code when a given expression is true. We start a conditional statement in R using the ***if*** keyword followed by parenthesis which hold a Boolean expression, and then curled brackets which outline what code should be run if the expression is true:

```R
... 

if (error == TRUE) {
    # if our error variable is TRUE, do some code to handle errors here...
}

...
```
We can also use ***else if*** to add another expression to be evaluated if the first is false. Additionally, the ***else*** keyword can be used as a catch-all if other expressions were all false. For example, given a `number` variable:
```R
...

if (number %% 2 == 0) {

    print("Our number is even...")

} else if (number %% 2 == 1) {
    
    print("Our number is odd...")

} else {
    
    print("How'd we get here? Is our number a decimal?")

}
...
```

It is also possible to chain multiple boolean expressions together within a conditional statement using the and `&` and or `|` operators. 

---

### Optional Exercises

1) Review the following code block. What will `resting_heart_rate` be if `cups_of_tea` is equal to 0, 1, or 2?

```R
cups_of_tea <- # ? #
resting_heart_rate <- 70

if (cups_of_tea > 0) {
    resting_heart_rate <- (resting_heart_rate + (cups_of_tea * 10))
} else {
    resting_heart_rate <- resting_heart_rate - 5
}

print(paste("Resting heart rate is currently:", resting_heart_rate, sep = " "))
```

2) What will the following code block print?

```R
claimant_age <- 53
jurisdiction <- "New York"
injury_cause <- "motor vehicle accident"

if ((claimant_age < 50) & (jurisdiction == "New York") & 
((injury_cause == "slip, trip, fall") | (injury_cause == "motor vehicle accident"))) {
    
    print("Flagged claim.")

} else {
    
    print("No flagged claim.")

}
```

**Solutions**

1) For each case, the resting heart rate will be:
- With 0 cups of tea, resting heart rate will be 65. 
- With 1 cup of tea, resting heart rate will be 80. 
- With 2 cups of tea, resting heart rate will be 90. 

2) This code block prints "No flagged claim.". Although the jurisdiction is equal to "New York" and the injury cause is either "slip, trip, fall" or "motor vehicle accident", because the claimant's age is > 50, the first of `claimant_age < 50` evaluates to false. 