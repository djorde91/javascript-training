import MineSweeper from "./components/mineSweeper";

const game = new MineSweeper({
    rows: 5,
    columns: 10,
    maxMines: 5,
    MINE: "X"
});

game.init();
game.printResults();