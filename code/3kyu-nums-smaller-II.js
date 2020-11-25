class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 0;
  }
}

class CounterTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return 0;
    }

    var currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        this.root.count += 1;

        if (currentNode.left === null) {
          currentNode.left = newNode;
          return newNode.count;
        }

        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        newNode.count = currentNode.count + 1;

        if (currentNode.right === null) {
          currentNode.right = newNode;
          return newNode.count;
        }

        currentNode = currentNode.right;
      }
    }
  }
}

smallerToRight([12, 1, 2, 3, 0, 11, 4]);
smallerToRight([5, 4, 3, 2, 1]);
smallerToRight([1, 2, 3, 4, 5]);

// data<array>
function smallerToRight(data) {
  var countSmallerArr = [];
  var counterTree = new CounterTree();

  for (var i = data.length - 1; i >= 0; i--) {
    countSmallerArr[i] = counterTree.insert(data[i]);
  }

  console.log(countSmallerArr);
}
