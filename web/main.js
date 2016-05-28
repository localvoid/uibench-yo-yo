var yo = require("yo-yo");

uibench.init("yo-yo", "1.2.0");

function createTableCell(data) {
  function onClick(e) {
    console.log("Clicked" + data);
    e.stopPropagation();
  }

  return yo`<td class="TableCell" onclick=${onClick}>${data}</td>`;
}

function createTableRow(key, data) {
  var classes = "TableRow";
  if (data.active) {
    classes = "TableRow active";
  }
  var cells = data.props;

  var children = [createTableCell("#" + data.id)];
  for (var i = 0; i < cells.length; i++) {
    children.push(createTableCell(cells[i]));
  }

  return yo`<tr id="trow-${key}" className=${classes} data-id=${data.id}>${children}</tr>`;
}

function createTable(data) {
  var items = data.items;

  var children = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    children.push(createTableRow(item.id, item));
  }

  return yo`<table id="Table" class="Table"><tbody>${children}</tbody></table>`;
}

function createAnimBox(key, data) {
  var time = data.time;
  var style = "border-radius:" + (time % 10).toString() + "px;" +
    "background:rgba(0,0,0," + (0.5 + ((time % 10) / 10)).toString() + ")";

  return yo`<div id="abox-${key}" class="AnimBox" data-id=${data.id} style=${style}></div>`;
}

function createAnim(data) {
  var items = data.items;

  var children = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    children.push(createAnimBox(item.id, item));
  }

  return yo`<div id="Anim" class="Anim">${children}</div>`;
}

function createTreeLeaf(key, data) {
  return yo`<li id=${key} class="TreeLeaf">${data.id}</li>`;
}

function createTreeNode(key, data) {
  var children = [];

  for (var i = 0; i < data.children.length; i++) {
    var n = data.children[i];
    if (n.container) {
      children.push(createTreeNode(key + "_" + n.id, n));
    } else {
      children.push(createTreeLeaf(key + "_" + n.id, n));
    }
  }

  return yo`<ul id=${key} class="TreeNode">${children}</ul>`;
}

function createTree(data) {
  return yo`<div id="Tree" class="Tree">${createTreeNode("tnode-r", data.root)}</div>`;
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
      container.innerText = JSON.stringify(samples, null, 2);
    }
  );
});
