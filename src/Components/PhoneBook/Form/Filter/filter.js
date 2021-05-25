import React from "react";
const ClientsFilter = ({ filter, setFilter }) => {
  return (
    <label>
      Найди контакт
      <div>
        <div >
        </div>
        <input
          placeholder="Поиск"
          type="text"
          value={filter}
          onChange={setFilter}
        />
      </div>
    </label>
  );
};

export default ClientsFilter;
