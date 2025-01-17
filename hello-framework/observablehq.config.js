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
        {name: "2.6 - Logical Operators", path: "/intro"}, 
        {name: "2.7 - Tracing and Debugging", path: "/intro"}
      ]
    },
    {
      name: "Data Types, Vectors, and Lists",
      open: false,
      pages: [
        {name: "Vectors", path: "/intro"},
        {name: "Lists", path: "/intro"},
        {name: "Strings & Mutability of Objects", path: "/intro"}
      ]
    },
    {
      name: "Functions and Testing",
      open: false,
      pages: [
        {name: "Functions", path: "/intro"},
        {name: "Parameters", path: "/intro"},
        {name: "Scope", path: "/intro"},
        {name: "Return Statements", path: "/intro"},
        {name: "Testing Functions", path: "/intro"}
      ]
    },
    {
      name: "Loops",
      open: false,
      pages: [
        {name: "While Loops", path: "/intro"},
        {name: "For Loops", path: "/intro"},
        {name: "Counter Controlled Loops", path: "/intro"},
        {name: "Iterating over a List", path: "/intro"},
        {name: "Debugging a Loop", path: "/intro"}
      ]
    }, 
    {
      name: "Libraries and Sourcing R Files",
      open: false,
      pages: [
        {name: "Loading Libraries", path: "/intro"}
      ]
    },
    {
      name: "Connecting to Data Sources with ODBC",
      open: false,
      pages: [
        {name: "RODBC Library", path: "/intro"}
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
