function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Laura', 'Admin');
usuarios.set('Blabla', 'User');
usuarios.set('Sophia', 'Admin');

console.log(getAdmins(usuarios));
