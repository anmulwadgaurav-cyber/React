import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [compName, setCompName] = useState("");

  const [AllContacts, setAllContacts] = useState([]);
  const addContact = (e) => {
    e.preventDefault();
    let newContact = [...AllContacts];
    if (name === "" || phone === "" || compName === "")
      return alert("Fill atleast one field");

    newContact.push({ name, phone, email, compName, createdAt: new Date() });
    setAllContacts(newContact);

    setName("");
    setPhone("");
    setEmail("");
    setCompName("");
  };
  return (
    <div>
      <div className="p-10 bg-white w-full flex justify-center items-center rounded-md shadow-md">
        <form onSubmit={addContact} className="flex gap-2">
          <input
            className="inputStyle "
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="inputStyle "
            placeholder="Phone"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="inputStyle "
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputStyle "
            placeholder="Company"
            type="text"
            value={compName}
            onChange={(e) => setCompName(e.target.value)}
          />
          <button className="btnStyle">Add contact</button>
        </form>
      </div>
      <div className="py-10 px-20 bg-white mt-3 shadow-md">
        <div className="flex justify-around pb-5 my-5 border-b border-gray-300">
          <p className="opacity-60 text-start w-full px-5">Name</p>
          <p className="opacity-60 text-start w-full px-5">Phone</p>
          <p className="opacity-60 text-start w-full px-5">Email</p>
          <p className="opacity-60 text-start w-full px-5">Company</p>
          <p className="opacity-60 text-start w-full px-5">Date created</p>
          <p className="opacity-60 text-start w-full px-5">Actions</p>
        </div>

        {AllContacts.map((contact, idx) => {
          return (
            <div className="flex justify-around items-center py-5 rounded-md storedData ">
              <p className="text-start w-full px-5">{contact.name}</p>
              <p className="text-start w-full px-5">{contact.phone}</p>
              <p className="text-start w-full px-5">{contact.email}</p>
              <p className="text-start w-full px-5">{contact.compName}</p>
              <p className="text-start w-full px-5">
                {contact.createdAt.getDate().toString().padStart(2, "0")}/
                {(contact.createdAt.getMonth() + 1).toString().padStart(2, "0")}
                /{contact.createdAt.getFullYear()}
              </p>
              <p
                className="text-start w-full px-5"
                onClick={() => {
                  setAllContacts((prev) => prev.filter((_, i) => i !== idx)); //sirf wo rakho jinka idx i ke barabar na ho
                }}
              >
                <i
                  id={idx}
                  className="ri-delete-bin-line cursor-pointer text-red-500"
                ></i>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactForm;
