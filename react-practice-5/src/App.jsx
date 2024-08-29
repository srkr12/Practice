import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import {
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "./config/firebase";
import AddEditContactModal from "./components/AddEditContactModal";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [currentContact, setCurrentContact] = useState(null); // State for current contact data

  //fetching data from backend
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  // Delete function to remove contact
  const handleDelete = async (id) => {
    try {
      const contactDoc = doc(db, "contacts", id);
      await deleteDoc(contactDoc);
      // Update the local state to remove the deleted contact
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  // Add or Update function
  const handleSaveContact = async (contact, id) => {
    try {
      if (id) {
        // Update contact
        const contactDoc = doc(db, "contacts", id);
        await updateDoc(contactDoc, contact);
        setContacts(
          contacts.map((c) => (c.id === id ? { ...c, ...contact } : c))
        );
      } else {
        // Add new contact
        const contactsRef = collection(db, "contacts");
        const docRef = await addDoc(contactsRef, contact);
        setContacts([...contacts, { id: docRef.id, ...contact }]);
      }
      setIsModalOpen(false);
      setCurrentContact(null); // Clear current contact data
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  // Handle editing contact
  const handleEdit = (contact) => {
    setCurrentContact(contact);
    setIsModalOpen(true);
  };

  // Filter contacts based on the search query
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="m-4 flex flex-col gap-[22px] max-w-[400px]">
      <Navbar />
      <SearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onAdd={() => setIsModalOpen(true)}
      />

      <div className="contact-wrap">
        {filteredContacts.length === 0 ? (
          <div className="empty-contact flex flex-col items-center justify-center">
            <img
              src="empty-contact.svg"
              alt="it will show when the contact list empty"
            />
            <p className="text-white font-semibold text-[24px]">
              No Contact Found
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="contact-item bg-light-yellow flex items-center justify-between h-[64px] rounded-[10px] p-3"
              >
                <div className="flex gap-2">
                  <img src="contact-img.png" alt="contact logo" />

                  <ul>
                    <li className="font-medium text-base">{contact.name}</li>
                    <li>{contact.email}</li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button onClick={() => handleEdit(contact)}>
                    <img src="edit.png" alt="edit contact icon" />
                  </button>

                  <button onClick={() => handleDelete(contact.id)}>
                    <img src="delete.png" alt="delete icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Render the AddEditContactModal */}
      {isModalOpen && (
        <AddEditContactModal
          type={currentContact ? "edit" : "add"}
          onSubmit={(contact) => handleSaveContact(contact, currentContact?.id)}
          onClose={() => {
            setIsModalOpen(false);
            setCurrentContact(null); // Clear current contact data when closing modal
          }}
          initialData={currentContact}
        />
      )}
    </div>
  );
}

export default App;
