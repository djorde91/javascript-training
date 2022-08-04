import { createArrayMatrix } from ".";

describe("createArrayMatrix", () => {
  let matrix = [];
  const content = "lorem ipsum";
  const rows = 5;
  const columns = 6;

  beforeEach(() => {
    matrix = createArrayMatrix(() => content, { rows: rows, columns: columns });
  });

  test("Is an Array", () => {
    const isArray = Array.isArray(matrix);
    expect(isArray).toBe(true);
  });
  test("Rows length to match rows passed", () => {
    expect(matrix.length).toBe(rows);
  });
  test("Columns length to match columns passed", () => {
    expect(matrix[0].length).toBe(columns);
  });
  test("Content of a field to match the one passed on the callback function", () => {
    expect(matrix[0][0]).toBe(content);
  });
});
