import { connect } from "react-redux";
import { getFilteredContacts } from "../../../redux/phoneBook/filter/filterSelectors";
import { getLoader } from "../../../redux/phoneBook/loading/loaderSelectors";
import LoaderContacts from "../../loaders/LoaderContacts/LoaderContacts";

import ContactItems from "./ContactList/ContactItems";

const Contacts = ({ items, deleteContact, loader }) => {
  return (
    <>
      <h2 >
        Contacts
      </h2>
      <div >
        {loader ? (
          <LoaderContacts />
        ) : (
          <ul >
            {items?.map((contact) => (
              <ContactItems
                contact={contact}
                key={contact.id}
                deleteContact={deleteContact}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
const mapState = (state) => ({
  loader: getLoader(state),
  items: getFilteredContacts(state),
});
export default connect(mapState)(Contacts);
