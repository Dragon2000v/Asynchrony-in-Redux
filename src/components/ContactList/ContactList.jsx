import { useSelector } from 'react-redux';
import Contact from './Contact';
import s from './Contacts.module.css';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contactList}>
      {contacts.map(el => (
        <Contact key={el.id} contact={el} />
      ))}
    </ul>
  );
};

export default ContactList;
