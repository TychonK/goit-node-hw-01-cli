const fs = require('fs/promises')
const path = require('path')
const crypto = require('crypto')

const contactsPath = path.join(__dirname, 'db', 'contacts.json')

const readContent = async () => {
    const content = await fs.readFile(contactsPath(), 'utf8') 
    const result = JSON.parse(content)
    return result
}

const listContacts = async () => {
  return await readContent()
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = { listContacts, getContactById, removeContact, addContact }