const basePath = window.location.pathname.includes("/pages/") ? "../" : "";
fetch(`${basePath}assets/icons/icons.svg`)
  .then(r => r.text())
  .then(svg => {
    const div = document.createElement("div");
    div.style.display = "none";
    div.innerHTML = svg;
    document.body.prepend(div);
  });
