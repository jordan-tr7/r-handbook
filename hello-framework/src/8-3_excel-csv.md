
# Reading Data from Excel, CSV, TXT

--- 

### Note about File Paths
\
When working with files, we'll need to be familiar with file paths whether we are reading in data or writing out data. If you already have your IDE setup to a working directory folder, that's great. If not, we can check what our current working directory folder is in R by using the `getwd()` function:

```r

getwd() # returns our working directory to the console

# for example, mine returns: 
# "C:/Users/taj/OneDrive - MEMIC/Desktop/R_Working_Directory"

```

The path returned by `getwd()` above is an example of an absolute path, starting from the root of our computer all the way up to the current folder we're in. Luckily, we don't need to type out the entire directory every time. There is notation we can use dots for ( `./` ), to specify a file path without writing the entire working directory. 

In this path structure, the `./` stands for our current working directory. Anything after the `./` is looking further down the file tree within our working directory. This is called a relative path, because it is relative to our current folder. This means that if I want to look for a folder called `Excel_Inputs` within my current working directory, I can access it using the following paths:

```r

absolute_path <- "C:/Users/taj/OneDrive - MEMIC/Desktop/R_Working_Directory/Excel_Inputs"

relative_path <- "./Excel_Inputs"

```

If we ever want to change our working directory in the course of a program, we can do so using the `setwd()` function. For instance, to change our working directory to `Excel_Inputs`, I could write:

```r

# change working directory to excel inputs folder
setwd("./Excel_Inputs")

# check the current working directory
getwd() 
# now returns "C:/Users/taj/OneDrive - MEMIC/Desktop/R_Working_Directory/Excel_Inputs"

```

To access a file in our working directory, we can add another forward slash after the end of the path, and write our file name. For example, to look for the `Test1.xlsx`, we can write the path:
```r
# the relative path to this excel file in our working directory folder
file_path <- "./Test1.xlsx" 
```

Additionally, there's another relative pathing structure we can use, the double dot ( `..` ). This tells the computer to look one level back our outside of our current working directory folder. For example, keeping in mind that our current working directory is the `Excel_Inputs` folder, I can write: 

```r

# check our initial working directory
getwd()
# returns  "C:/Users/taj/OneDrive - MEMIC/Desktop/R_Working_Directory/Excel_Inputs"

# set the working directory to one level up
setwd("..")

# check the current wd again:
getwd()
# now returns "C:/Users/taj/OneDrive - MEMIC/Desktop/R_Working_Directory"

```

Being comfortable with these file paths will help us working with inputs and outputs, and can also help understand where data is stored for other programs we read.

---

### Reading Excel and CSV Files to Data Frames
\
Some useful libraries for reading text, csv, and excel files into R data frames include `readr`, `readxl`, and `openxlsx`. Two of the most handy functions include `read_xlsx()` and `read_csv()`. Here are documentation links for both [read_xlsx()](https://readxl.tidyverse.org/reference/read_excel.html) and [read_csv()](https://readr.tidyverse.org/reference/read_delim.html). 

The basic structure is:

```r
library(readxl) # load the libraries for reading xl files

# read an excel file into a data frame
df <- read_xlsx(path = "./My_File.xlsx")

...
```

There are other arguments we can specify, for example:
- `sheet` can be specified if we have multiple sheets in the workbook, and want to read a specific one. E.g., *sheet = "Sheet1"*
- `range` can specify a specific range. E.g., *range = "Sheet1!A5:G5"*
- `col_names` can specify whether or not to read the first row as column names. 
- `col_types` can be used to tell R which data types to read in the columns as. If not provided, R will guess. 

Reading a CSV or text file has pretty much the same process, just using a different library and function: 

```r
library(readr) # load libraries for reading csv files

# read a csv file into a data frame
df <- read_csv(path = "./My_File2.csv")

...
```

Some important function arguments for `read_csv()` include:
- `delim` specifies which character is the delimiter for columns.
- `col_names` whether or not to use first row as column names.
- `col_types` can specify what data types for each column, if not provided R will guess. 

These libraries have a lot of utility. Once our data from a file is in a data frame object, we can do analysis on it with `dplyr`, or generate new data that is saved to another output file. This is particularly useful for data cleaning and transformation. Using this method we've been able to save a decent amount of time in Claims on compensability data scrubbing that used to be done manually.
