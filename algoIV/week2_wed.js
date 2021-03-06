<script>

function btNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;
    this.add = function(newNode) {
        if(this.val > newNode.val){

            if(this.left){              //left
                this.left.add(newNode);
            } else {
                this.left = newNode;
            } 
        } else {

            if(this.right){            // right
                this.right.add(newNode);
            } else {
                this.right = newNode;
            } 
        }
        return this;
    }
}
    
function bst() {
    this.root = null;
    this.add = function(val) {
        let newNode = new btNode(val);
        if(this.root){
            this.root.add(newNode);
        } else {
            this.root = newNode;
        }
        return this;
    }
    
    this.traverse = function(val){ 
        if(this.root){
            recurse(this.root)
            // newNode = new btNode(val);
            // return this.root = newNode;
        }

        function recurse(node){
            console.log("recurse");
            if(node.left){
                recurse(node.left);
            }
            if(node.right){
                recurse(node.right);
            }
        }

    }

}
    
let bstObject = new bst();

// bstObject.traverse(10);
bstObject.add(10);
bstObject.add(5);
bstObject.add(9);bstObject.add(25);
    

</script>