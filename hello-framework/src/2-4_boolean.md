
# Boolean Expressions
--- 

In the section on variables, we mentioned Boolean values which can take the value `TRUE` or `FALSE`, but not both. Boolean expressions are a special type of expression that can use different operators to evaluate a statement as `TRUE` or `FALSE`. The boolean operators that can be used in R include:
- < less than
- \> greater than
- <= less than or equal to
- \>= greater than or equal to
- == equal to *(two equals signs because only one would be used for assignment or function arguments)*
- != not equal to
- | logical or
- & logical and
- ! logical not

Here are some example Boolean expressions in R:
```R
3 < 5        # returns TRUE
3 > 5        # returns FALSE
10 <= 12     # returns TRUE
12 >= 12     # returns TRUE
33 == 33     # returns TRUE
6 != 42      # returns TRUE
TRUE | FALSE # returns TRUE
TRUE & FALSE # returns FALSE
!FALSE       # returns TRUE
```

---

### Optional Exercise

1) What does the following Boolean expression return?
```R
my_num <- 5
my_num == 2 | 4 | 6
```

**Solution**

It is a bit surprising when this expression returns `TRUE`. Under the hood when R is guessing the types of our expressions, 0 is equivalent to `FALSE`, and any non-zero number evaluates to `TRUE`. With this in mind, there is also an error in our expression, and R effectively evaluates the statement as:
```R
my_num == 2 | TRUE | TRUE
```
Any true value in a logical or returns true, which is why we see our answer, even though our number is not 2, 4, or 6. To fix the expression we can write it as...
```R
my_num == 2 | my_num == 4 | my_num == 6
```
...which will return `FALSE` as expected.