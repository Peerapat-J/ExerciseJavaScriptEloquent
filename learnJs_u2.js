/* 
    Note to myself:
    
    Single Lines Comment:
        Command (⌘) + /

    Multiple Lines Comment:
        leftShift + Option (⌥) + a

    Multi-Cursor Editing: 
        Command (⌘) + Option (⌥) + Down/Up Arrow

    Duplicate a line of code:
        Shift (⇧) + Option (⌥) + Down Arrow
*/

/* 
    Exercise 1:
    Looping a triangle
    
    Description:
        Write a loop that makes seven calls to console.log to output the following
        triangle:
            #
            ##
            ###
            ####
            #####
            ######
            #######

        Hint: It may be useful to know that you can find the length of a string by writing
        .length after it.
            let abc = "abc";
            console.log(abc.length);
            // → 3
*/
/* 
// Version 1
let maxLine = 7;
for (let nLine = 0; nLine < maxLine; nLine++) {
    for (nSharp = 0; nSharp != nLine+1; nSharp++){
        process.stdout.write("#");
    }
    console.log("");
} 
*/

// Version 2
/* let maxLine = 7;
sharp = "#";
for (let nLine = 0; nLine < maxLine; nLine++) {
    
    console.log(sharp);
    sharp += "#";
} */

//
// Version 3
// console.log("#".repeat(nLine + 1));

/* 
    Exercise 2:
    FizzBuzz

    Description:
        Write a program that uses console.log to print all the numbers from 1 to 100,
        with two exceptions. 
        For numbers divisible by 3, print "Fizz" instead of the
        number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
        When you have that working, modify your program to print "FizzBuzz" for
        numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
        for numbers divisible by only one of those).
        (This is actually an interview question that has been claimed to weed out
        a significant percentage of programmer candidates. So if you solved it, your
        labor market value just went up.)
*/
/* 
for (let number = 1; number <= 15; number++) {
   if ((number % 3 == 0) && (number % 5 != 0)){
        console.log(number + ": " + "Fizz");
    }
    else if ((number % 3 != 0) && (number % 5 == 0)){
        console.log(number + ": " + "Buzz");
    }
    else if ((number % 3 == 0) && (number % 5 == 0)){
        console.log(number + ": " + "Fizz");
        console.log(number + ": " + "Buzz");
        console.log(number + ": " + "FizzBuzz");
    }
    else {
        console.log(number);
   }
}
*/

/*
    Exercise 3:
    Chessboard

    Description:
        Write a program that creates a string that represents an 8×8 grid, using newline
        characters to separate lines. At each position of the grid there is either a space
        or a "#" character. The characters should form a chessboard.
        Passing this string to console.log should show something like this:
            # # # #
            # # # #
            # # # #
            # # # #
            # # # #
            # # # #
            # # # #
            # # # #
        When you have a program that generates this pattern, define a binding size
        = 8 and change the program so that it works for any size, outputting a grid
        of the given width and height.
*/

/* 
   0 1 2 3 4 5 6 7
0 ▫️◾️▫️◾️▫️◾️▫️◾️ <- even
1 ◾️▫️◾️▫️◾️▫️◾️▫️ <- odd
2 ▫️◾️▫️◾️▫️◾️▫️◾️ <- even
3 ◾️▫️◾️▫️◾️▫️◾️▫️ <- odd
4 ▫️◾️▫️◾️▫️◾️▫️◾️ <- even
5 ◾️▫️◾️▫️◾️▫️◾️▫️ <- odd
6 ▫️◾️▫️◾️▫️◾️▫️◾️ <- even
7 ◾️▫️◾️▫️◾️▫️◾️▫️ <- odd
*/
let boardSize = 8;

let lineWidth = "   ";
for (let x = 0; x < boardSize; x++) {
    lineWidth += x + " ";
}
console.log(lineWidth);

for (height = 0; height < boardSize; height++) {
    let grid = height +" ";
    for (width = 0; width < boardSize; width++) {
        if ((width + height) % 2 == 0) {
            grid += "◾️";
        } else {
            grid += "▫️";
        }
    }
    console.log(grid);
}