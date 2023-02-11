import style from "./Contacts.module.css";
import { getFilterValue, getContacts } from "redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";

const ContactList = () => {
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilterValue);
	const dispatch = useDispatch();
	console.log(contacts);

	const filteredContacts = contacts.filter(
		(contact) =>
			contact.name.toLowerCase().includes(filter.toLowerCase()) ||
			contact.number.replace(/-|\s/g, "").includes(filter.replace(/-|\s/g, "")),
	);

	const handleDelete = (id) => {
		dispatch(deleteContact(id));
	};

	return filteredContacts.length > 0 ? (
		<ul className={style.ContactList}>
			{filteredContacts.map(({ id, name, number }) => {
				return (
					<li className={style.contactsItem} key={id}>
						{name}: {number}
						<button
							className={style.contactBtn}
							type="submit"
							onClick={() => handleDelete(id)}
						>
							Delete
						</button>
					</li>
				);
			})}
		</ul>
	) : (
		<p>No contacts.</p>
	);
};

export default ContactList;
