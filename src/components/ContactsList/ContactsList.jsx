export const ContactsList = ({deleteContact, getFilteredContacts}) => {
    const filteredContacts = getFilteredContacts();
    return (
        <ul>{filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
                <span>{name}: {number}</span>
                <button type="button" onClick={() => {deleteContact(id)}}>Delete</button>
            </li>))}
        </ul>
    )
}