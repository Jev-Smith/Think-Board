import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from '../config/db.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
connectDB();

app.use('/api/notes', notesRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));