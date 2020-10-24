/** Global Variables to be set */
let canvas;
let width;
let height;
let context;

function createNode(parent) {
  /**
   * Local Coordinates for x and y with respect to its parent
   **/
  return {
    x: null,
    y: null,
    width: null,
    height: null,
    parent,
    children: [],
    subTreeSize: 0,
  };
}

/*******************************************************/
/* RECURSIVE PRACTICE */
// function countChildNodes(node) {
//   // Base case: No children, count 1 (itself)
//   if (node.children.length == 0) {
//     node.subTreeSize = 1;
//   } else if (node.children.length >= 0) {
//     let childCount = 0;
//     for (let child of node.children) {
//       countChildNodes(child);
//       childCount += child.subTreeSize;
//       node.subTreeSize = childCount;
//     }
//     // Count Yourself
//     node.subTreeSize += 1;
//   }
// }

// function countChildNodesv2(node) {
//   // Base case: No children, count 1 (itself)
//   if (node.children.length == 0) {
//     node.subTreeSize = 1;
//   } else if (node.children.length >= 0) {
//     node.subTreeSize = 1;
//     for (let child of node.children) {
//         countChildNodesv2(child);
//       node.subTreeSize += child.subTreeSize;
//     }
//   }
// }

function countChildNodesv3(node) {
  // Base case: No children, count 1 (itself)
  node.subTreeSize = 1;
  for (let child of node.children) {
    countChildNodesv3(child);
    node.subTreeSize += child.subTreeSize;
  }
}
/********************************************************/

function layout(node, depth = 0) {
  /**
   * Layout children left to right OR top to bottom
   * Will flip based on the depth
   * Every increment of depth changes the direction i.e. lr -> tb
   **/
  if (node.children.length == 0) {
    node.width = 2;
    node.height = 2;
    return;
  }
  let distance = 0;
  let crossDistance = 0;
  const mainAxis = (depth + (height > width)) % 2 == 0 ? "x" : "y";
  const mainLength = mainAxis == "x" ? "width" : "height";
  const crossAxis = mainAxis == "x" ? "y" : "x";
  const crossLength = mainAxis == "x" ? "height" : "width";
  for (const child of node.children) {
    layout(child, depth + 1);
    child[mainAxis] = distance;
    child[crossAxis] = 0;
    distance += child[mainLength] + 2;
    crossDistance = Math.max(crossDistance, child[crossLength]);
  }
  node[mainLength] = distance + 2;
  node[crossLength] = crossDistance + 4;
}

function draw(node, x = 1.5, y = 1.5) {
  context.strokeRect(x + node.x, y + node.y, node.width, node.height);
  if (node.children.length == 0)
    context.fillRect(
      x + node.x + 0.5,
      y + node.y + 0.5,
      node.width - 1,
      node.height - 1
    );
  for (const child of node.children)
    draw(child, x + node.x + 2, y + node.y + 2);
}

const root = createNode(null);
const nodes = [root];

function removeItem(array, item) {
  array.splice(array.indexOf(item), 1);
}

function removeNode(node, cleanParent = true) {
  if (cleanParent) removeItem(node.parent.children, node);
  removeItem(nodes, node);
  for (const child of node.children) removeNode(child, false);
}

export async function main(promiseGetter) {
  const backgroundColour = "white";
  const lineColour = "black";
  const dotColour = "lime";

  canvas = document.getElementById("canvas");
  //   width = window.innerWidth;
  //   height = window.innerHeight;
  width = window.innerWidth * 0.5;
  height = window.innerHeight * 0.5;
  canvas.width = width;
  canvas.height = height;
  context = canvas.getContext("2d");
  context.strokeStyle = lineColour;

  let firstFrame = true;
  // Eslint!!!! doesn't like true
  while (Math.sign(0) == 0) {
    if (!firstFrame) {
      // This will select which promise to get (we need two for start pause)
      await promiseGetter();
    }
    firstFrame = false;
    await new Promise(requestAnimationFrame);

    countChildNodesv3(root);
    // const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
    let randomNode;
    /* Custom Node Picking */
    /* Aggregate the subTreeSize */
    let subTreeSizeTotal = 0;
    for (let node of nodes) {
      subTreeSizeTotal += 1 / node.subTreeSize;
    }
    let transformedNodeIdx = Math.floor(Math.random() * subTreeSizeTotal);
    // Find the node which this transformedNodeIdx corresponds to
    let count = 0;
    for (let node of nodes) {
      count += 1 / node.subTreeSize;
      if (count >= transformedNodeIdx) {
        randomNode = node;
        break;
      }
    }

    const newNode = createNode(randomNode);
    randomNode.children.push(newNode);
    nodes.push(newNode);

    if (root.width > width || root.height > height)
      removeNode(nodes[1 + Math.floor(Math.random() * (nodes.length - 1))]);

    layout(root);

    context.fillStyle = backgroundColour;
    context.fillRect(0, 0, width, height);
    context.fillStyle = dotColour;
    draw(root);
  }
}
