import MineSweeper from "./index";

const game = new MineSweeper({
  rows: 5,
  columns: 10,
  maxMines: 5,
  MINE: "X",
});

game.init();
game.printResults();

describe("MineSweeper", () => {
  test("sumar 1 + 2 es igual a 3", () => {
    expect(1 + 2).toBe(3);
  });
});
