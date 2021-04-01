import { Container } from "react-bootstrap";
import "./App.css";
import MyNav from "./component/MyNav";

const id = process.env.REACT_APP_EMAIL_USER_ID;

function App() {
  console.log(id);
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
        <div>{id}</div>
      </Container>
    </>
  );
}

export default App;
