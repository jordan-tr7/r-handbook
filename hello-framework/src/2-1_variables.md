
# Variables
--- 

Variables hold various kinds of data that can be accessed, used, and changed throughout a program. Each variable has: 
- a name
- a data type
- and a value

If you want people to read your code without hating you, it helps to have informative variable names that are easy to read and follow a consistent casing pattern. For example, here are...

Some Good Variable Names:
- *file_path*
- *disability_dates*
- *policy_numbers*

Some Bad Variable Names:
- *14xyz* 
- *cns*
- *a_list_of_all_relevant_claim_numbers_by_region_distinct_v2_q4_edits a_long_time_ago_in_a_galaxy_far_far_away_it_is_a_period_of_civil_war_rebel_spaceships striking_from_a_hidden_base_have_won_their_first_victory_against_the_evil_galactic_empire*

If you want to be really consistent, here are some example [Style Guides for R](https://style.tidyverse.org/).

---

### Data Types and Values
\
R has the standard data types that you'd expect a programming language to support. Here are the data types, with examples of the values they can hold:
- **numeric** - *catch all for numbers, can include values: 10, -3, 2.75, etc...*
- **integer** - *specifically whole numbers, values are delcared in R using 'L', e.g.: 10L, -3L, 500L*
- **double** - *decimal numbers, e.g.: 10.75, -0.35, 3.00, etc.*
- **character** - *text, wrapped in quotation marks e.g.: "Hello, world!", "Darth", "1.0"*
- **logical (Boolean)** - *may take the value TRUE or FALSE, but not both*
- **Date** - *catch all for date data types. R supports various formats including Date, Datetime, POSIXct, etc.*
- **NULL** - *special data type for anything undefined*

There are built in functions which give information on the data type of variables
```R
class(variable_name)  # returns the general type of that variable
typeof(variable_name) # returns specific type

# an example of the difference using the number 1.5:
class(1.5)  # returns "numeric"
typeof(1.5) # returns "double"
```
