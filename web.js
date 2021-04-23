var web = {};

web.loadNavigationBar = function(navElement, section) {
  navElement.classList.add("navigation");
  var title = document.createElement("span");
    title.classList.add("title");
    title.textContent = "CodeNinja-1";
    navElement.appendChild(title);
  var links = {
    "Projects":"/projects/",
    "Coming Soon":"/coming-soon/"
  };
  for (var i = 0;i < Object.keys(links).length;i++) {
    var link = document.createElement("a");
    link.classList.add("navigation-link");
    if (section === Object.keys(links)[i]) {
      link.classList.add("active");
    }
    link.textContent = Object.keys(links)[i];
    link.href = links[Object.keys(links)[i]];
    navElement.appendChild(link);
  }
};
