// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "r-handbook",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {
      name: "1 - Introduction",
      open: false,
      pages: [
        {name: "1.1 - Introduction", path: "intro"}, 
        {name: "1.2 - Setup & Prerequisites", path: "r-setup"},
        {name: "1.3 - A Look at RStudio Desktop", path: "1-3_rstudio"}
      ]
    }, 
    {
      name: "2 - Variables, Arithmetic Operations, and Conditionals",
      open: false,
      pages: [
        {name: "2.1 - Variables", path: "2-1_variables"},
        {name: "2.2 - Assignment Operators", path: "2-2_assignment"},
        {name: "2.3 - Arithmetic Expressions", path: "2-3_expressions"},
        {name: "2.4 - Boolean Expressions", path: "2-4_boolean"},
        {name: "2.5 - Conditional Statements", path: "2-5_conditionals"},
        {name: "2.6 - Tracing and Debugging", path: "2-6_debugging"}
      ]
    },
    {
      name: "3 - Strings, Vectors, and Lists",
      open: false,
      pages: [
        {name: "3.1 - Strings & Mutability of Objects", path: "3-1_strings"},
        {name: "3.2 - Vectors", path: "3-2_vectors"},
        {name: "3.3 - Lists", path: "3-3_lists"}
        ]
    },
    {
      name: "4 - Functions and Testing",
      open: false,
      pages: [
        {name: "4.1 - Functions", path: "4-1_functions"},
        {name: "4.2 - Scope", path: "4-2_scope"},
        {name: "4.3 - Return Statements", path: "4-3_return-statements"},
        {name: "4.4 - Testing Functions", path: "4-4_testing-functions"}
      ]
    },
    {
      name: "5 - Loops",
      open: false,
      pages: [
        {name: "5.1 - While Loops", path: "5-1_while-loops"},
        {name: "5.2 - For Loops", path: "5-2_for-loops"},
        {name: "5.3 - Counter Controlled Loops", path: "5-3_counter-loops"},
        {name: "5.4 - Iterating over a List", path: "5-4_list-iteration"},
        {name: "5.5 - Debugging a Loop", path: "5-5_debugging-loops"}
      ]
    }, 
    {
      name: "6 - Libraries and Sourcing R Files",
      open: false,
      pages: [
        {name: "6.1 - Loading Libraries", path: "6-1_libraries"}
      ]
    },
    {
      name: "7 - Storing Data in Tabular Format",
      open: false, 
      pages: [
        {name: "7.1 - Data Frames", path: "7-1_data-frames"},
        {name: "7.2 - Subsetting Data Frames", path: "7-2_subsetting"},
        {name: "7.3 - Transforming Data with `dplyr`", path: "7-3_dplyr"}
      ]
    },
    {
      name: "8 - Connecting to External Data Sources",
      open: false,
      pages: [
        {name: "8.1 - Creating a Custom ODBC Connection", path: "8-1_ODBC"},
        {name: "8.2 - RODBC Library", path: "8-2_RODBC"}, 
        {name: "8.3 - Reading from Excel, CSV, TXT", path: "8-3_excel-csv"},
        {name: "8.4 - Writing Data Frames to Excel", path: "8-4_df_to_excel"}
      ]
    }, 
    {name: "9 - Data Visualization with ggplot2",
    open: false,
    pages: [
      {name: "9.1 - Intro. to the Grammar of Graphics", path: "9-1_grammar_of_graphics"}
    ]
    }
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // cleanUrls: true, // drop .html from URLs
};
