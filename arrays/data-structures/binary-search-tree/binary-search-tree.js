// buttons and input fields
const insertValue = document.getElementById("insertValue");
let insertButton = document.getElementById("insertButton")
const removeButton = document.getElementById("removeButton") 
const removeValue = document.getElementById("removeValue");
const serchValue = document.getElementById("serchValue");
const searchButton = document.getElementById("searchButton")
const printInOrder = document.getElementById("printInOrder")
const printPostOrder = document.getElementById("printPostOrder")
const findMinNodeButton = document.getElementById("findMinNodeButton")
const displayRes = document.getElementById("level1")
const displayRes2 = document.getElementById("level2")
const rootNode = document.getElementById("rootNode");
// Node class
class Node
{
    constructor(data, x, y)
    {
        this.data = data;
        this.left = null;
        this.right = null;
        this.x = x;
        this.y = y;
    }
}

class BinarySearchTree
{
    constructor()
    {
        // root of a binary search tree
        this.root = null;
    }

    visit(node){
        if (node.left != null) {
            node.left.visit(this);
          }
          console.log("FROm VISIT",this.data);
          fill(255);
          noStroke();
          textAlign(CENTER);
          text(this.getRootNode(), 3, 20, 20);
          stroke(255);
          noFill();
          ellipse(2, 3, 20, 20);
          line(2, 3, 20, 20);
          if (node.right != null) {
            node.right.visit(this);
          }
         
    }
 
    // function to be implemented
    // insert(data)
    // helper method which creates a new node to
// be inserted and calls insertNode
insert(data)
{
    // Creating a node and initialising
    // with data
    var newNode = new Node(data);
                     
    // root is null then node will
    // be added to the tree and made root.
    if(this.root === null)
       { this.root = newNode;
        this.root.x = 2;
        this.root.y = 16

      
    }
    else
 
        // find the correct position in the
        // tree and add the node
        this.insertNode(this.root, newNode);
}
// Method to insert a node in a tree
// it moves over the tree to find the location
// to insert a node with a given data
insertNode(node, newNode)
{
    // if the data is less than the node
    // data move left of the tree
    if(newNode.data < node.data)
    {
        // if left is null insert node here
        if(node.left === null)
          {  node.left = newNode;
            node.left.x = this.x -50
            node.left.y = this.y + 20}
        else
 
            // if left is not null recur until
            // null is found
            this.insertNode(node.left, newNode);
            // fill(255)
            // noStroke();
            
            console.log(`${node.left.data} inserted to the left of ${node.data}`)
            console.log(` ${node.data}`)
            displayRes.innerHTML += `${node.left.data} inserted to the left of ${node.data}    `;
    }
 
    // if the data is more than the node
    // data move right of the tree
    else if(newNode.data > node.data)
    {
        // if right is null insert node here
        if(node.right === null)
           { node.right = newNode;
            node.right.x = this.x +50
            node.right.y = this.y + 20}
        else
 
            // if right is not null recur until
            // null is found
            this.insertNode(node.right,newNode);
            console.log(`${node.right.data} inserted to the right of ${node.data}`)
            displayRes.innerHTML += `${node.right.data} inserted to the right of ${node.data},   `
    }
    

}
    // remove(data)
            // helper method that calls the
// removeNode with a given data
remove(data)
{
    // root is re-initialized with
    // root of a modified tree.
    this.root = this.removeNode(this.root, data);
}
 
// Method to remove node with a
// given data
// it recur over the tree to find the
// data and removes it
removeNode(node, key)
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

 
    // Helper function



    // findMinNode()
    //  finds the minimum node in tree
// searching starts from given node
findMinNode(node)
{
    // if left of a node is null
    // then it must be minimum node
    if(node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
}

traverse(){
    console.log("ROOOOOT",this.getRootNode())
    this.visit(this.getRootNode())
    
}
// console.log("ROOOOOT",this.getRootNode())

    // getRootNode()
    // returns root of the tree
getRootNode()
{
    console.log("Root node",this.root.data)
    rootNode.innerHTML += `${this.root.data}`;
    return this.root.data;
}
    // inorder(node)
        // Performs inorder traversal of a tree
inorder(node)
{
    if(node !== null)
    {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
}
    // preorder(node)   
    // Performs preorder traversal of a tree   
preorder(node)
{
    if(node !== null)
    {
    //     console.log(node.data);
    //    let preLeft = (node.right);
    //     this.preorder(node.right);
        // fill(255)
    // console.log("FROm VISIT",node);
    fill(255);
    noStroke();
    textAlign(CENTER);
    text(this.getRootNode(), 50, 20, 40);
    stroke(255);
    noFill();
    ellipse(this.getRootNode(), this.getRootNode(), 20, 20);
    line(this.getRootNode(), 3, 20, 20);
        // displayRes2.innerHTML += ` ${preLeft}`
    }

} 
              
    // postorder(node)
    // Performs postorder traversal of a tree
postorder(node)
{
    if(node !== null)
    {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data);
    }
}


    // search(node, data)
    // search for a node with given data
search(node, data)
{
   // if trees is empty return null
    if(node === null)
        return null;
 
    // if data is less than node's data
    // move left
    else if(data < node.data){

        console.log(`found number, ${node.left.data}`)
        return this.search(node.left, data);
    }
    
 
    // if data is less than node's data
    // move left
    else if(data > node.data)
   { console.log(`found number, ${node.right.data}`)
   return this.search(node.right, data);}

    // if data is equal to the node data
    // return node
    else
    console.log("found number", {node})
        return node;
}

}
const BST = new BinarySearchTree();

insertButton.addEventListener("click", ()=>{
    // displayRes.replaceChildren();
    if(insertValue.value){
        BST.insert(insertValue.value)
   
        console.log(insertValue.value)
        insertValue.value ="";
    }
    else if(insertValue.value===""){
        displayRes.innerHTML += `Error! please enter a number`
    }
   
})
// removeButton.addEventListener("click", ()=>{
//     BST.insert(insertValue.value)
//     console.log(insertValue.value)
// })

// for (var i = 0; i < 5; i++ ){
//     BST.insert(Math.floor(Math.random()*5))
// }
// BST.insert(11);
// BST.insert(2);

var root = BST.getRootNode();
             
// prints 5 7 9 10 13 15 17 22 25 27
// BST.preorder(root);
BST.search(root, 4);
// BST.insert(6);
// BST.insert(66);
// BST.insert(12);
// BST.insert(29);


