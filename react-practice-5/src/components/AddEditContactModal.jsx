import React, { useState } from "react";

function AddEditContactModal({ type = "add", onSubmit }) {
  // State to hold name and email input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger onSubmit with current name and email values
    onSubmit({ name, email, type });
  };

  return (
    <div className="h-[257px] rounded-[10px] bg-white p-4">
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
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
            className="border-[1px] p-1 border-black h-10 rounded"
            placeholder="Enter the email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className=" p-2 bg-yellow text-black rounded ">
          <p>{type === "add" ? "Add" : "Update"} Contact</p>
        </button>
      </form>
    </div>
  );
}

export default AddEditContactModal;
