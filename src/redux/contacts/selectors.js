import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/slice";

export const selectContacts = (state) => {
  return state.contacts.items;
};
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);