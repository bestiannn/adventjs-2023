function createChristmasTree(ornaments, height) {
    let tree = '';
    let currentOrnament = 0;
    for (let i = 1; i <= height; i++) {
        tree += ' '.repeat(height - i);
        for (let j = 1; j <= i; j++) {
            if (currentOrnament === ornaments.length) {
                currentOrnament = 0;
            }
            tree += ornaments[currentOrnament];
            if(j + 1 <= i) {
                tree += " ";
            }
            currentOrnament++;
        }
        tree += '\n';
    }

    tree += ' '.repeat(height - 1) + '|' + '\n';
    return tree;
}

console.log(createChristmasTree('123', 4));

console.log(createChristmasTree('*@o', 3));