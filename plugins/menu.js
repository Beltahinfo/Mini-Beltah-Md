// Menu configuration
const menu = [
    '1. Option 1',
    '2. Option 2',
    '3. Option 3',
    '4. Exit'
];

function displayMenu() {
    console.clear();
    console.log('Simple Menu');
    menu.forEach(option => console.log(option));
}

module.exports = { displayMenu };