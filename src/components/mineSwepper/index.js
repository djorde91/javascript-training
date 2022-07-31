import { getRandomNumber } from "../../utility/numbers";
import { createArrayMatrix } from "../../utility/arrays";

const MineSweeper = function (props) {
  const { rows, columns, maxMines, MINE } = props;
  let field = [];
  const initialBoxesValue = 0;

  this.init = () => {
    this.createField();
    this.generateMines();
    this.handleBoard();
  };

  this.createField = () => {
    field = createArrayMatrix(() => initialBoxesValue, {
      rows,
      columns,
    });
  };

  this.handleBoard = () => {
    field.forEach((row, i) => {
      row.forEach((_columns, j) => {
        if (isMine(i, j)) {
          handleMineProximity(i - 1, j - 1);
          handleMineProximity(i - 1, j);
          handleMineProximity(i - 1, j + 1);

          handleMineProximity(i, j - 1);
          handleMineProximity(i, j + 1);

          handleMineProximity(i + 1, j - 1);
          handleMineProximity(i + 1, j);
          handleMineProximity(i + 1, j + 1);
        }
      });
    });

    function handleMineProximity(posX, posY) {
      if (onRange()) {
        if (!isMine(posX, posY)) field[posX][posY] += 1;
      }

      function onRange() {
        if (field[posX] === undefined) return false;
        if (field[posX][posY] === undefined) return false;

        return true;
      }
    }
  };

  this.generateMines = () => {
    let generated = 0;

    while (generated < maxMines) {
      const posX = getRandomNumber(0, rows - 1);
      const posY = getRandomNumber(0, columns - 1);

      if (!isMine(posX, posY)) {
        field[posX][posY] = MINE;
        generated++;
      }
    }
  };

  this.printResults = () => {
    console.table(field);
  };

  function isMine(x, y) {
    return field[x][y] === MINE;
  }
};

export default MineSweeper;
