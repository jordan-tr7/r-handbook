
# Assignment Operators
--- 

The assignment operator lets us define variables and assign values to them. In R, variables may be assigned with the equals key = . However, R also has a unique assignment operator <- . The following are examples of valid assignments:

```R
claim_number <- '22221010' # assigning character value
max_caseload = 150         # assigning numeric value
is_done <- FALSE           # assigning boolean value
```

It is preferrable to use R's assignment operator instead of the = symbol. Later on, this helps make it more clear to readers of our code when variable assignment is happening, vs. when arguments are being given to a function (which uses = ). 

---

### Optional Exercises

1) Create a variable named `memic` that stores the year MEMIC opened for business as an integer
1) Create a variable named `pi` that stores your favorite flavor of pie as character text

**Solutions**
```R
memic <- 1993L
pi <- "pumpkin"
```