import cors from 'cors';

export const corsMiddleware = () => cors({
    origin: (origin, callback) => {
        return callback(null, true);
    }
});
