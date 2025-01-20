
# Vectors
--- 

After getting a sense for mathematical operators, data types, and character text in R we can look at one of the most common structures that is used frequently in analytics: sequences of multiple values. R calls these sequences ***vectors***, and a ***vector*** is a sequence of values that are all of the same data type.

To declare a vector in R, we start with the letter c followed by parenthesis: `c()`, and values are then separated by commas within the parenthesis. For example, we can create a vector with the first ten integers:

```R
first_ten_integers <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

# this also works, shorthand for selecting every between the start and end
first_ten_integers <- c(1:10) 
```

After creating a vector, square brackets `[]` can be used to index or select certain values within the vector *(Note: R indexing starts at 1 instead of 0 like most other languages.)*

```R
first_ten_integers <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

first_ten_integers[1] # returns 1, the first element in the vector
first_ten_integers[5] # returns 5

# NOTE: we can also use vectors to specify multiple indices to return
first_ten_integers[5:10] # returns the vector c(5, 6, 7, 8, 9, 10)
first_ten_integers[c(1, 3, 5, 7, 9)] # returns the vector c(1, 3, 5, 7, 9)
```

Later on when we store data tables in R, columns of a table are stored as vectors behind the scenes. For convenience, R can apply mathematical expressions and other functions element wise over all elements in a vector, which becomes relevant when cleaning or transforming columns in data processing. For a simpler example:

```R
first_five_integers <- c(1, 2, 3, 4, 5)

first_five_integers * 10 # returns c(10, 20, 30, 40, 50)
```

For another example of element wise operators over a vector of strings:

```R
good_question <- c("where's", "the", "lamb", "sauce", "donkey", "?")

toupper(good_question) # returns c("WHERE'S", "THE", "LAMB", "SAUCE", "DONKEY", "?")
```

--- 

### Note of Caution with Data Types
\
The requirement that vectors share the same data type can get us into some trouble on occasion. Consider this declaration of a vector:

```R
test_vector <- c(1, 2, 3, 4, "mario") # returns c("1", "2", "3", "4", "mario")
```
We may expect this to throw an error because the text *"mario"* is not a number. However, to try to avoid an error R tries to fix things for us by converting everything in the vector to text. 

With this in mind, it can be good practice to check and / or manually set data types for important variables throughout your program, to avoid errors due to R's implicit conversion.

---

### Setting Data Types
\
Earlier we showed how data types can be checked by using the ***class()*** and ***typeof()*** functions. There are also functions that let us set the data type of a variable or other object. The most common examples of these functions are:
- ***as.integer()*** - attempts to convert to integer 
- ***as.double()*** - attempts to convert to double (decimal #) 
- ***as.character()*** - attempts to convert to text
- ***as.logical()*** - attempts to convert to Boolean `TRUE` or `FALSE` 
- ***as.Date()*** - attempts to convert to Date format

Depending on the data we are working with, attempting to convert values could result in data loss, although R will give us a warning when this occurs. For example:

```R
test_vector <- c(1, 2, 3, 4, "mario")
as.numeric(test_vector) # returns c(1, 2, 3, 4, NA)
```

Using ***as.numeric()*** here will give us a warning: *Warning message: NAs introduced by coercion*. 

Because we asked R to make a conversion that it didn't know how to do *("mario" to numeric)*, it converted each element that it was able to figure out, but will return NA / Null for items that couldn't be converted. This shows the value of being mindful of data types so that information isn't lost while a program is run. A common example in claims is that Claim Numbers need to be stored as text, to handle numbers with leading 0s. Converting these to numeric will lose the leading 0s, so in our programs we need to be mindful that these stay stored as text.

---

### Optional Exercise

Write code that combines the following two vectors into a new vector. Ensure that the new vector has a data type of numeric.

```R
# input vectors
vector_1 <- c(1:5)
vector_2 <- c("6", "7", "8", "9", "10")

# combine vectors here:

```

**Solution**

Vectors can be created using other vectors as elements. We need to be careful of data types, however. The following code will combine the two input vectors into a new vector, and ensure that the data is stored as numberic.

 ```R
# input vectors
vector_1 <- c(1:5)
vector_2 <- c("6", "7", "8", "9", "10")

# combine vectors here:
vector_3 <- as.numeric(c(vector_1, vector_2))
# returns c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
```