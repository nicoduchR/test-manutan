
# Documentation for Tower of Hanoi Script

This script is a Node.js implementation that solves the Tower of Hanoi puzzle for a given number of disks. 

The objective of the puzzle is to move the entire stack to another tower, obeying the following simple rules:
1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.
3. No disk may be placed on top of a smaller disk.

## Usage

To use this script, simply run it with Node.js. The script will automatically solve the Tower of Hanoi puzzle for the number of disks specified in `diskNumber` and visually display each step in the console.

### Example

```bash
npm start
```

This will output each step of the solution to the console, showing the movement of disks from tower `A` (the source) to tower `C` (the destination) using tower `B` as an auxiliary.

## Modification and Configuration

- **Changing the Number of Disks**: Modify the `diskNumber` variable at the top of the script to solve the puzzle for a different number of disks.

## To run unit tests :

```bash
npm run test
```