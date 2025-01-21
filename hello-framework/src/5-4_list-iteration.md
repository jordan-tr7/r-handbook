
# Iterating over a List
--- 

Iterating over a list is very similar to how we iterated over each element of a vector. The ***for ... in*** structure we used in R also works for lists:

```R
# create a list
example_list <- list(
    "my_int" = 5L,
    "my_bool" = TRUE, 
    "my_na" = NA,
    "my_vec" = c(1, 2, 3, 4),
    "my_list" = list(1, 2, 3),
    "my_string" = "Hello, world!"
)

# access each element within a for loop
for (element in example_list) {
    print(element)
}
```

If we want more control in how elements are selected and access to each index, we can also use the structure with the ***length()*** function on lists:

```R
# create a list
example_list <- list(
    "my_int" = 5L,
    "my_bool" = TRUE, 
    "my_na" = NA,
    "my_vec" = c(1, 2, 3, 4),
    "my_list" = list(1, 2, 3),
    "my_string" = "Hello, world!"
)

# getting items with an index number
for (i in 1:length(example_list)) {
    cat("The indexing var i is currently: ", i, "\n")
    cat(sprintf("The element at example_list[%s] is: %s", i, example_list[i]),"\n")
    cat("\n")
}
```

When reviewing lists, we learned that list elements can be named. If our list follows this structure we can use R's ***names()*** function to get the names of each element, and then loop through those. 

```R
# create a list
example_list <- list(
    "my_int" = 5L,
    "my_bool" = TRUE, 
    "my_na" = NA,
    "my_vec" = c(1, 2, 3, 4),
    "my_list" = list(1, 2, 3),
    "my_string" = "Hello, world!"
)

# get the list names
list_names <- names(example_list)

# indexing by names of each list element
for (name in list_names) {
    cat("The name is currently: ", name, "\n")
    cat(sprintf("The element at example_list[[\"%s\"]] is : %s", 
    name, example_list[name]), "\n")
    cat("\n")
}
```

There are many different ways to loop through and access list elements, but this opens up a lot of freedom when working with data in different formats.