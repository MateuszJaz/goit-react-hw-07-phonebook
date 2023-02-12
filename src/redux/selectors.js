export const selectContacts = state => state.contacts.items;
export const selectFilterValue = state => state.filter.value;
export const selectIsLoadingStatus = state => state.contacts.isLoading;
export const selectErrorStatus = state => state.contacts.error;
