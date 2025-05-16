module.exports = (err, req, res, next) => {
    console.error(err.stack);

    if (res.headersSent) {
        return next(err);
    }

    if (err.status === 400) {
        return res.status(400).json({ message: 'Bad Request', error: err.message });
    }

    if (err.status === 404) {
        return res.status(404).json({ message: 'Not Found', error: err.message });
    }

    return res.status(500).json({ message: 'Internal Server Error', error: 'Something went wrong!' });
};