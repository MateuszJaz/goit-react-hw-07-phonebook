import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectIsLoadingStatus, selectErrorStatus } from "redux/selectors"
import { fetchContacts } from "redux/operations";
import ContactForm from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import style from "./App.module.css";


const App = () => {
  const isLoading = useSelector(selectIsLoadingStatus);
  const error = useSelector(selectErrorStatus);
	const dispatch = useDispatch();

		useEffect(() => {
dispatch(fetchContacts())
	}, [dispatch]);

	return (
		<div className={style.container}>
			<h1>Phonebook</h1>
			<ContactForm />
			<h2>Contacts</h2>
			<Filter />
      {isLoading && !error ? <p>Loading...</p> : <ContactList />}
		</div>
	);
};

export default App;
