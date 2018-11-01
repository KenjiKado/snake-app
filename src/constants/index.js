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
export const INITIAL_STATE = {
    level: {
        size: 20,
        speed: 600,
    },
    position: DIRECTIONS.RIGHT,
    snake: [],
    snack: []
}