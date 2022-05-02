// Conditional Statements
// -- If...else
// -- Switch...case

// IF-ELSE
// eg - If hour is between 6am to 12pm: Good Morning
//      If hour is between 12pm to 6pm: Good Afternoon
//      Otherwise:                      Good Evening

let hour = 18;
if (hour >= 6 && hour < 12)
    console.log('Good Morning');
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon');
else
    console.log('Good Evening');


// SWITCH - CASE

let role = 'guest';

switch (role){
    case 'guest':
        console.log('Guest Account');
        break;
    case 'moderator':
        console.log('Moderator Account');
        break;
    default:
        console.log('Unknown User');
}