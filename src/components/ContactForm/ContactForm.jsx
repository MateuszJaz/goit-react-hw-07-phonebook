import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import { addContact} from "redux/operations";
import style from "./ContactForm.module.css";


const ContactForm = () => {
	const contacts = useSelector(selectContacts);
	const dispatch = useDispatch();

	const handleAddContact = (e) => {
		e.preventDefault();
		let nameOntheList = false;
		const form = e.target;
		const name = form.name.value;
		const number = form.number.value;
		const toLowerCase = name.toLowerCase();

		const newContact = {
			name: name,
			number: number,
		};

		contacts.forEach(({ name }) => {
			if (name.toLowerCase() === toLowerCase) {
				alert(`${name} is already in contacts`);
				nameOntheList = true;
			}
		});

		if (nameOntheList) return;

		dispatch(addContact(newContact));
		form.reset();
	};
	return (
		<form className={style.form} onSubmit={handleAddContact}>
			<label htmlFor="name">
				Name
				<input
					className={style.formInput}
					autoComplete="off"
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					placeholder="e.g. John Doe"
					required
				/>
			</label>
			<label htmlFor="number">
				Number
				<input
					className={style.formInput}
					autoComplete="off"
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					placeholder="e.g. 123-456-789"
					required
				/>
			</label>
			<button className={style.formBtn} type="submit">
				Add contact
			</button>
		</form>
	);
};
export default ContactForm;
