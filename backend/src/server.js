import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

const app = express();

dotenv.config();

app.use(express.json());
app.use(rateLimiter);
app.use('/api/notes', notesRoutes);

const PORT = process.env.PORT || 5001;

connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
});
