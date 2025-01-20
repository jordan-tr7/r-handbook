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
        {name: "1.1 - Introduction", path: "intro"}
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
        {name: "4.2 - Parameters", path: "4-2_parameters"},
        {name: "4.3 - Scope", path: "4-3_scope"},
        {name: "4.4 - Return Statements", path: "4-4_return-statements"},
        {name: "4.5 - Testing Functions", path: "4-5_testing-functions"}
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
      name: "7 - Connecting to Data Sources with ODBC",
      open: false,
      pages: [
        {name: "7.1 - RODBC Library", path: "7-1_RODBC"}
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
