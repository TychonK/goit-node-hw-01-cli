const chalk = require('chalk')
const argv = require('yargs').argv;

const {
    listContacts,
    getContactById,
    removeContact,
    addContact
} = require('./contacts')

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
          const contacts = await listContacts()
          console.table(contacts)
      break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

      default:
        console.log(action)
        console.warn(chalk.red('31m Unknown action type!'));
  }
}

invokeAction(argv).then(() => console.log('Operation success'));