import React, { useState } from "react";

function AddEditContactModal({ type = "add", onSubmit, onClose, initialData }) {
  // State to hold name and email input values
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Both name and email are required.");
      return;
    }
    // Call the onSubmit function passed as a prop with the contact details
    onSubmit({ name, email });
  };

  return (
    <div className="h-[257px] rounded-[10px] bg-white p-4">
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="border-[1px] p-1 border-black h-10 rounded"
            placeholder="Enter the name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="border-[1px] p-1 border-black h-10 rounded"
            placeholder="Enter the email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center gap-[11px]">
          <button
            type="submit"
            className=" p-2 bg-yellow text-black rounded w-[150px]"
          >
            <p>{type === "add" ? "Add" : "Update"} Contact</p>
          </button>

          <button
            type="button"
            onClick={onClose}
            className=" p-2 bg-[#ff2c2c] text-black rounded w-[150px]"
          >
            <p>Close</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEditContactModal;
