import { selectFilterValue, selectContacts, selectErrorStatus } from "redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import style from "./Contacts.module.css";

const ContactList = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(selectContacts);
	const filter = useSelector(selectFilterValue);
	const error = useSelector(selectErrorStatus)

	const filteredContacts = contacts.filter(
		(contact) =>
			contact.name.toLowerCase().includes(filter.toLowerCase()) ||
			contact.number.replace(/-|\s/g, "").includes(filter.replace(/-|\s/g, "")),
	);

	return filteredContacts.length > 0 ? (
		<ul className={style.ContactList}>
			{filteredContacts.map(({ id, name, number }) => {
				return (
				<li className={style.contactsItem} key={id}>
					{name}: {number}
					<button
						className={style.contactBtn}
						type="submit"
						onClick={() => dispatch(deleteContact(id))}
					>
						Delete
					</button>
				</li>
				);
			})}
		</ul>
	) : ((error && <p>Error: {error}</p> )|| <p>No contacts.</p>
	);
};

export default ContactList;
