import React, {Component} from 'react';
import Row from "../Row";
import Cell from "../Cell";
import cs from 'classnames';
import "./App.scss";
import { INITIAL_STATE, KEY_CODES, KEY_CODES_MAPPING } from "../../constants";

class App extends Component {
    constructor(props){
        super(props);
        this.state = INITIAL_STATE;
        this.state.snake = this.rand(1);
        this.state.snack = this.rand(2);
        this.createPlayfield = this.createPlayfield.bind(this);
        this.isPosition = this.isPosition.bind(this);
        this.addClasses = this.addClasses.bind(this);
        this.keyPress = this.keyPress.bind(this);
 
        this.onInterval = this.onInterval.bind(this);
        this.rand = this.rand.bind(this);
    }
    rand = (size) => {
        let element = [];
        for (let i = 1; i <= size; i++) {
            element.push({
                x: Math.round(0 - 0.5 + Math.random() * (this.state.level.size-5 + 1)),
                y: Math.round(0 - 0.5 + Math.random() * (this.state.level.size-5 + 1))
            })
        }
        return element;
    }
    isPosition = (x, y, array) => {
        return array.filter((coords) => {
            return coords.x === x && coords.y === y
        }).length
    }
    moving = {
        UP: (x,y) => ({x, y: y - 1}),
        BOTTOM: (x,y) => ({x, y: y + 1}),
        LEFT: (x,y) => ({x: x - 1, y}),
        RIGHT: (x,y) => ({x: x + 1, y})
    }    
    addClasses = (x, y) => {
        return cs(
            'grid-cell',
            {
                'grid-snake': Boolean(this.isPosition(x, y, this.state.snake)),
                'grid-snack': Boolean(this.isPosition(x, y, this.state.snack))
            }
        )        
    }
    createPlayfield() {
        let rows = []; 
        for (let i = 0; i <= this.state.level.size; i++){
            let cell = [];
            for(let j = 0; j <= this.state.level.size; j++){
                cell.push(<Cell key={j+"_"+i} x={j} y={i} className={this.addClasses( j, i )}/>)            }
            rows.push(<Row key={i}>{cell}</Row>)
        }
        return rows;
    }
    keyPress(code) {
        if(KEY_CODES[code] !== this.state.position && KEY_CODES_MAPPING[code] !== this.state.position){
            this.setState({
                position: KEY_CODES[code]
            });
        }
    }
    gameOver () {
        
    }
    onInterval() {
        let snake = this.state.snake;
        let element = this.moving[this.state.position](snake[0].x, snake[0].y);

        snake.splice(-1 , 1)
        snake = [element, ...snake]

        this.setState({
            snake: snake
        })     
    }
    componentDidMount() {
        document.addEventListener("keydown", (event) => {
            this.keyPress(event.keyCode);
        });
        this.interval = setInterval(this.onInterval, this.state.level.speed);
    }
    render() {
        console.log(this.state.position)
        return (
            <div className="container">
                <div className="row">
                    <table>
                        <tbody>
                            {this.createPlayfield()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default App;