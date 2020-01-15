function createPiece(type) {
    if (type === 'T') {
        return [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0]
        ]
    } else if (type === 'O') {
        return [
            [2, 2],
            [2, 2]
        ]
    } else if (type === 'L') {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [0, 3, 3]
        ]
    } else if (type === 'J') {
        return [
            [0, 4, 0],
            [0, 4, 0],
            [4, 4, 0]
        ]
    } else if (type === 'I') {
        return [
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0]
        ]
    } else if (type === 'S') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0]
        ]
    } else if (type === 'Z') {
        return [
            [7, 7, 0],
            [0, 7, 7],
            [0, 0, 0]
        ]
    }
}

const tetri = []
const playerElements = document.querySelectorAll('.player')
playerElements.forEach(element => {
    const tetris = new Tetris(element)
    tetri.push(tetris)
});

const keyListener = (event) => {
    [
        [37, 38, 39, 40, 17],
        [65, 87, 68, 83, 72]
    ].forEach((key, index) => {
        const player = tetri[index].player
        if (event.keyCode === key[0]) {
            player.move(-1)
        } else if (event.keyCode === key[1]) { // keycode Up
            player.rotate(-1)
        } else if (event.keyCode === key[2]) {
            player.move(1)
        } else if (event.keyCode === key[3]) { // keycode Up
            player.rotate(-1)
        } else if (event.keyCode === key[4]) {
            if(event.type === 'keydown') {
                player.drop()
                player.dropInterval = player.DROP_FAST
            } else {
                player.drop()
                player.dropInterval = player.DROP_SLOW
            }
            
        }
    })
    
}

document.addEventListener('keydown', keyListener)
document.addEventListener('keyup', keyListener)



