import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public commonSetOperations = [
        'Accessing an element',
        'Inserting an element',
        'Removing an element'
    ];

    // Array List
    public arrayListSorted = false;
    public arrayListSizeStored = true;
    public kthSelectionAlgorithms = [
        'Random',
        'Median of Medians'
    ];
    public kthSelectionAlgorithm = this.kthSelectionAlgorithms[0];

    // Linked List
    public linkedListHasTailPointer = true;
    public linkedListSizeStored = true;
    public linkedListCircular = false;
    public linkedListTypes = [
        'Singly Linked',
        'Doubly Linked'
    ];
    public linkedListType = this.linkedListTypes[0];

    // Stack
    public stackBackingStructures = [
        'Linked List',
        'Array'
    ];
    public stackBackingStructure = this.stackBackingStructures[0];

    // Queue
    public queueBackingStructures = [
        'Linked List',
        'Array (Circular)'
    ];
    public queueBackingStructure = this.queueBackingStructures[0];

    // Binary Tree
    public isBinarySearchTree = true;
    public bstTypes = [
        'Regular BST',
        'AVL Tree',
        'Red-Black Tree',
        'Splay Tree'
    ];
    public bstType = this.bstTypes[0];
    public binaryTreeSizeStored = true;
    public binaryTreeNodeHeightStored = false;

    // B Tree
    // No specific Variables
    public bTreeSizeStored = true;
    public bTreeNodeHeightStored = false;

    // Hash Table
    public collisionResolutionMethods = [
        'External Chaining',
        'Probing'
    ];
    public collisionResolutionMethod = this.collisionResolutionMethods[0];
    public hashTableExternalStructures = [
        'Linked List',
        'AVL Tree',
        'Red-Black Tree'
    ];
    public hashTableExternalStructure = this.hashTableExternalStructures[0];
    public comparableHashTableData = false;
    public hashTableSizeStored = true;

    // Skip List
    public skipListHeights = [
        'h',
        'n',
        'log(n)'
    ];
    public skipListHeight = this.skipListHeights[0];
    public skipListSizeStored = true;

    // Heap
    public heapTypes = [
        'Binary (Array Backed)',
        'd-ary (Array Backed)',
        'Binomial',
        'Fibonacci'
    ];
    public heapType = this.heapTypes[0];
    public heapOrderings = [
        'Min Heap',
        'Max Heap'
    ];
    public heapOrdering = this.heapOrderings[0];
    public heapSizeStored = true;


    constructor() {
    }

    ngOnInit() {
    }

}
