// one loop

let stars = ''
for (let i = 0; i <= 6; i++){
    stars += '* '
    console.log(stars)
}

//nested loops
for (let i = 0; i <= 6; i++){
    let stars = ''
    for (let j = 0; j <= i; j++){
        stars += '* '
    }
    console.log(stars)
}
