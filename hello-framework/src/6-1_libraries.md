
# Loading Libraries
--- 

One of the benefits of using a commonly used open-source language such as R or Python is that you can easily load and use code written by others to solve a variety of tasks. One of the most useful R libraries for working with data is a collection of packages called [the tidyverse](https://www.tidyverse.org/). To install a new package we can run the following command in R:

```R 
# install.packages with package name in quotes to add a new library
install.packages("tidyverse")
```

Then, to load that library in our R script so we can access pre-written functions, we can use the ***library*** command:

```R
library(tidyverse) # loads all packages in the tidyverse library to our script
```

As mentioned briefly in a prior section, we can also load our own functions from scripts we've written using the ***source*** command:

```R
source("our_file.R")
```

--- 

### List of Useful R Libraries

- [dplyr](https://dplyr.tidyverse.org/) - *manipulating data tables for many SQL like functions, part of the tidyverse.*
- [ggplot2](https://ggplot2.tidyverse.org/) - *data visualizations of all kinds, part of the tidyverse.*
- [tibble](https://tibble.tidyverse.org/) - *souped up data structure for storing data tables (data.frames), part of the tidyverse.*
- [readr](https://readr.tidyverse.org/) - *read in data from xlsx, csv, other delimiters, etc. Part of the tidyverse.*
- [openxlsx](https://cran.r-project.org/web/packages/openxlsx/index.html) - *write to and detailed formatting of generated excel files.*
- [RODBC](https://cran.r-project.org/web/packages/RODBC/RODBC.pdf) - *read in data from SQL servers and other connections with ODBC connectors*



