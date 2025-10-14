import express from 'express';
import notesControllers from '../controllers/notesControllers.js';

const router = express.Router();

router.get('/', notesControllers.getAllNotes);

router.post('/', notesControllers.postNote);

router.put('/:id', notesControllers.updateNote);

router.delete('/:id', notesControllers.deleteNote);

export default router;