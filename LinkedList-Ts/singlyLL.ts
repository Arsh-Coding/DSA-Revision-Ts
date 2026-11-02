class Node {
    data : Number;
    next : Node | null;

    constructor(data: number){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head : Node | null;

    constructor() {
        this.head = null;
    }

    append(data:number ): void {
        const newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
            return;
        }

        let current: Node = this.head;
        while(current.next !== null){
            current = current.next;
        }

        current.next = newNode;
    }

    prepend(data:number): void {
        const newNode = new Node(data);
        
        newNode.next = this.head;
        this.head = newNode;
    }
    
    delete(data:number): void{
        if (this.head === null) {
            return;
        }
        
        // Case 1: The node to delete is the head
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        
        let current: Node = this.head;
        while(current.next !== null){
            if(current.data === data){
                console.log("check + ",current.data);
                current = current.next;
                return;   
            }
            current = current.next;
        }
    }

    search(data: number): number{
        let count = 1;
        if(this.head === null){
            return 0;
        }
        let current: Node | null = this.head;
        if(current.data === data){
            return count;
        }
        while(current !== null){
            if (current.data === data) {
                return count;
            }

            count++;
            current = current.next;
        }
        return 0;
    }

    reverse(): void{
        let prev: Node | null = null;
        let current: Node | null = this.head;
        let next: Node | null = null;
        if(this.head === null){
            return;
        }
        while(current !== null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next; 
        }
        this.head = prev;
    }

    print(): void {
        let current = this.head;
        let i = 0;
        let arr = [];
        while(current !== null){
            arr[i++] = current.data;
            current = current.next;
        }
        console.log(arr);
    }
}


const node1 = new Node(10);
const node2 = new Node(20);
const list = new LinkedList();
list.append(30)
list.append(40)
list.append(50)
list.prepend(20)
// list.delete(30);
console.log(list.search(50));
list.reverse();
list.print();

node1.next = node2;

console.log(node1.data);
console.log(node1.next.data);
