/**
 * The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
Otherwise, they will leave it and go to the queue's end.
This continues until none of the queue students want to take the top sandwich and are thus unable to eat.
 */
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let circularQueue = 0; // Number of students preferring circular sandwiches
     let squareQueue = 0; // Number of students preferring square sandwiches
     
     // Count the number of students with each preference
     for (let student of students) {
         if (student === 0) {
             circularQueue++;
         } else {
             squareQueue++;
         }
     }
     
     // Iterate through the sandwiches
     for (let sandwich of sandwiches) {
         // If the top sandwich matches the preference of the student at the front of the queue, they will take it
         if (sandwich === 0) {
             if (circularQueue === 0) {
                 break; // No more students who prefer circular sandwiches
             }
             circularQueue--;
         } else {
             if (squareQueue === 0) {
                 break; // No more students who prefer square sandwiches
             }
             squareQueue--;
         }
     }
     
     return circularQueue + squareQueue;
 };