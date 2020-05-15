// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const levels = [0];
  const delimiter = '&';
  const nodes = [root, delimiter];

  while(nodes.length > 1) {
    const node = nodes.shift();

    if (node === delimiter) {
      levels.push(0);
      nodes.push(delimiter);
    } else {
      if (node.children) {
        nodes.push(...node.children);
      }

      levels[levels.length - 1]++;
    }

  }

  return levels;
}

module.exports = levelWidth;
