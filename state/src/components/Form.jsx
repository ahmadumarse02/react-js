import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  return (
    <>
      <label>
        First name:
        <input className="border outline-none px-4 py-2 mr-4"
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input  className="border outline-none px-4 py-2 mr-4"
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input  className="border outline-none px-4 py-2"
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>

      <p>FirstName: {form.firstName} </p>
      <p>LastName: {form.lastName} </p>
      <p>Email: {form.email}</p>
    </>
  );
}
