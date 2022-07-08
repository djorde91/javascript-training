(() => {
    /**
     * create array matrix and fill it with random numbers.
     * 
     */

    const createArrayMatrix =  (x, y) => {
        const arr = new Array(x).fill().map(() => {
            return new Array(y).fill().map(() => getRandomInt(0,10));
        });

        console.log( arr)
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    createArrayMatrix(4,6);

})();