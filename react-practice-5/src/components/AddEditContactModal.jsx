import React, { useState } from "react";

function AddEditContactModal({ type = "add", onSubmit, onClose, initialData }) {
  // State to hold name and phoneNumber input values
  const [name, setName] = useState(initialData?.name || "");
  const [phoneNumber, setPhoneNumber] = useState(
    initialData?.phoneNumber || ""
  );

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber) {
      alert("Both name and phone number are required.");
      return;
    }
    // Call the onSubmit function passed as a prop with the contact details
    onSubmit({ name, phoneNumber });
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
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            className="border-[1px] p-1 border-black h-10 rounded"
            placeholder="Enter the phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
            className=" p-2 bg-[#ff2c2c] text-white rounded w-[150px]"
          >
            <p>Close</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEditContactModal;
