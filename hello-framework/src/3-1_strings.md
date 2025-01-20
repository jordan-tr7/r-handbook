
# Strings & Mutability of Objects
--- 

Strings, also called string literals, are sequences of characters that are listed between single quotation marks *(e.g., 'cat')*, or double quotation marks *(e.g., "dog")*. 

To understand how certain operators work with strings, it helps to be familiar with the American Standard Code for Information Interchange ([ASCII](https://www.ascii-code.com/)), and [Unicode](https://home.unicode.org/). These are both standardized codes which map unique number codes to characters and symbols commonly used for typing. Because each character maps to unique numeric codes, this means comparative operators can be used on strings. The most relevant operators include `==` and `!=`, because we often want to check if two string literals contain the same sequence of characters. E.g.,:
```R
jurisdiction <- "South Carolina"
jurisdiction == "New York" # returns FALSE
```

Why are these called string *literals*? This question brings up an important concept around how different types of objects are stored. To bridge this gap, we'll take a look at another common job while working with strings: looking at smaller parts of some string. This can be done using R's ***substr( )*** function.

```R
# NOTE: R indexing starts at 1, instead of 0 like some other languages
my_string <- "It's raining cats and dogs."

# substr takes as arguments:
#   1) the string to look in
#   2) the starting index to start grabbing characters from
#   3) the ending index to grab characters until

substr(my_string, 1, 1)  # returns the first character: "I"
substr(my_string, 6, 12) # returns the sequence "raining"

# NOTE: the nchar() function tells us how many characters are in a string
#           this conveniently can also find the last index for us
substr(my_string, 6, nchar(my_string)) # returns "raining cats and dogs."
```

Looking at the ***substr( )*** function brings up a question - if we can access certain parts of a string, can we change / re-assign them with the assignment operator? Consider the following block of code:

```R
my_string <- "hello"

# changes our variable my_string from "hello" to "jello"
substr(my_string, 1, 1) <- "j" 
```

This code runs in R without any errors. Other programming languages like Python would throw an error with this kind of re-assignment because character text literals are considered *immutable objects*, but for R it is sufficient to know that behind the scenes R re-allocates memory to make a new copy of the variable when you make a change like this.

