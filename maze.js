// 8. Find a way out of the maze
// You have entered a Maze and need to find your way out of it. There are more than one possible paths 
//through the Maze to the single exit point. Write a recursive function that will help you find a 
//possible path though the maze.

// You can use the following mazes to test your program.

// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];

// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];
// The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). 
//The starting point is the top left corner and the exit is indicated by e. For simplicity 
//purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries 
//of the maze. The maze has passages that are blocked and you can't go through them. These blocked 
//passages are indicated by *. Passing through a blocked cell as well as passing though a cell that 
//you have already passed before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR

function escape(maze) {
  
    this.maze = maze;
  
    this.traverse = function(column, row) {
      console.log('D')
        if(this.maze[column][row] == 2) {
            console.log("We solved the maze at (" + column + ", " + row + ")");
        } else if(this.maze[column][row] == 1) {
            console.log("At valid position (" + column + ", " + row + ")");
            this.maze[column][row] = 9;
            if(column < this.maze.length - 1) {
              console.log('R')
                this.traverse(column + 1, row);
            }
            if(row < this.maze[column].length - 1) {
              console.log('D')
                this.traverse(column, row + 1);
            }
            if(column > 0) {
              console.log('L')
                this.traverse(column - 1, row);
            }
            if(row > 0) {
              console.log('U')
                this.traverse(column, row - 1);
            }
        }
    };
  
  };
  escape(mySmallMaze)
  console.log('anagrams')
  function anagrams(prefix, str) {
    if (str.length <= 1) {
        console.log(prefix + str);
    }
    else {
        for (let i = 0; i < str.length; i++) {
            const current = str.substring(i, i + 1);
            const before = str.substring(0, i);
            const after = str.substring(i + 1);
            anagrams(prefix + current, before + after);
        }
    }
  };
  
  anagrams('', 'east')