import Note from '../models/Note.js';

const getAllNotes = async (_, res) => {
    try{
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes);
    }
    catch(err){
        console.error("Couldn't get all notes. Server error.",err);
        res.status(500).json({message: 'Internal server error'});
    }
}

const getNoteById = async (req, res) => {
    try{
        const id = req.params.id;
        const note = await Note.findById(id);

        if(!note){
            return res.status(404).json({message: 'Invalid ID'});
        }

        res.status(200).json(note);
    }
    catch(err){
        console.error("Couldn't get all notes. Server error.", err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const postNote = async (req, res) => {
    try{
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        await newNote.save();

        res.status(201).json({message: 'Note was created'});
    }
    catch(err){
        console.error("Couldn't get all notes. Server error.", err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const updateNote = async (req, res) => {
    try{
        const { title, content } = req.body;
        const id = req.params.id;
        const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });

        if(!updatedNote){
            return res.status(404).json({message: 'Note not found'});
        }

        res.status(200).json({ message: 'Note updated!' });
    }
    catch(err){
        console.error("Couldn't get all notes. Server error.", err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteNote = async (req, res) => {
    try{
        const id = req.params.id;
        const deletedNote = await Note.findByIdAndDelete(id);

        if(!deletedNote) {
            return res.status(404).json({message: 'Invalid ID'});
        }

        res.status(200).json({ message: 'Note deleted' });
    }
    catch(err){
        console.error("Couldn't get all notes. Server error.", err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default {
    getAllNotes,
    getNoteById,
    postNote,
    updateNote,
    deleteNote
}