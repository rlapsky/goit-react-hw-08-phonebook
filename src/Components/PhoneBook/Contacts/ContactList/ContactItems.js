import React, { memo } from "react";
const ContactItems = ({ contact, deleteContact }) => {
  const { name, number, id } = contact;
  return (
    <>
      <li >
        <p >
          {name}-{number}
        </p>
        <button
          id={id}
          type="button"
          onClick={deleteContact}
        >
          DELETE
        </button>
      </li>
    </>
  );
};

export default memo(ContactItems);
