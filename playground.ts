function charCount(string: string): {} | void {
    if (typeof string  !== 'string') return console.error("Data type needs to be of string");
    const charObject = {};

    for (const char of string) {
        if (/[A-Za-z]/.test(char)) {
            charObject[char] = ++charObject[char] | 1;
        }
    }
    
    return charObject
}


// Write a function that checks 2 arrays and compares if array b contains the squared number of array a
// Inputs 2 array data types of type number
// Output boolean  only true if this is truthy for every index in array a
//  Can we be sure that array a is always the non squared number?
// If not we will need a way to determine which has the lower value order does not matter
// Need to check array is the same length

function same(arrayA: number[], arrayB: number[]) {
    if (arrayA.length !== arrayB.length) return false;

    const objectA = {};
    const objectB = {};

    for (let val of arrayA) {
        console.log('val', val)
        console.log('object', objectA)
        console.log((objectA[val] | 0) )
        objectA[val] = (objectA[val] | 0) + 1;
    }
    if (5 in objectB) {

    }
    console.log(objectA)
}


// Create an anagram  Which is comparing 2 strings with the same number of letters. To check if 
// they both contain the same letters
// We will check the size first to make sure they are both the same
// Then we can use frequency pattern to convert each string to a key value object then loop through
// and make sure every key in objectA exists in objectB if so return true else false
// also convert to lowercase()
// This will be O(n) complexity
function convertStrToObject(data: string): Record<string, number> {
    const obj = {};
    const string = data.toLowerCase();

    for (const char of string) {
        obj[char] = (obj[char] | 0) + 1;
    }

    return obj;
}

function anagram(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    const object1 = convertStrToObject(str1);
    const object2 = convertStrToObject(str2);

    for (const key in object1) {
        if (!(key in object2)) return false;

        if (object2[key] !== object1[key]) return false;
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

function countUniqueValues(array: number[]): number {
    let i = 0;

   for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
        i++;
        array[i] = array[j]
    }
   }

    return i + 1;
}


/*
    Create an algorithm that will takes in an array
    This array will calculate the max sum of n index based on the second input
    It will return a single number 
*/

function maxSubarraySum(array: number[], num: number): number {
    if (num > array.length) return null;

    

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

function convertNumToObj(num: number[]): Record<number, number> {
    const obj = {};
    
    for (const val of num) {
        obj[val] = (obj[val] | 0) + 1;    
    }
    
    return obj;
}

function areThereDuplicates(array: number[]) {
    const obj = convertNumToObj(array);

    for (const key in obj) {
        if (obj[key] > 1) return true;
    }

    return false;
}

const factorial = (num: number) => {
    if (num === 1) return 1;

    return recursiveFactorial(num)
}

const recursiveFactorial = (num: number) => {
    if (num === 0) return 1;
    console.log(num)
    return num * recursiveFactorial(num - 1)
}

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function productOfArray(array: number[]) {
    if (!array.length) return 0;
    let start = 0
    const recursiveTotal = (num: number[]) => {
        if (num.length === 0) return 1;
        const test = num.splice(0)
        console.log(test)
        return start + recursiveTotal(num.splice(0) ?? [])
    }

    
    return recursiveTotal(array)
}


function binarySearch(arr: number[], element: number) {
    if (!arr.length) return false;

    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    
    while(arr[middle] !== element && start <= end){
        if (element > arr[middle]) start = middle + 1;
        else end = middle - 1;

        middle = Math.floor((start + end) / 2);
    }

     if (arr[middle] === element) {
        return middle
     };

     return -1
}

function naiveStr(str: string, compare: string) {
    console.log('here')
    const objStr = convertStrToObj(str)
    const objComp = convertStrToObj(compare)
    let total = 0;

    for (const key in objStr) {
        if (objStr[key] === objComp[key]) total++
    }

    console.log(total)
}

function convertStrToObj(str: string) {
    const obj = {};

    for (const char of str) {
        obj[char] = (obj[char] | 0) + 1;
    }
    console.log(obj)
    return obj;
}

//  Sorting

function bubbleSort(arr: number[]) {

    for (let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    console.log(arr)
}
// i = 9
// j = 9


function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        let minValue = i;
        for (let j = i + 1; j < arr.length; j++) {
           if (arr[minValue] > arr[j]) {
                minValue = j
           }
        }

        if (i !== minValue) {
            swap(arr, i, minValue)
        }
    }

    return arr;
}

