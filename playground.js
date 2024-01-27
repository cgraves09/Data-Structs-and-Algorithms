function charCount(string) {
    if (typeof string !== 'string')
        return console.error("Data type needs to be of string");
    var charObject = {};
    for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
        var char = string_1[_i];
        if (/[A-Za-z]/.test(char)) {
            charObject[char] = ++charObject[char] | 1;
        }
    }
    return charObject;
}
// Write a function that checks 2 arrays and compares if array b contains the squared number of array a
// Inputs 2 array data types of type number
// Output boolean  only true if this is truthy for every index in array a
//  Can we be sure that array a is always the non squared number?
// If not we will need a way to determine which has the lower value order does not matter
// Need to check array is the same length
function same(arrayA, arrayB) {
    if (arrayA.length !== arrayB.length)
        return false;
    var objectA = {};
    var objectB = {};
    for (var _i = 0, arrayA_1 = arrayA; _i < arrayA_1.length; _i++) {
        var val = arrayA_1[_i];
        console.log('val', val);
        console.log('object', objectA);
        console.log((objectA[val] | 0));
        objectA[val] = (objectA[val] | 0) + 1;
    }
    if (5 in objectB) {
    }
    console.log(objectA);
}
// Create an anagram  Which is comparing 2 strings with the same number of letters. To check if 
// they both contain the same letters
// We will check the size first to make sure they are both the same
// Then we can use frequency pattern to convert each string to a key value object then loop through
// and make sure every key in objectA exists in objectB if so return true else false
// also convert to lowercase()
// This will be O(n) complexity
function convertStrToObject(data) {
    var obj = {};
    var string = data.toLowerCase();
    for (var _i = 0, string_2 = string; _i < string_2.length; _i++) {
        var char = string_2[_i];
        obj[char] = (obj[char] | 0) + 1;
    }
    return obj;
}
function anagram(str1, str2) {
    if (str1.length !== str2.length)
        return false;
    var object1 = convertStrToObject(str1);
    var object2 = convertStrToObject(str2);
    for (var key in object1) {
        if (!(key in object2))
            return false;
        if (object2[key] !== object1[key])
            return false;
    }
    return true;
}
/* Count Unique Values
Going to take in a sorted array
We need to count all the unique values in the array
There is possibilites for a negative number but it will always be sorted
We will need to have 2 pointers and do a while loop under a condition
We can create a empty array and just push to it then read its length
edge cases? letters symbols?
*/
function countUniqueValues(array) {
    var i = 0;
    for (var j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }
    return i + 1;
}
/*
    Create an algorithm that will takes in an array
    This array will calculate the max sum of n index based on the second input
    It will return a single number
*/
function maxSubarraySum(array, num) {
    if (num > array.length)
        return null;
    return 10;
}
// function sameFrequency(num1: number, num2: number){
//   // good luck. Add any arguments you deem necessary.
//   const obj1 = convertNumToObj(num1);
//   const obj2 = convertNumToObj(num2);
//   for (const key in obj1) {
//       if (!(key in obj2)) return false;
//       if (obj2[key] !== obj1[key]) return false
//   }
//   return true;
// }
function convertNumToObj(num) {
    var obj = {};
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var val = num_1[_i];
        obj[val] = (obj[val] | 0) + 1;
    }
    return obj;
}
function areThereDuplicates(array) {
    var obj = convertNumToObj(array);
    for (var key in obj) {
        if (obj[key] > 1)
            return true;
    }
    return false;
}
var factorial = function (num) {
    if (num === 1)
        return 1;
    return recursiveFactorial(num);
};
var recursiveFactorial = function (num) {
    if (num === 0)
        return 1;
    console.log(num);
    return num * recursiveFactorial(num - 1);
};
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
function productOfArray(array) {
    if (!array.length)
        return 0;
    var start = 0;
    var recursiveTotal = function (num) {
        var _a;
        if (num.length === 0)
            return 1;
        var test = num.splice(0);
        console.log(test);
        return start + recursiveTotal((_a = num.splice(0)) !== null && _a !== void 0 ? _a : []);
    };
    return recursiveTotal(array);
}
function binarySearch(arr, element) {
    if (!arr.length)
        return false;
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== element && start <= end) {
        if (element > arr[middle])
            start = middle + 1;
        else
            end = middle - 1;
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === element) {
        return middle;
    }
    ;
    return -1;
}
function naiveStr(str, compare) {
    console.log('here');
    var objStr = convertStrToObj(str);
    var objComp = convertStrToObj(compare);
    var total = 0;
    for (var key in objStr) {
        if (objStr[key] === objComp[key])
            total++;
    }
    console.log(total);
}
function convertStrToObj(str) {
    var obj = {};
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        obj[char] = (obj[char] | 0) + 1;
    }
    console.log(obj);
    return obj;
}
//  Sorting
function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
// i = 9
// j = 9
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var minValue = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[minValue] > arr[j]) {
                minValue = j;
            }
        }
        if (i !== minValue) {
            swap(arr, i, minValue);
        }
    }
    return arr;
}
function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
// [9,6,5,2,10]
var TestNode = /** @class */ (function () {
    function TestNode(val) {
        this.val = val;
        this.next = null;
    }
    return TestNode;
}());
var SingleLinkedList = /** @class */ (function () {
    function SingleLinkedList() {
        this.length = 0;
    }
    SingleLinkedList.prototype.push = function (val) {
        var newNode = new TestNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };
    SingleLinkedList.prototype.pop = function () {
        if (!this.head)
            return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    };
    SingleLinkedList.prototype.shift = function () {
        if (!this.head)
            return undefined;
        var current = this.head;
        this.head = current.next;
        current.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    };
    SingleLinkedList.prototype.unshift = function (val) {
        var newHead = new TestNode(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        }
        else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    };
    SingleLinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.length)
            return undefined;
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    };
    SingleLinkedList.prototype.set = function (val, position) {
        var node = this.get(position);
        if (!node)
            return false;
        node.val = val;
        return true;
    };
    SingleLinkedList.prototype.insert = function (position, val) {
        console.log(position > this.length);
        if (position < 0 || position > this.length)
            return false;
        if (position === 0)
            return this.unshift(val);
        if (position === this.length)
            return this.push(val);
        var previousNode = this.get(position - 1);
        var temp = previousNode.next;
        var newNode = new TestNode(val);
        previousNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    };
    return SingleLinkedList;
}());
var NodeTest = /** @class */ (function () {
    function NodeTest(value) {
        this.val = value;
        this.next = null;
        this.prev = null;
    }
    return NodeTest;
}());
var DoubleLinkList = /** @class */ (function () {
    function DoubleLinkList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    DoubleLinkList.prototype.push = function (val) {
        var newNode = new NodeTest(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };
    DoubleLinkList.prototype.pop = function () {
        if (!this.head)
            return false;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            var oldTail = this.tail;
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return this;
    };
    DoubleLinkList.prototype.shift = function () {
        if (!this.head)
            return false;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            var nextNode = this.head.next;
            this.head.next = null;
            this.head = nextNode;
            this.head.prev = null;
        }
        this.length--;
        return this;
    };
    DoubleLinkList.prototype.unshift = function (val) {
        var newNode = new NodeTest(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            this.head.prev = null;
        }
        this.length++;
        return this;
    };
    DoubleLinkList.prototype.get = function (index) {
        if (index < 0 || index >= this.length)
            return false;
        var midPoint = Math.floor(this.length / 2);
        var count = 0;
        var current = this.head;
        if (index <= midPoint) {
            while (count != index) {
                current = current.next;
                count++;
            }
        }
        else {
            current = this.tail;
            count = this.length - 1;
            while (count != index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    };
    DoubleLinkList.prototype.set = function (index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    };
    DoubleLinkList.prototype.insert = function (index, val) {
        if (index === 0)
            return this.unshift(val);
        if (index === this.length)
            return this.push(val);
        var foundNode = this.get(index - 1);
        if (foundNode) {
            var newNode = new NodeTest(val);
            var previousNode = foundNode.prev;
            previousNode.next = newNode;
            newNode.prev = previousNode;
            foundNode.prev = newNode;
            newNode.next = foundNode;
            return true;
        }
        return false;
    };
    return DoubleLinkList;
}());
var NodeListClass = /** @class */ (function () {
    function NodeListClass(val) {
        this.value = val;
    }
    return NodeListClass;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    Stack.prototype.push = function (val) {
        var newNode = new NodeListClass(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this;
    };
    Stack.prototype.pop = function () {
        if (!this.first)
            return null;
        if (this.first === this.last) {
            this.last = null;
        }
        var temp = this.first.next;
        this.first.next = null;
        this.first = temp;
        this.size--;
        return this;
    };
    return Stack;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    Queue.prototype.enqueue = function (val) {
        var newNode = new NodeListClass(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    };
    Queue.prototype.dequeue = function () {
        if (!this.first)
            return null;
        if (this.first === this.last) {
            this.last = null;
        }
        var temp = this.first;
        var newFirst = this.first.next;
        this.first.next = null;
        this.first = newFirst;
        this.size--;
        return temp;
    };
    return Queue;
}());
var BinaryNode = /** @class */ (function () {
    function BinaryNode(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
    return BinaryNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (val) {
        var newNode = new BinaryNode(val);
        if (!this.root)
            return this.root = newNode;
        var current = this.root;
        var nodeCheck = function (node) {
            if (node.value === current.value)
                return undefined;
            var direction = node.value > current.value ? current.right : current.left;
            if (direction) {
                current = direction;
                return nodeCheck(node);
            }
            if (node.value > current.value)
                return current.right = node;
            else
                return current.left = node;
        };
        nodeCheck(newNode);
        return this;
    };
    BinarySearchTree.prototype.find = function (val) {
        if (!this.root)
            return false;
        var current = this.root;
        var newNode = new BinaryNode(val);
        var nodeCheck = function (node) {
            if (node.value === current.value)
                return true;
            var direction = node.value > current.value ? current.right : current.left;
            if (direction) {
                current = direction;
                return nodeCheck(node);
            }
            return false;
        };
        return !!nodeCheck(newNode);
    };
    BinarySearchTree.prototype.bfs = function () {
        var queue = [];
        var data = [];
        var current = this.root;
        var nodeBreadth = function (node) {
            if (!queue.length)
                return data;
            node = queue.shift();
            data.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            return nodeBreadth(queue[0]);
        };
        queue.push(current);
        nodeBreadth(current);
        return console.log(data);
    };
    BinarySearchTree.prototype.dfsPreOrder = function () {
        var data = [];
        var traverse = function (node) {
            data.push(node.value);
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
        };
        traverse(this.root);
        return console.log(data);
    };
    BinarySearchTree.prototype.dfsPostOrder = function () {
        var data = [];
        var traverse = function (node) {
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
            data.push(node.value);
        };
        traverse(this.root);
        return console.log(data);
    };
    BinarySearchTree.prototype.dfsInOrder = function () {
        var data = [];
        var traverse = function (node) {
            if (node.left)
                traverse(node.left);
            data.push(node.value);
            if (node.right)
                traverse(node.right);
        };
        traverse(this.root);
        return console.log(data);
    };
    return BinarySearchTree;
}());
var bts = new BinarySearchTree();
bts.insert(5);
bts.insert(2);
bts.insert(9);
bts.insert(10);
bts.insert(3);
bts.insert(4);
bts.insert(1);
bts.insert(22);
//      5
//    2   9
//  1  3    10
//      4     22
var MaxBinaryHeap = /** @class */ (function () {
    function MaxBinaryHeap() {
        this.values = [];
    }
    MaxBinaryHeap.prototype.insert = function (val) {
        this.values.push(val);
        if (this.values.length === 1)
            return this.values;
        var compare = function (index, arr) {
            var parentIndex = Math.floor((index - 1) / 2);
            if (parentIndex === -1)
                return arr;
            if (arr[parentIndex] < arr[index]) {
                var temp = arr[parentIndex];
                arr[parentIndex] = arr[index];
                arr[index] = temp;
            }
            return compare(parentIndex, arr);
        };
        compare(this.values.length - 1, this.values);
        return this.values;
    };
    MaxBinaryHeap.prototype.extractMax = function () {
        var _this = this;
        if (!this.values.length)
            return undefined;
        var lastIndex = this.values.length - 1;
        this.values[0] = this.values[lastIndex];
        this.values.pop();
        if (!this.values.length)
            return [];
        var swap = function (index) {
            if (index === -1)
                return;
            var leftChild = Math.floor((index * 2) + 1);
            var rightChild = leftChild + 1;
            if (!_this.values[leftChild] && !_this.values[rightChild])
                return;
            var greaterValue = _this.values[leftChild] > _this.values[rightChild] ? leftChild : rightChild;
            if (_this.values[index] < _this.values[greaterValue]) {
                var temp = _this.values[index];
                _this.values[index] = _this.values[greaterValue];
                _this.values[greaterValue] = temp;
                swap(greaterValue);
            }
        };
        swap(0);
        return this.values;
    };
    return MaxBinaryHeap;
}());
//       99
//     39   33
//   29 12  18 27
// 20
//       39
//     29   33
//   20 12  18 27
var PriorityNode = /** @class */ (function () {
    function PriorityNode(val, priority) {
        this.value = val;
        this.priority = priority;
    }
    return PriorityNode;
}());
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.values = [];
    }
    PriorityQueue.prototype.enqueue = function (val, priority) {
        var newNode = new PriorityNode(val, priority);
        this.values.push(newNode);
        if (this.values.length === 1)
            return this.values;
        var compare = function (index, arr) {
            var parentIndex = Math.floor((index - 1) / 2);
            if (parentIndex === -1)
                return arr;
            if (arr[parentIndex].priority > arr[index].priority) {
                var temp = arr[parentIndex];
                arr[parentIndex] = arr[index];
                arr[index] = temp;
            }
            return compare(parentIndex, arr);
        };
        compare(this.values.length - 1, this.values);
        return this.values;
    };
    PriorityQueue.prototype.dequeue = function () {
        var _this = this;
        if (!this.values.length)
            return undefined;
        var lastIndex = this.values.length - 1;
        this.values[0] = this.values[lastIndex];
        var value = this.values.pop();
        if (!this.values.length)
            return [];
        var swap = function (index) {
            if (index === -1)
                return;
            var leftChild = Math.floor((index * 2) + 1);
            var rightChild = leftChild + 1;
            if (!_this.values[leftChild] && !_this.values[rightChild])
                return;
            var greaterValue = _this.values[leftChild] > _this.values[rightChild] ? leftChild : rightChild;
            if (_this.values[index].priority > _this.values[greaterValue].priority) {
                var temp = _this.values[index];
                _this.values[index] = _this.values[greaterValue];
                _this.values[greaterValue] = temp;
                swap(greaterValue);
            }
        };
        swap(0);
        return value;
        ;
    };
    return PriorityQueue;
}());
var HashTable = /** @class */ (function () {
    function HashTable(size) {
        if (size === void 0) { size = 53; }
        this.keyMap = new Array(size);
    }
    HashTable.prototype._hash = function (key) {
        var total = 0;
        var WEIRD_PRIME = 31;
        for (var i = 0; i < Math.min(key.length, 100); i++) {
            var char = key[i];
            var value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    };
    HashTable.prototype.set = function (key, val) {
        var hashedIndex = this._hash(key);
        if (!this.keyMap[hashedIndex]) {
            this.keyMap[hashedIndex] = [];
        }
        var test = [key, val];
        this.keyMap[hashedIndex].push(test);
        return this.keyMap;
    };
    HashTable.prototype.get = function (key) {
        var hashedIndex = this._hash(key);
        return this.keyMap[hashedIndex];
    };
    return HashTable;
}());
var hashTable = new HashTable();
hashTable.set('test', 104654);
hashTable.set('a', 104654);
hashTable.set('a', 104658884);
hashTable.set('c', 104654);
var Graph = /** @class */ (function () {
    function Graph() {
        this.adjacencyList = {};
    }
    Graph.prototype.addVertex = function (vertex) {
        if (this.adjacencyList[vertex])
            return console.error('Existing vertex');
        this.adjacencyList[vertex] = [];
    };
    Graph.prototype.addEdge = function (vertexOne, vertexTwo) {
        this.adjacencyList[vertexOne].push(vertexTwo);
        this.adjacencyList[vertexTwo].push(vertexOne);
    };
    Graph.prototype.removeEdge = function (v1, v2) {
        this.adjacencyList[v1].filter(function (edge) { return edge !== v2; });
        this.adjacencyList[v2].filter(function (edge) { return edge !== v1; });
    };
    Graph.prototype.removeVertex = function (v) {
        for (var key in this.adjacencyList) {
            this.removeEdge(v, this.adjacencyList[key]);
        }
        delete this.adjacencyList[v];
    };
    Graph.prototype.DFSRecursive = function (vertex) {
        var _this = this;
        if (!vertex)
            return;
        var result = [];
        var visited = {};
        var dfs = function (v) {
            if (!v)
                return null;
            visited[v] = true;
            result.push(v);
            for (var key in _this.adjacencyList[v]) {
                if (!visited[key]) {
                    return dfs(key);
                }
            }
        };
        dfs(vertex);
        return result;
    };
    Graph.prototype.DFSIterative = function (start) {
        var result = [];
        var stack = [start];
        var visited = {};
        visited[start] = true;
        var currentVertex;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            for (var _i = 0, _a = this.adjacencyList[currentVertex]; _i < _a.length; _i++) {
                var item = _a[_i];
                if (!visited[item]) {
                    visited[item] = true;
                    stack.push(item);
                }
            }
        }
        return stack;
    };
    Graph.prototype.BFS = function (start) {
        var visited = {};
        visited[start] = true;
        var queue = [start];
        var result = [];
        var currentVertex;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            for (var _i = 0, _a = this.adjacencyList[currentVertex]; _i < _a.length; _i++) {
                var item = _a[_i];
                if (!visited[item]) {
                    visited[item] = true;
                    queue.push(item);
                }
            }
        }
        return result;
    };
    return Graph;
}());
var g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
console.log(g.BFS('A'));
