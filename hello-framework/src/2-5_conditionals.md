
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

---

### Optional Exercise

1) What does the following Boolean expression return?
```R
my_num <- 5
my_num == 2 | 4 | 6
```

**Solution**

It is a bit surprising when this expression returns `TRUE`. Under the hood when R is guessing the types of our expressions, 0 is equivalent to `FALSE`, and any non-zero number evaluates to `TRUE`. With this in mind, there is also an error in our expression, and R effectively evaluates the statement as:
```R
my_num == 2 | TRUE | TRUE
```
Any true value in a logical or returns true, which is why we see our answer, even though our number is not 2, 4, or 6. To fix the expression we can write it as...
```R
my_num == 2 | my_num == 4 | my_num == 6
```
...which will return `FALSE` as expected.