function swap(arr: number[], idx1: number, idx2: number ) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2]
    arr[idx2] = temp;
}


// [9,6,5,2,10]

class TestNode<T> {
    val: T;
    next: TestNode<T> | null

    constructor(val: T){
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList<T> {
    length = 0;
    head?: TestNode<T>;
    tail?: TestNode<T>;
    constructor() {    }

    push(val: T) {
        const newNode = new TestNode(val )
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        this.length++;

        return this
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;
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
    }

    shift() {
        if (!this.head) return undefined;

        let current = this.head;
        this.head = current.next;
        current.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return current;
    }

    unshift(val:T) {
        const newHead = new TestNode(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }


        this.length++;

        return this;
    }

    get(index: number) {
        if (index < 0 || index >= this.length) return undefined;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current
    }

    set(val: T, position: number) {
        let node = this.get(position);

        if (!node) return false;

        node.val = val;
        
        return true;
    }

    insert(position: number, val: T) {
        console.log(position > this.length)
        if (position < 0 || position > this.length) return false;

        if (position === 0) return this.unshift(val);

        if (position === this.length) return this.push(val);

        const previousNode = this.get(position - 1);
            const temp = previousNode.next;
            const newNode =  new TestNode(val);

            previousNode.next = newNode;
            newNode.next = temp;
            this.length++;

            return true;
            
    }
}

class NodeTest<T> {
    public val: T;
    public next: NodeTest<T> | null;
    public prev: NodeTest<T> | null;
    
    constructor(value: T){
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkList<T> {
    public head: NodeTest<T>;
    public tail: NodeTest<T>;
    public length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: T) {
        const newNode = new NodeTest(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;

        return this
    }

    pop() {
        if (!this.head) return false;
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {  
            let oldTail = this.tail;
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }

        this.length--;

        return this;
    }

    shift() {
        if (!this.head) return false;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const nextNode = this.head.next;
            this.head.next = null;
            this.head = nextNode;
            this.head.prev = null;
        }

        this.length--;

        return this;
    }

    unshift(val: T) {
        const newNode = new NodeTest(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            this.head.prev = null;
        }

        this.length++;

        return this;
    }

    get(index: number) {
        if (index < 0 || index >= this.length) return false;

        const midPoint = Math.floor(this.length / 2);
        let count = 0;
        let current = this.head;
        if (index <= midPoint) {
            while (count != index) {
                current = current.next;
                count++;
            }
        } else {
            current = this.tail
            count = this.length - 1;
            while (count != index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index: number, val: T) {
        const foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val
            return true;
        }

        return false;
    }

    insert(index: number, val: T) {
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val);

        const foundNode = this.get(index - 1);

        if (foundNode) {
            const newNode = new NodeTest(val);
            const previousNode = foundNode.prev;
            previousNode.next = newNode;
            newNode.prev = previousNode;
            foundNode.prev = newNode;
            newNode.next = foundNode;

            return true;
        }

        return false;
    }
}

class NodeListClass<T> {
    public value: T;
    public next: NodeListClass<T> | null;

    constructor(val: T) {
        this.value = val
    }
}

class Stack<T> {
    public first: NodeListClass<T> | null;
    public last: NodeListClass<T> | null;
    public size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val: T) {
        const newNode = new NodeListClass(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this.size++;
        return this;
    }

    pop() {
        if (!this.first) return null;
        if (this.first === this.last) {
            this.last = null;
        }

        const temp = this.first.next;
        this.first.next = null;
        this.first = temp;


        this.size--;

        return this;
    }
}

class Queue<T> {
    public first: NodeListClass<T> | null;
    public last: NodeListClass<T> | null;
    public size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val: T) {
        const newNode = new NodeListClass(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        if (this.first === this.last) {
            this.last = null;
        }

        const temp = this.first;
        const newFirst = this.first.next;

        this.first.next = null;
        this.first = newFirst;

        this.size--;

        return temp;
    }
}


class BinaryNode<T> {
    public value: T;
    public left: BinaryNode<T>  | null;
    public right: BinaryNode<T> | null;

    constructor(val: T) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree<T> {
    public root: BinaryNode<T>  | null;

    constructor() {
        this.root = null;
    }

    insert(val: T) {
        const newNode = new BinaryNode(val);
        if (!this.root) return this.root = newNode;

        let current = this.root;
        const nodeCheck = (node: BinaryNode<T>): BinaryNode<T> | null => {
            if (node.value === current.value) return undefined;

            let direction = node.value > current.value ? current.right : current.left
            if (direction) {
                current = direction;
                return nodeCheck(node);
            }

            if (node.value > current.value) return current.right = node;
            else return current.left = node;
        }

        nodeCheck(newNode);

        return this;
    }

    find(val: T) {
        if (!this.root) return false;

        let current = this.root;
        const newNode = new BinaryNode(val);
        const nodeCheck = (node: BinaryNode<T>): boolean => {
            if (node.value === current.value) return true;

            let direction = node.value > current.value ? current.right : current.left;
            if (direction) {
                current = direction;
                return nodeCheck(node);
            }

            return false;
        }

        return !!nodeCheck(newNode)
    }
    bfs() {
        const queue = [];
        const data = [];
        let current = this.root;
        const nodeBreadth  = (node: BinaryNode<T>) => {
            if (!queue.length) return data;

            node = queue.shift();
            data.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }

            return nodeBreadth(queue[0])

        }

        queue.push(current);
        nodeBreadth(current);

        return console.log(data)
    }
    dfsPreOrder() {
        const data = [];

        const traverse = (node: BinaryNode<T>) => {
            data.push(node.value);    
            if (node.left) traverse(node.left);
    
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return console.log(data)

    }
    dfsPostOrder() {
        const data = [];

        const traverse = (node: BinaryNode<T>) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);

            data.push(node.value);
        }

        traverse(this.root);

        return console.log(data);
        
    }

    dfsInOrder() {
        const data = [];

        const traverse = (node: BinaryNode<T>) => {
            
            if (node.left) traverse(node.left);
            data.push(node.value);

            if (node.right) traverse(node.right)
        }

        traverse(this.root);

        return console.log(data);
    }
}

const bts = new BinarySearchTree();

bts.insert(5)
bts.insert(2)
bts.insert(9)
bts.insert(10)
bts.insert(3)
bts.insert(4)
bts.insert(1)
bts.insert(22)


//      5
//    2   9
//  1  3    10
//      4     22

class MaxBinaryHeap<T> {
    public values: T[]

    constructor() {
        this.values = [];
    }

    insert(val: T) {
        this.values.push(val);

        if (this.values.length === 1) return this.values;

        const compare = (index: number, arr: T[]) =>  {
            const parentIndex = Math.floor((index - 1) / 2);
            if (parentIndex === -1) return arr;

            if (arr[parentIndex] < arr[index]) {
                const temp = arr[parentIndex];
                arr[parentIndex] = arr[index];
                arr[index] = temp;
            }
    
            return compare(parentIndex, arr);
        }
        

        compare(this.values.length - 1, this.values)

        return this.values;
    }

    extractMax() {
        if (!this.values.length) return undefined;

        const lastIndex = this.values.length - 1;

        this.values[0] = this.values[lastIndex];
        this.values.pop();

        if (!this.values.length) return []

        const swap = (index: number) => {
            if (index === -1) return;

            const leftChild = Math.floor((index * 2) + 1);
            const rightChild = leftChild + 1;

            if (!this.values[leftChild] && !this.values[rightChild]) return;

            const greaterValue = this.values[leftChild] > this.values[rightChild] ? leftChild : rightChild

            if (this.values[index] < this.values[greaterValue]) {
                const temp = this.values[index];
                this.values[index] = this.values[greaterValue];
                this.values[greaterValue] = temp;

                swap(greaterValue);
            }
        }

        swap(0);
        return this.values;
    }
}


//       99
//     39   33
//   29 12  18 27
// 20

//       39
//     29   33
//   20 12  18 27


class PriorityNode<T> {
    public value: T;
    public priority: number | null;

    constructor(val: T, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue<T> {
    public values: PriorityNode<T>[]

    constructor() {
        this.values = [];
    }

    enqueue(val: T, priority: number) {
        const newNode = new PriorityNode(val, priority)
        this.values.push(newNode);

        if (this.values.length === 1) return this.values;

        const compare = (index: number, arr: PriorityNode<T>[]) =>  {
            const parentIndex = Math.floor((index - 1) / 2);
            if (parentIndex === -1) return arr;

            if (arr[parentIndex].priority > arr[index].priority) {
                const temp = arr[parentIndex];
                arr[parentIndex] = arr[index];
                arr[index] = temp;
            }
    
            return compare(parentIndex, arr);
        }
        

        compare(this.values.length - 1, this.values)

        return this.values;
    }

    dequeue() {
        if (!this.values.length) return undefined;

        const lastIndex = this.values.length - 1;

        this.values[0] = this.values[lastIndex];
        const value = this.values.pop();

        if (!this.values.length) return []

        const swap = (index: number) => {
            if (index === -1) return;

            const leftChild = Math.floor((index * 2) + 1);
            const rightChild = leftChild + 1;

            if (!this.values[leftChild] && !this.values[rightChild]) return;

            const greaterValue = this.values[leftChild] > this.values[rightChild] ? leftChild : rightChild

            if (this.values[index].priority > this.values[greaterValue].priority) {
                const temp = this.values[index];
                this.values[index] = this.values[greaterValue];
                this.values[greaterValue] = temp;

                swap(greaterValue);
            }
        }

        swap(0);
        return value;;
    }
}



class HashTable<T> {
    public keyMap:  (string | T)[][][];
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key: string) {
        let total = 0;
        const WEIRD_PRIME = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key: string, val: T) {
        const hashedIndex = this._hash(key);
        if (!this.keyMap[hashedIndex]) {
            this.keyMap[hashedIndex] = [];
        }
        const test = [key, val]
        this.keyMap[hashedIndex].push(test); 

        return this.keyMap;
    }

    get(key: string) {
        const hashedIndex = this._hash(key);

        return this.keyMap[hashedIndex]
    }
}

const hashTable = new HashTable();
hashTable.set('test', 104654);
hashTable.set('a', 104654);
hashTable.set('a', 104658884);
hashTable.set('c', 104654);


class Graph<T> {
    public adjacencyList;

    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex: T) {
        if (this.adjacencyList[vertex]) return console.error('Existing vertex');
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertexOne: T, vertexTwo: T) {
        this.adjacencyList[vertexOne].push(vertexTwo);
        this.adjacencyList[vertexTwo].push(vertexOne);
    }

    removeEdge(v1: T, v2: T) {
       this.adjacencyList[v1].filter((edge: T) => edge !== v2);
       this.adjacencyList[v2].filter((edge: T) => edge !== v1);
    }

    removeVertex(v: T) {
        for (const key in this.adjacencyList) {
            this.removeEdge(v, this.adjacencyList[key]);           
        }

        delete this.adjacencyList[v];
    }
    DFSRecursive(vertex: T) {
        if (!vertex) return 
        const result = [];
        const visited = {};

        const dfs = (v: string) => {
            if (!v) return null;

            visited[v] = true;
            result.push(v);

            for (const key in this.adjacencyList[v]) {
                if (!visited[key]) {
                    return dfs(key)
                }
            }
        }

        dfs(vertex as string)

        return result;
    }
    DFSIterative(start: T) {
        const result = []
        const stack = [start];
        const visited = {};

        visited[start as string] = true;
        let currentVertex;

        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex)

            for (const item of this.adjacencyList[currentVertex]) {
                if (!visited[item]) {
                    visited[item] = true;
                    stack.push(item)
                }
            }
        }

        return stack;
    }
    BFS(start: string) {
        const visited = {};
        visited[start] = true;
        
        const queue = [start];
        const result = [];
        let currentVertex;
        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            for (const item of this.adjacencyList[currentVertex]) {
                if (!visited[item]) {
                    visited[item] = true;
                    queue.push(item);
                }
            }
        }

        return result;
    }
}

const g = new Graph();

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









