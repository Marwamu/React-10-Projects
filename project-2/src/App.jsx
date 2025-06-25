import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm.jsx";
import ContactHeader from "./Components/ContactHeader/ContactHeader.jsx";
import Navgation from "./Components/Navagation/Navgation.jsx";

function App() {
  return (
    <>
      <div>
        <Navgation />
              <main className="container"></main>
        <ContactHeader/>
        <ContactForm/>
      </div>
    </>
  );
}

export default App;
