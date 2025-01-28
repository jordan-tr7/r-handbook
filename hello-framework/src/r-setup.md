
# Setting Up R
---

To be able to work with R, we'll need to:

1) Install R onto our computer.
2) Install a text editor or Integrated Development Environment (IDE) to make editing scripts easier. (*RStudio was developed for R, is free, and has a lot of helpful features.*)
3) Create a working directory folder to store files. 

### Installing R
\
The homepage for the [R project](https://www.r-project.org/) can be found here. To install R we want to go to the [Comprehensive R Archive Network (CRAN) Page](https://cran.r-project.org/mirrors.html). This is a content delivery network (CDN), that has multiple links under the **USA** section with links to servers that host the latest version of R. Here's an example of [Iowa State University's CRAN page](https://mirror.las.iastate.edu/CRAN/), which has R installations for different operating systems. 

**Note:** You'll need help from MEMIC's IT department to run the .exe for installing. 

### Installing an IDE
\
You don't need an IDE to write R scripts, but there are helpful features that make life easier. Some of these features include the ability to see variables and data-frame / table structures as you're working on a project, an interface for debugging code, viewing plots, etc. I recommend [Posit's RStudio Desktop](https://posit.co/download/rstudio-desktop/).

**Note:** IT will also need to run this executable for you. The RStudio IDE may need to know the folder on your computer where R was installed during the last step. 

### Setting up a Working Directory Folder
\
With R and an IDE installed, you should be able to run your first R program! I recommend creating a working directory folder somewhere on your computer to store R scripts and projects. This makes it easier for code to reference other files later on. I also like to create separate sub-folders for files imported by and exported from scripts. Here's an example of my working directory folder:
```
├── R_Working_Directory
│   ├── File_Inputs
│   ├── File_Outputs
│   ├── My_First_Script.R
│   ├── etc...
```
