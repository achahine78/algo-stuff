import BSTNode from "./bstnode";

export default class BinarySearchTree {
  constructor(root) {
    this.root = root;
  }

  insertNode(val) {
    if (this.root) {
      this._insertNodeRecursive(this.root, val);
    } else {
      this.root = new BSTNode(val, null, null);
    }
  }

  _insertNodeRecursive(root, val) {
    if (val <= root.value) {
      if (!root.left) {
        root.left = new BSTNode(val, null, null);
      } else {
        this.insertNodeRecursive(root.left, val);
      }
    } else {
      if (!root.right) {
        root.right = new BSTNode(val, null, null);
      } else {
        this.insertNodeRecursive(root.right, val);
      }
    }
  }

  find(val) {
    return this._findRecursive(this.root, val);
  }

  _findRecursive(root, val) {
    if (root === null) {
      return false;
    }

    if (root.value === val) {
      return true;
    }

    if (val <= root.value) {
      return this._findRecursive(root.left, val);
    }

    if (val > root.value) {
      return this._findRecursive(root.right, val);
    }
  }
}
