export const istsat1_urls = {
  website: "http://istsat-one.tecnico.ulisboa.pt/",
  instagram: "https://www.instagram.com/istsat_one/",
  facebook: "https://www.facebook.com/istsatone",
  twitter: "https://twitter.com/istsat_one",
};

export const navbar_entries = [
  {
    name: "Home",
    to: "/",
    dropdown: false,
    dropdown_children: [],
  },
  {
    name: "About",
    to: "/about",
    dropdown: false,
    dropdown_children: [],
  },
  {
    name: "Projects",
    to: "",
    dropdown: true,
    dropdown_children: [
      {
        name: "Project 1",
        to: "/projects/project1",
      },
      {
        name: "Project 2",
        to: "/projects/project2",
      },
    ],
  },
  {
    name: "Publications",
    to: "/publications",
    dropdown: false,
    dropdown_children: [],
  },
];
