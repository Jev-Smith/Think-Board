const getAllNotes = (req, res) => {
    res.status(200).send('You fetched the notes :)');
}

const postNote = (req, res) => {
    res.status(201).json({ message: 'Note created!' });
}

const updateNote = (req, res) => {
    res.status(200).json({ message: 'Note updated!' });
}

const deleteNote = (req, res) => {
    res.status(200).json({ message: 'Note deleted' });
}

export default {
    getAllNotes,
    postNote,
    updateNote,
    deleteNote
}