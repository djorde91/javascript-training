function createArrayMatrix(boxContent, {rows, columns}){
    const matrix = new Array(rows).fill().map(() => {
        return new Array(columns).fill().map(() => boxContent());
    });

    return matrix;
}

export {createArrayMatrix};