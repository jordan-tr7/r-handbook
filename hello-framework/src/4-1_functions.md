
# Functions
--- 

Functions are an important tool in programming. In examples up to this point we've used some built in functions that R provides such as ***print()***, ***typeof()***, ***class()***, etc. Parts of functions include:
- **Name:** so that we know how to call and use the function. Like with variables, it can help to have an informative name that describes at a high level what your function will do. 
- **Inputs / Arguments:** also called *parameters*, these are values that the function takes in to do what it needs to do. Not all functions need arguments, and some may have arguments that are required and others that are optional. 
- **Return Type:** this specifies what data type or object type will be returned by a function. Some functions may return singular bits of data, objects, or nothing at all. Knowing the return type becomes useful when chaining multiple functions together.

To create a function in R, we use the assignment operator and the ***function()*** keyword to assign a function to our chosen name. Function arguments are added within the parenthesis after the function keyword, and curled brackets are used to enclose the code that will be run when the function is called. The ***return*** keyword tells R which value we want the function to return. For example:

```R
linear_regression_calculation <- function(m, x, b) {
    # the formula for estimating y given m, x, b
    y <- (m * x) + b

    # returning the calculated estimate
    return(y)
}
```

Now that our function is written, we can call it with various arguments:

```R
linear_regression_calculation <- function(m, x, b) {
    # the formula for estimating y given m, x, b
    y <- (m * x) + b

    # returning the calculated estimate
    return(y)
}

linear_regression_calculation(m = 1.5, x = 3.2, b = 7.77) # returns 12.57
linear_regression_calculation(m = 1, x = 1, b = 1)        # returns 2
```

---

### Optional Exercise
\
Write a function that converts fluid ounces to milliliters. Call this function with the argument 43 to find out how many milliliters are in 43 fl oz. 

**Solution**

Names may vary, but here's one solution:

```R
fl_oz_to_ml <- function(fl_oz) {
    # calculate the number of ml
    num_ml <- (fl_oz * 29.5735)

    # return the calculated number
    return(num_ml)
}

fl_oz_to_ml(fl_oz = 43) # returns 1271.66
```