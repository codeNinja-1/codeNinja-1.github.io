var web = {};

web.loadNavigationBar = function(navElement, section) {
  var title = document.createElement("span");
    title.classList.add("title");
    title.textContent = "CodeNinja-1";
    navElement.appendChild(title);
  var link1 = document.createElement("a");
    link1.classList.add("navigation-link");
    link1.textContent = "Projects";
    link1.href = "/projects/";
    navElement.appendChild(link1);
};
