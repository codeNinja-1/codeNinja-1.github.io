var web = {};

web.loadNavigationBar = function(navElement, section) {
  navElement.classList.add("navigation");
  var title = document.createElement("a");
    title.classList.add("title");
    title.textContent = "CodeNinja-1";
    title.href = "/";
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

web.loadIcon = function() {
  var container = document.createElement("div");
    container.style.display = "none";
    document.body.appendChild(container);
  var image = document.createElement("img");
    image.src = "https://avatars.githubusercontent.com/u/74162951";
    image.onload = function() {
      var canvas = document.createElement("canvas");
        canvas.width = 32;
        canvas.height = 32;
        container.appendChild(canvas);
        var context = canvas.getContext("2d");
            context.beginPath();
            context.beginPath();
            context.arc(16, 16, 16, 0, Math.PI * 2);
            context.clip();
            context.drawImage(image, 0, 0, 32, 32);
            context.restore();
      var link = document.createElement("link");
        link.setAttribute("rel", "icon");
        link.setAttribute("href", canvas.toDataURL());
        document.head.appendChild(link);
      //document.body.removeChild(container);
    };
    container.appendChild(image);
}
