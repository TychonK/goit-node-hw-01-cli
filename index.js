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
      const contactById = await getContactById(id)
      if (contactById) {
        console.log(chalk.green('Contact found'))
        console.table(contactById)
        return
      }
      console.log(chalk.yellow('Contact not found'))
      break;

    case 'add':
      if (!name || !email || !phone) {
        console.log(chalk.yellowBright('Invalid contact credentials'))
        return
      }
      const newContact = await addContact(name, email, phone)
      console.log(chalk.green('Added new contact'))
      console.table(newContact)
      break;

    case 'remove':
      const newContactsSet = await removeContact(id)
      if (!newContactsSet) {
        return
      }
        console.log(chalk.green('Contact removed successfully'))
      break;

      default:
        console.warn(chalk.red('31m Unknown action type!'));
  }
}

invokeAction(argv).then(() => console.log('Operation success'));