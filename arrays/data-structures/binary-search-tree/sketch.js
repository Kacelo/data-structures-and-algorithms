
// Daniel Shiffman
// Nature of Code: Intelligence and Learning
// https://github.com/shiffman/NOC-S17-2-Intelligence-Learning

let insertValue = document.getElementById("insertValue");
let insertButton = document.getElementById("insertButton")
const removeButton = document.getElementById("removeButton") 
const removeValue = document.getElementById("removeValue");
const searchValue = document.getElementById("searchValue");
const searchButton = document.getElementById("searchButton")
const printInOrder = document.getElementById("printInOrder")
const printPostOrder = document.getElementById("printPostOrder")
const findMinNodeButton = document.getElementById("findMinNodeButton")
const displayRes = document.getElementById("result")
// Tree object
function Tree() {
    // Just store the root
    this.root = null;
  }
  
  // Start by visiting the root
  Tree.prototype.traverse = function() {
    this.root.visit(this.root);
  }
  
  // Start by searching the root
  Tree.prototype.search = function(val) {
    var found = this.root.search(val);
    return found;
  }
  
  // Add a new value to the tree
  Tree.prototype.addValue = function(val) {
    var n = new Node(val);
    if (this.root == null) {
      this.root = n;
      // An initial position for the root node
      this.root.x = width / 2;
      this.root.y = 16;
    } else {
      this.root.addNode(n);
    }
  }

  // Method to remove node with a
// given data
// it recur over the tree to find the
// data and removes it
Tree.prototype.removeNode = function(node, key)
{
         
    // if the root is null then tree is
    // empty
    if(node === null)
        return null;
 
    // if data to be delete is less than
    // roots data then move to left subtree
    else if(key < node.data)
    {
        node.left = this.removeNode(node.left, key);
        return node;
    }
 
    // if data to be delete is greater than
    // roots data then move to right subtree
    else if(key > node.data)
    {
        node.right = this.removeNode(node.right, key);
        return node;
    }
 
    // if data is similar to the root's data
    // then delete this node
    else
    {
         // deleting node with no children
        if(node.left === null && node.right === null)
        {
            node = null;
            return node;
        }
 
        // deleting node with one children
        if(node.left === null)
        {
            node = node.right;
            return node;
        }
         
        else if(node.right === null)
        {
            node = node.left;
            return node;
        }
 
        // Deleting node with two children
        // minimum node of the right subtree
        // is stored in aux
        var aux = this.findMinNode(node.right);
        node.data = aux.data;
 
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
 
}     
  // Daniel Shiffman
  // Nature of Code: Intelligence and Learning
  // https://github.com/shiffman/NOC-S17-2-Intelligence-Learning
  
  // Binary tree
  var tree;
  
  
  function setup() {
    createCanvas(800, 600);
  
    // New tree
    tree = new Tree();
  
    // Add ten random values
    for (var i = 0; i < 5; i++) {
      tree.addValue(floor(random(0, 100)));
    }


    insertButton.addEventListener("click", ()=>{
        // displayRes.replaceChildren();
        tree.addValue(insertValue.value)
      
       
        console.log(insertValue.value)
        tree.traverse();
        insertValue.value ="";
    })
  
   
    
  
    background(255);
  
    // Traverse the tree
    tree.traverse();
  
    // Search the tree for 10
    searchButton.addEventListener("click", ()=>{
        var result = tree.search(searchValue.value);
        if (result == null) {
            displayRes.innerHTML += `node has not been found`;
        } else {
          console.log(result.value);
          displayRes.innerHTML += `${result.value} has been found`;

          
        }
    })
 
  }
  
  // Daniel Shiffman
  // Nature of Code: Intelligence and Learning
  // https://github.com/shiffman/NOC-S17-2-Intelligence-Learning
  
  // Node in the tree
  function Node(val, x, y) {
    this.value = val;
    this.left = null;
    this.right = null;
    // How far apart should the children nodes be
    // This will be based on "level" in the tree
    this.distance = 2;
    // Now has a an xy position
    this.x = x;
    this.y = y;
  }
  
  // Search the tree for a value
  Node.prototype.search = function(val) {
    if (this.value == val) {
      return this;
    } else if (val < this.value && this.left != null) {
      return this.left.search(val);
    } else if (val > this.value && this.right != null) {
      return this.right.search(val);
    }
    return null;
  }
  
  Node.prototype.visit = function(parent) {
    // Recursively go left
    if (this.left != null) {
      this.left.visit(this);
    }
    // Print out the value
    console.log(this.value);
  
    // Draw a line from the parent
    stroke(100);
    line(parent.x, parent.y, this.x, this.y);
    // Draw a circle
    stroke(255);
    fill(map(this.value,0,100,0,255),100,100);
    ellipse(this.x, this.y, 24, 24);
    noStroke();
    // Display the value
    fill(255);
    textAlign(CENTER);
    textSize(12);
    text(this.value, this.x, this.y + 4);
  
    // Go right
    if (this.right != null) {
      this.right.visit(this);
    }
  }
  
  // Add a new Node
  Node.prototype.addNode = function(n) {
    // If it's less go left
    if (n.value < this.value) {
      // Is there nothing there? Place the node
      if (this.left == null) {
        this.left = n;
        // Exponentially shrink the distance between nodes for each level
        this.left.x = this.x - (width / pow(2, n.distance));
        this.left.y = this.y + (height / 12);
      // Keep going!
      } else {
        n.distance++;
        this.left.addNode(n)
      }
      // If it's more go right
    } else if (n.value > this.value) {
      // Is there nothing there? Place the node
      if (this.right == null) {
        this.right = n;
        this.right.x = this.x + (width / pow(2, n.distance));
        this.right.y = this.y + (height / 12);
      // Keep going!
      } else {
        n.distance++;
        this.right.addNode(n);
      }
    }
  }




