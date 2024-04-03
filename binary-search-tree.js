class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this
    }

    let current = this.root;

    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return this
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const insertHelper = (node, val) => {
      if (node === null) {
        return new Node(val);
      }

      if (val < node.val) {
        node.left = insertHelper(node.left, val);
      } else if (val > node.val) {
        node.right = insertHelper(node.right, val)
      }
      return node
    }

    this.root = insertHelper(this.root, val);

    return this
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current !== null) {
      if (val === current.val) {
        return current
      } else if (val < current.val) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const search = (node, val) => {
      if (node === null) {
        return undefined;
      }

      if (val === node.val) {
        return node;
      }

      if (val < node.val) {
        return search(node.left, val);
      } else {
        return search(node.right, val);
      }
    }

    return search(this.root, val)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];

    const traverse = (node) => {
      if (node !== null) {
        visited.push(node.val);
        traverse(node.left);
        traverse(node.right);
      }
    }

    traverse(this.root);
    return visited
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visited = [];

    const traverse = (node) => {
      if (node !== null) {
        traverse(node.left);
        visited.push(node.val);
        traverse(node.right);
      }
    }

    traverse(this.root);
    return visited
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];

    const traverse = (node) => {
      if (node !== null) {
        traverse(node.left);
        traverse(node.right);
        visited.push(node.val);
      }
    }

    traverse(this.root);
    return visited
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue = [this.root];
    const visited = [];

    while (queue.length > 0) {
      const node = queue.shift();
      if (node !== null) {
        visited.push(node.val);
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
      }
    }
    return visited;
  }

  // /** Further Study!
  //  * remove(val): Removes a node in the BST with the value val.
  //  * Returns the removed node. */

  // remove(val) {

  // }

  // /** Further Study!
  //  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  // /** Further Study!
  //  * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //  * Otherwise return undefined. */

  // findSecondHighest() {

  // }
}

module.exports = BinarySearchTree;
