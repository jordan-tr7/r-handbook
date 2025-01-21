
# For Loops
--- 

Another common type of loop we can write is a ***for loop***. These loops are particularly useful for the counter controlled loop case where we either want to iterate over something a set number of times, or want to iterate over each element in some larger vector, list, etc.

Setting up a for loop is somewhat simpler, and we just need to specify:
1) Some variable or index for each element in the larger set to iterate over.
1) The object or list we want to iterate over. This can take an object such as a vector/list, or a range from some starting number to an ending number. 
1) The code we want done over the range.

For loops are handy because they can automatically increment the loop variable for us. Additionally there is shorthand for iterating over each element of an object. Here are two examples of a for loop:

```R
# this loop prints the numbers from 1 - 10 (inclusive)
for (i in 1:10){
    print(i)
}
```
When we're using a for loop to iterate a set number of times, it is common practice to use a temporary looping variable named `i` to stand for each iteration. The ***in*** keyword tells R which range we want to loop over.

This keyword also lets us specify to do something with every element of an object:
```R
my_vector <- c(1, 2, 3, 4, 5)

# this loop will iterate once for every element in the vector
# additionally, that element of the vector will be assigned to the
# variable number
for (number in my_vector) {
    print(number)
}
```
This second structure is quite useful. For data work, we sometimes will have a list of multiple data tables that need to be modified in some way. We can use the same structure to write something like:

```R
for (table in table_list) {
    # do something with each table
}
```
