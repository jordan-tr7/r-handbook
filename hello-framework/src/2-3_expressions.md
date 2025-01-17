
# Arithmetic Expressions
--- 

R can evaluate arithmetic expressions, and follows the same order of operations (P.E.M.D.A.S.) from math class. Here are the main operators:

- `x + y`: *addition* 
- `x - y`: *subtraction*
- `x * y`: *multiplication*
- `x / y`: *division*
- `x %% y`: *modulo (remainder after division), e.g. `9 %% 3` returns `0`*
- `x %/% y`: *quotient after division, e.g. `10 %/% 3` returns `3`*
- `a ** b`: *exponent (the `^` character also works): e.g., `3 ** 2` or `3 ^ 2` each return `9`*

---

### Optional Exercises 
\
What will the following expressions evaluate to in R?
1) `(10 % 5) / ((10 * 2) - 5)`  
1) `10 / ((5 + 3) * (3 ** 2))`

**Solutions**
1) This will return an error, because of a typo for the modulo operator. This can be fixed by changing '`%`' to '`%%`'
1) 0.1388889