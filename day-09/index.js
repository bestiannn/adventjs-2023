function adjustLights(lights) {
    let lightsCopy = [...lights];
    let cont = 0;
    let contReverse = 0;

    for (let i = 0; i < lights.length; i++) {
        if (lights[i] === lights[i + 1]) {
            lights[i + 1] = lights[i] === '🔴' ? '🟢' : '🔴';
            cont++;
        } else if (lights[i] === lights[i + 1]) {
            lights[i + 1] = lights[i] === '🔴' ? '🟢' : '🔴';
            cont++;
        }
    }

    lights = [...lightsCopy];

    for (let i = lights.length - 1; i >= 0; i--) {
        if (lights[i] === lights[i + 1]) {
            lights[i] = lights[i] === '🔴' ? '🟢' : '🔴';
            contReverse++;
        } else if (lights[i] === lights[i + 1]) {
            lights[i] = lights[i] === '🔴' ? '🟢' : '🔴';
            contReverse++;
        }
    }

    return cont < contReverse ? cont : contReverse;

}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']));
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']));
// -> 1 (cambia la primera luz a verde)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']));
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']));
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']));
// -> 1 (cambias la segunda luz a 🟢)

console.log(adjustLights(['🔴', '🔴', '🔴', '🔴', '🟢','🟢','🟢']));