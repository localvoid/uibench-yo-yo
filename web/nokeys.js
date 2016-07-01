var yo = require("yo-yo");

uibench.init("yo-yo [nokeys]", "1.2.2");

function createTableCell(data) {
  function onClick(e) {
    console.log("Clicked" + data);
    e.stopPropagation();
  }

  return yo`<td class="TableCell" onclick=${onClick}>${data}</td>`;
}

function createTableRow(data) {
  var classes = data.active ? "TableRow active" : "TableRow";
  var cells = data.props;

  var children = [createTableCell("#" + data.id)];
  for (var i = 0; i < cells.length; i++) {
    children.push(createTableCell(cells[i]));
  }

  return yo`<tr className=${classes} data-id=${data.id}>${children}</tr>`;
}

function createTable(data) {
  var items = data.items;

  var children = [];
  for (var i = 0; i < items.length; i++) {
    children.push(createTableRow(items[i]));
  }

  return yo`<table class="Table"><tbody>${children}</tbody></table>`;
}

function createAnimBox(data) {
  var time = data.time;
  var style = "border-radius:" + (time % 10).toString() + "px;" +
    "background:rgba(0,0,0," + (0.5 + ((time % 10) / 10)).toString() + ")";

  return yo`<div class="AnimBox" data-id=${data.id} style=${style}></div>`;
}

function createAnim(data) {
  var items = data.items;

  var children = [];
  for (var i = 0; i < items.length; i++) {
    children.push(createAnimBox(items[i]));
  }

  return yo`<div class="Anim">${children}</div>`;
}

function createTreeLeaf(data) {
  return yo`<li class="TreeLeaf">${data.id}</li>`;
}

function createTreeNode(data) {
  var children = [];

  for (var i = 0; i < data.children.length; i++) {
    var n = data.children[i];
    if (n.container) {
      children.push(createTreeNode(n));
    } else {
      children.push(createTreeLeaf(n));
    }
  }

  return yo`<ul class="TreeNode">${children}</ul>`;
}

function createTree(data) {
  return yo`<div class="Tree">${createTreeNode(data.root)}</div>`;
}

function createMain(data) {
  var location = data.location;

  var section;
  if (location === "table") {
    section = createTable(data.table);
  } else if (location === "anim") {
    section = createAnim(data.anim);
  } else if (location === "tree") {
    section = createTree(data.tree);
  }

  return yo`<div class="Main">${section}</div>`;
}

document.addEventListener("DOMContentLoaded", function(e) {
  var container = document.querySelector("#App");
  var a = null;
  var b = null;

  uibench.run(
    function(state) {
      if (a === null) {
        a = createMain(state);
        container.appendChild(a);
      } else {
        b = createMain(state);
        yo.update(a, b);
      }
    },
    function(samples) {
      container.removeChild(a);
      container.innerHTML = "<pre>" + JSON.stringify(samples, null, 2) + "</pre>";
    }
  );
});
