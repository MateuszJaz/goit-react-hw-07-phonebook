import { createSlice } from "@reduxjs/toolkit";

let savedContacts = localStorage.getItem("savedContacts");
let contactsInitialState;

if (savedContacts === null) {
	contactsInitialState = {
		items: [
			{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
			{ id: "id-2", name: "Hermione Kline", number: "443-89-12" },
			{ id: "id-3", name: "Eden Clements", number: "645-17-79" },
			{ id: "id-4", name: "Annie Copeland", number: "227-91-26" },
			{ id: "id-5", name: "Memory Five", number: "555-555-555" },
		],
	};
} else {
	contactsInitialState = {
		items: JSON.parse(savedContacts),
	};
}

const contactsSlice = createSlice({
	name: "contacts",
	initialState: { ...contactsInitialState, isLoading: false, error: null },

	reducers: {
		addNewContact(state, action) {
			state.items.push(action.payload);
		},

		deleteContact(state, action) {
			state.items = state.items.filter(
				(contact) => contact.id !== action.payload,
			);
		},
	},
});

export const { addNewContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
