import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./config/firebase";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Filter contacts based on the search query
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="m-4 flex flex-col gap-[22px] max-w-[400px]">
      <Navbar />
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

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
                  <button>
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
    </div>
  );
}

export default App;
