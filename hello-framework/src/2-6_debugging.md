
# Tracing and Debugging
--- 

Tracing and debugging are important skills to learn when our code breaks *(throws a warning, error, won't halt, etc.)* or returns values that aren't expected. Debugging is the process of locating which part(s) of the code aren't working as intended, and then resolving these errors. Tracing is a skill that can aid in debugging. It involves reading through the sequence of steps the computer follows while running our program, keeping track of the values of key variables along the way. For an example of debugging, consider the following code: 

```R
# create some numbers
number_1 <- 15
number_2 <- 230
number_3 <- 77
number_4 <- 130

# calculate the average
my_avg <- number_1 + number_2 + number_3 + number_4 / 4
print(my_avg) # prints 354.5 to the console
```

Running this code, the printed average of 354.5 immediately looks incorrect, as it is greater than any of our four numbers. Following the program in sequence shows us the following steps:
1) The four number variables are assigned values over the first four lines of the code.
1) The variable `my_avg` is assigned the value returned by the calculation `number_1 + number_2 + number_3 + number_4 / 4`
1) `my_avg` is printed to the console.

Because the variable assignments and print statement are written correctly, there's likely some problem with the calculation assigned to `my_avg`. We can test different cases to try to make the error more apparent. If all four numbers are the same, the average should also be the same. We can test this by changing each number to something easy, like 10:

```R
# create some numbers
number_1 <- 10
number_2 <- 10
number_3 <- 10
number_4 <- 10

# calculate the average
my_avg <- number_1 + number_2 + number_3 + number_4 / 4
print(my_avg) # prints 32.5 to the console
```

Seeing the result of 32.5, it not becomes more clear. In the order of operations, Division has a higher precedence than Addition, so only `number_4` is being divided by 4, rather than the sum of all four numbers. We can fix our code by making the following change:

```R
# create some numbers
number_1 <- 10
number_2 <- 10
number_3 <- 10
number_4 <- 10

# calculate the average (grouping sum within parenthesis)
my_avg <- (number_1 + number_2 + number_3 + number_4) / 4
print(my_avg) # prints 10 to the console
```

---

### Optional Exercise

Take a look at the following block of code. What message will be printed? Is this expected? If not, should any parts of the code be changed?

```R
# create a number var between 1 - 10
my_num <- 6

# check if even or odd
if (my_num == 1 | 3 | 5 | 7 | 9){
    print("Number is odd.")
} else {
    print("Number is even.")
}
```

**Solution**

Running this code, we see the unexpected message with the input 6 that "Number is odd." The suspect line is our conditional statement. Recalling that any non-zero number evalutes to TRUE, we can see that this conditional statement actually reads as:

```R
if (my_num == 1 | TRUE | TRUE | TRUE | TRUE) ...
```

This will always print out that the number is odd, because any `TRUE` paired with a logical or will always return `TRUE`. We can fix this chunk of code by writing the conditional statement as:

```R
# create a number var between 1 - 10
my_num <- 6

# check if even or odd
if (my_num == 1 | my_num == 3 | my_num == 5 | my_num == 7 | my_num == 9){
    print("Number is odd.")
} else {
    print("Number is even.")
}
```