
# Scope
--- 

Scope refers to the space where variables / objects exist and can be used. There are two main types of scope that we need to be aware of when writing and calling functions: ***global scope*** and ***local scope***.

---

### Global Scope
\
Global scope includes variables and objects defined at the most general level of the program, which are not bound within specific control structures such as if/else blocks, or within a separate context like a function. We know that R uses curled brackets to outline control structures like if/else blocks and function code, so globally scoped variables usually are defined in places without any, or with the least amount of curled brackets. These variables are accessible to other parts of the program. Consider the following modification of our linear regression function from earlier:

```R
m <- 1.5
x <- 3.2
b <- 7.77

linear_regression_calculation <- function() {
    # the formula for estimating y given m, x, b
    y <- (m * x) + b

    # returning the calculated estimate
    return(y)
}

linear_regression_calculation() # returns 12.57
```

R returns 12.57, even though `m`, `x`, and `b` are not defined in the function, or passed in as arguments. How did this happen? When our function was called, R created a section of memory for that function call, but then realized there were missing values for `m`, `x`, and `b`. It then looked outward to the global environment to try to find these values, and found the variables assigned above the function definition, using these to calculate and return `y`.

We may or may not want this to happen, so it is important to remember how global variables are named, in case they get fetched by a function later on in the program without us realizing.

---

### Local Scope
\
Local scope includes variables and objects that are created within a specific context such as a function call. While the function call is happening these variables and objects exist in a certain spot of memory, which is then deallocated from memory once the function call completes. Consider another modification of our linear regression function:

```R
m <- 1.5
x <- 3.2
b <- 7.77

linear_regression_calculation <- function() {
    # the formula for estimating y given m, x, b
    y <- (m * x) + b

    # returning the calculated estimate
    return(y)
}

linear_regression_calculation() # returns 12.57

print(y) # NOTE: returns "Error: object 'y' not found"
```

Although the function returns the value 12.57, trying to print `y` results in an error. This was because `y` was created in the local scope when the function was called, but then removed from memory after 12.57 was returned.

---

### Optional Exercise
\
Consider the two code blocks below. In each code block, the function takes variables `a`, `b`, and `c` as arguments. Will either function call throw an error? Why or why not? 

**Version 1**
```R
a <- 1
b <- 2
c <- 30

function_1 <- function(a, b, c) {
    a <- 5
    b <- 2
    return(a + b + c)
}

# call the function:
function_1(a = a, b = b, c = c)
```

**Version 2**
```R
a <- 1
b <- 2

function_2 <- function(a, b, c) {
    a <- 5
    b <- 2
    c <- 30
    return(a + b + c)
}

# call the function:
function_2(a = a, b = b, c = c)
```

**Solution**

Neither version of the function will throw an error, and both will return the value of 37. Earlier in the section we noted that functions can look to the global scope to find variables that are missing in the local scope. However, R has a unique behavior where when a function is called, a new part of the memory on the stack is created holding its local variables and arguments. 

Because of this behavior, even though the variable `c` is not defined globally in version 2, R can find the local variable `c` defined within function_2 when function_2 is first called. In this way it proceeds without raising an error. In other programming languages like Python, this would cause an error by referencing a variable before it was formally assigned. This difference is important to keep in mind when switching between languages. 