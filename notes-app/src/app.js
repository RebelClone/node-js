const yargs = require('yargs'),
notes = require('./notes');

yargs.command({
    command: 'add',
    description: 'Add a note',
    builder: {
        title: {
            describe: 'Title of note',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'Body of note',
            type: 'string',
            demandOption: true
        }
    },
    handler: argv =>{
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder:{
        title:{
            describe: 'Title of note to remove',
            type: 'string',
            demandOption: true
        }
    },
    handler: argv =>{
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    description: 'Show list of notes',
    handler: () =>{
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    description: 'Read a file',
    builder: {
        title: {
            describe: 'Title of note to read',
            type: 'string',
            demandOption: true
        }
    },
    handler: argv =>{
        notes.readNote(argv.title);
    }
})

yargs.parse()