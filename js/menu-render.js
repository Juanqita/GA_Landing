// Renderiza el menú de un restaurante dentro de #menu-root
// a partir de window.GRUPO_ALFARO_MENUS. Se apoya en data-restaurant
// puesto en <body> para saber cuál carta pintar.

(function () {
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function renderItem(item) {
    var wrap = el("div", "menu-item");

    if (item.image) {
      var photo = el("div", "menu-item-photo");
      var img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      img.loading = "lazy";
      photo.appendChild(img);
      wrap.appendChild(photo);
    }

    var row = el("div", "menu-item-row");
    row.appendChild(el("h4", "menu-item-name", item.name));
    row.appendChild(el("span", "menu-item-price", item.price));
    wrap.appendChild(row);

    if (item.description) {
      wrap.appendChild(el("p", "menu-item-desc", item.description));
    }
    return wrap;
  }

  function renderCategory(cat) {
    var section = el("div", "menu-category");
    section.id = "cat-" + cat.category.toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-");
    section.appendChild(el("h3", "menu-category-title", cat.category));
    var grid = el("div", "menu-items");
    cat.items.forEach(function (item) { grid.appendChild(renderItem(item)); });
    section.appendChild(grid);
    return section;
  }

  function init() {
    var root = document.getElementById("menu-root");
    if (!root) return;
    var key = document.body.getAttribute("data-restaurant");
    var data = window.GRUPO_ALFARO_MENUS[key];
    if (!data) return;

    var inner = el("div", "menu-body-inner");
    data.categories.forEach(function (cat) { inner.appendChild(renderCategory(cat)); });
    root.appendChild(inner);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
