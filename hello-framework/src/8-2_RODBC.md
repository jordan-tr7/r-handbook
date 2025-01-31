
# RODBC for Connecting to SQL Server
--- 

The RODBC library allows for easy connection to and querying of databases with ODBC connections. We can use our existing connections, or create a new one as the prior section showed, if needed. Below is a template R script for connecting to a data source using RODBC:

```r
#install.packages("RODBC") # uncomment this line if library not yet installed
library(RODBC) # load RODBC library
library(tidyverse) # optional, for data manipulation after querying

# create connection to data source using ODBC connection
# NOTE: if required, credentials can be passed into odbcConnect() 
#       with parameters: (...uid="MyID", pwd = "MyPass", rows_at_time = 1, ...)
db_conn <- odbcConnect("LocalDSN", rows_at_time = 1)

# quit script if bad connection
if(db_conn == -1){
  quit("Bad connection, halting...", 1)
} else {
  print(sprintf("Connection Established: %s", Sys.time()))
}

# write SQL query as character text
sql <- "
SELECT
... 
FROM Table
INNER JOIN Table2 on ...

WHERE ...
"

# Query with connection, then save data to data frame
df <- sqlQuery(
  channel = db_conn,
  query = sql,
  stringsAsFactors = FALSE
)

# close the DB connection once we're finished querying
odbcClose(db_conn)
print(sprintf("Disconnected from Data Source: %s", Sys.time()))

# rest of program to use queried data in df...
...
```

Some notes about the above template for RODBC:
- "LocalDSN" should be the name of an ODBC connection on your computer. See prior section on setting up new ODBC.
- The `odbcConnect()` function returns a positive integer when a successful connection is made *(this increases with the number of connections made)*. So if our `db_conn` variable is `-1`, this indicates a bad connection. 
- If desired, the `sprintf()` function in base R can be used with our sql to add variables into an SQL query
- We set `stringsAsFactors = FALSE` in our query to keep text columns as text. Leaving as `TRUE` can return weird values or errors. 

Now we can get data from various connections like CXP, AS400, etc. into a data frame to be used with R! Some ways this can be used include: 
- Writing a quick look up script for users who need extra data points added to a file they're working on, but do not have query access. (*In claims we do this a lot for errors received by external entities like NCCI or State Agencies. These error sheets come with Claim IDs, but not other useful info. to resolve the error. A quick lookup script that connects to SQL helps improve that workflow for the managers who have to respond to the errors.*)
- Querying multiple value dates within a loop. The same data can be queried by value date in a loop, with each resulting data frame appended into one using dplyr's `bind_rows()` function. 


