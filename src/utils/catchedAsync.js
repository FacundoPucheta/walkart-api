//Función para capturar el error y lanzarlo para que sea manejado por Express.

const catchedAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res).catch((err) => next(err));
    };
};

module.exports = catchedAsync;