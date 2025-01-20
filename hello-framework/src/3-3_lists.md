
# Lists
--- 

Another data structure in R that is more flexible than vectors are lists. Elements of lists do not need to be of the same data type as other elements. Lists can even store other lists or vectors as elements. To create a list, we can use R's ***list()*** function. Within this function, we can separate each element of the list by commas. For example:

```R
my_list <- list(
    3L,
    "five",
    c(1, 2, 3, 4, 5)
)
```

Our example list has an integer, character text, and a vector of numbers as elements. To access particular elements of a list, we can use notation similar to that for vectors, however for lists we index with double square brackets `[[]]`. For example:

```R
my_list <- list(
    3L,
    "five",
    c(1, 2, 3, 4, 5)
)

my_list[[1]] # returns 3L
my_list[[2]] # returns "five"
my_list[[3]] # returns c(1, 2, 3, 4, 5)

# NOTE: if an element of a list itself can be indexed, we can combine the notation
#       to further select from within that element. For example:
my_list[[3]][2] # returns 2, the second element of the vector at my_list[[3]]
```

--- 

### Lists with Named Elements
\
If we want, we can specify names for the elements in our lists. This is done in the following way:

```R
my_list <- list(
    "number" = 30, 
    "text" = "hello, world!",
    "vector" = c(1:10)
)
```

This also gives us the option to index the list by that element's name, in addition to the index position. For example: 

```R
my_list <- list(
    "number" = 30, 
    "text" = "hello, world!",
    "vector" = c(1:10)
)

my_list[["number"]] # returns 30
my_list[["text"]]   # returns "hello, world!"
```

This is somewhat similar to the [Dictionary](https://en.wikipedia.org/wiki/Associative_array) data structure in computer science, where (key, value) pairs can be stored to retrieve information given a key (name). This can be very useful in R, but take care with naming, because R does not enforce distinct names for different elements of a list, which can cause problems.