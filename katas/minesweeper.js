function MineSweeper(props){
    const {rows, columns, maxMines, MINE} = props;
    let field = [];

    this.createField = () => {
        console.log(this)
        field = createArrayMatrix(rows, columns);
    }

    this.handleBoard = () => {
        field.forEach((row, i) => {
            row.forEach((columns, j) => {
                
                if(isMine(i, j)){
                    handleMineProximity(i-1, j-1);
                    handleMineProximity(i-1, j);
                    handleMineProximity(i-1, j+1);
            
                    handleMineProximity(i, j-1);
                    handleMineProximity(i, j+1);
            
                    handleMineProximity(i+1, j-1);
                    handleMineProximity(i+1, j);
                    handleMineProximity(i+1, j+1);
                }
            });
        }); 
    }

    function handleMineProximity(posX, posY){
        if(onRange()){
            if(!isMine(posX, posY)) field[posX][posY] += 1;
        }
        
        function onRange(){
            if(field[posX] === undefined ) return false;
            if(field[posX][posY] === undefined) return false;

            return true;
        }
    
    }

    this.generateMines = () => {
        let generated = 0;

        while(generated < maxMines ){
            const posX = getRandomInt(0, rows -1);
            const posY = getRandomInt(0, columns -1);

            if(!isMine(posX, posY)){
                field[posX][posY] = MINE;
                generated++;
            }

        }
    }

    this.showGame = () => {
        console.log(field);
    }

    function isMine(x, y){
        return field[x][y] === MINE;
    }

    function getRandomInt(min, max) { // min and max  are included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function createArrayMatrix(x, y){
        return Array(x).fill(0).map(() => {
            return Array(y).fill(0);
        });
    }
}

const game = new MineSweeper({
    rows: 5,
    columns: 10,
    maxMines: 5,
    MINE: "X"
});

game.createField();
game.generateMines();
game.handleBoard();

// game.showGame();

  