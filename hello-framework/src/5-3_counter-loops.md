
# Counter Controlled Loops
--- 

In the previous sections, we showed some examples of a few different ways to write ***while*** and ***for*** loops. 

One problem that can arise when using ***for*** loops is that sometimes we are happy to just access an element directly, but other times it can be advantageous to know a specific index position instead. Consider these two counter controlled loops:

```R
my_vector <- c(10, 20, 30, 40, 50) 

# version 1 - prints each number in our vector
for (number in my_vector) {
    print(number)
}

# version 2 - prints each number in our vector
for (i in 1:length(my_vector)) {
    print(my_vector[i])
}
```

Both loops do the same thing. However, the difference is that in version 1 we only have the element in the vector, and in version 2 we have the index position, which can then be used to fetch the element in the vector. It is useful to know that these are equivalent, because sometimes having the index position can be helpful for things like generating output file names, adding things to a list, etc.

The ***length()*** function is also useful to know about, because it lets us loop over every element in an object, even when the length of that object may vary between times our program is run.

Another function similar to ***length()*** which is good to know about is ***nchar()***. This can enable us to loop through every character of a string:

```R
my_string <- "hello, world!"

# prints every individual character in our string
for (i in 1:nchar(my_string)) {
    print(substr(my_string, i, i))
}
```

---

### Optional Exercise
\
Given the following vector, modify it so that:
- odd numbers should be changed to their initial value divided by 2
- even numbers should be changed to their initial value multiplied by 10

Use a for loop to make these changes.

```R
# input vector, first 10 integers
my_vector <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
```

**Solution**

In this case, because we want to re-assign values within the vector, we'll want to know the index position in addition to each number in the vector:

```R
# input vector, first 10 integers
my_vector <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

# for loop to modify elements
for (i in 1:length(my_vector)) {

    # case when odd number
    if ((my_vector[i] %% 2) != 0) {
        my_vector[i] <- (my_vector[i] / 2) # if odd, reassign to 1/2 initial val.
    }

    # case when even number
    if ((my_vector[i] %% 2) == 0) {
        my_vector[i] <- (my_vector[i] * 10) # if even, reassign to * 10
    }
}

print(my_vector) # prints c(0.5, 20, 1.5, 40, 2.5, 60, 3.5, 80, 4.5, 100)
```