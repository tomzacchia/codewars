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
    var newNodeCount = 0;

    while (true) {
      if (currentNode.value === value) {
        currentNode.count += 1;
        return currentNode.count - 1;
      }

      if (value < currentNode.value) {
        currentNode.count += 1;

        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }

        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        newNodeCount = newNodeCount + currentNode.count + 1;

        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }

        currentNode = currentNode.right;
      }
    }

    return newNodeCount;
  }
}

smallerToRight([12, 1, 2, 3, 0, 11, 4]); // 6 1 1 1 0 1 0
smallerToRight([5, 4, 3, 2, 1]); // 4 3 2 1 0
smallerToRight([1, 2, 3, 4, 5]); // 0 0 0 0 0

smallerToRight([5, 4, 3, 2, 1]); // [4, 3, 2, 1, 0]
smallerToRight([1, 2, 3]); // [0, 0, 0]
smallerToRight([1, 2, 0]); // [1, 1, 0]
smallerToRight([1, 2, 1]); // [0, 1, 0]
smallerToRight([1, 1, -1, 0, 0]); // [3, 3, 0, 0, 0]
smallerToRight([5, 4, 7, 9, 2, 4, 4, 5, 6]); // [4, 1, 5, 5, 0, 0, 0, 0, 0]

// data<array>
function smallerToRight(data) {
  var countSmallerArr = [];
  var counterTree = new CounterTree();

  for (var i = data.length - 1; i >= 0; i--) {
    countSmallerArr[i] = counterTree.insert(data[i]);
  }

  console.log(countSmallerArr);
}
