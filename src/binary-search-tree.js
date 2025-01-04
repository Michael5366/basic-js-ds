const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode || null;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      const addNode = (node, newNode) => {
        if (node.data > newNode.data) {
          if (node.left === null) {
            node.left = newNode;
          } else {
            addNode(node.left, newNode);
          }
        } else {
          if (node.right === null) {
            node.right = newNode;
          } else {
            addNode(node.right, newNode);
          }
        }
      };

      addNode(this.rootNode, newNode);
    }
  }

  has(data) {
    if (this.rootNode === null) {
      return false;
    }

    const hasData = (node, data) => {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data > data) {
        return hasData(node.left, data);
      } else {
        return hasData(node.right, data);
      }
    };

    return hasData(this.rootNode, data);
  }

  find(data) {
    if (!this.rootNode) {
      return null;
    }

    const findNode = (node, data) => {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    };

    return findNode(this.rootNode, data);
  }

  remove(data) {
    if (!this.rootNode) {
      return null;
    }

    const removeData = (node, data) => {
      if (!node) {
        return null;
      }

      if (node.data > data) {
        node.left = removeData(node.left, data);
        return node;
      }

      if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      }

      if (node.data === data) {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left !== null && node.right === null) {
          return node.left;
        }

        if (node.left === null && node.right !== null) {
          return node.right;
        }

        if (node.left !== null && node.right !== null) {
          let minRight = node.right;

          while (minRight.left) {
            minRight = minRight.left;
          }

          node.data = minRight.data;
          node.right = removeData(node.right, minRight.data);
          return node;
        }
      }
    };

    this.rootNode = removeData(this.rootNode, data);
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
