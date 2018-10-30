export const DIRECTIONS = {
    UP: "UP",
    BOTTOM: "BOTTOM",
    RIGHT: "RIGHT",
    LEFT: "LEFT"
}
export const KEY_CODES = {
    37: "LEFT",
    38: "UP",
    39: "RIGHT",
    40: "BOTTOM"
}
export const KEY_CODES_MAPPING = {
    37: "RIGHT",
    38: "BOTTOM",
    39: "LEFT",
    40: "UP"
}
export const LEVELS = {
    1: {
        size: 40,
        speed: 1000,
        max: 10
    },
    2: {
        size: 50,
        speed: 1000,
        max: 12
    },
    3: {
        size: 55,
        speed: 800,
        max: 15
    },
    4: {
        size: 60,
        speed: 600,
        max: 15
    },
    5: {
        size: 80,
        speed: 500,
        max: 20
    }
}
export const INITIAL_STATE = {
    level: LEVELS[1],
    position: DIRECTIONS.RIGHT,
    snake: [],
    snack: []
}