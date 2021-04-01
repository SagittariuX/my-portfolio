import { Container } from "react-bootstrap";
import "./App.css";
import MyNav from "./component/MyNav";
import ContactForm from "./component/ContactForm";

function App() {
  return (
    <>
      <MyNav />
      <Container style={{ height: "3000px" }}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <ContactForm />
      </Container>
    </>
  );
}

export default App;
