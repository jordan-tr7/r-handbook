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
        {name: "4.1 - Functions", path: "intro"},
        {name: "4.2 - Parameters", path: "intro"},
        {name: "4.3 - Scope", path: "intro"},
        {name: "4.4 - Return Statements", path: "intro"},
        {name: "4.5 - Testing Functions", path: "intro"}
      ]
    },
    {
      name: "5 - Loops",
      open: false,
      pages: [
        {name: "5.1 - While Loops", path: "intro"},
        {name: "5.2 - For Loops", path: "intro"},
        {name: "5.3 - Counter Controlled Loops", path: "intro"},
        {name: "5.4 - Iterating over a List", path: "intro"},
        {name: "5.5 - Debugging a Loop", path: "intro"}
      ]
    }, 
    {
      name: "6 - Libraries and Sourcing R Files",
      open: false,
      pages: [
        {name: "6.1 - Loading Libraries", path: "intro"}
      ]
    },
    {
      name: "7 - Connecting to Data Sources with ODBC",
      open: false,
      pages: [
        {name: "7.1 - RODBC Library", path: "intro"}
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
