const fs = require('fs'),
chalk = require('chalk');

const dir = '../notes';

const success = msg => console.log( chalk.green(msg) ),
error = msg => console.log( chalk.red(msg) ),
info = msg => console.log( chalk.inverse(msg) );

const addNote = (title, body) =>{
    const notes = readJSON()
    const duplicate = notes.find( note => note.title === title )
    if( !duplicate ){
        notes.push({
            title,
            body
        })
        writeJSON(notes)
        success('Note added')
    } else {
        error('Note already exits')
    }
}

const removeNote = title =>{
    const notes = readJSON()

    const newNotes = notes.filter( note => note.title !== title )

    writeJSON(newNotes)

    if( notes.length === newNotes.length ) error('Note does not exits');
    else success(`Note with Title "${title}" is removed`);
}

const listNotes = () =>{
    const notes = readJSON()

    info(`You have ${notes.length} notes`)

    return notes.forEach( note =>{
        console.log(`Title: ${note.title}`)
    } )
}

const readNote = title =>{
    const notes = readJSON()
    const note = notes.find( note => note.title === title )

    if( note ){
        info(`Title: ${note.title}`)
        console.log(`Body: ${note.body}`)
    } else {
        error('Note does not exits')
    }
}

const readJSON = () =>{
    try{
        const dataBuffer = fs.readFileSync('../notes/notes.json');
        return JSON.parse( dataBuffer.toString() );
    } catch(e){
        if ( !fs.existsSync(dir) ){
            fs.mkdirSync(dir);
        }
        return [];
    }
}

const writeJSON = notes =>{
    return fs.writeFileSync('../notes/notes.json', JSON.stringify(notes))
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}