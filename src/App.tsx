import "./styles.css";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardInput,
  CardButton,
  CardLink
} from "./components/styled-card";
export default function App() {
  return (
    <div className="App">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Airbnb</CardHeading>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            <CardInput placeholder="Username" type="text" required />
          </CardFieldset>
          <CardFieldset>
            <CardInput placeholder="Password" type="password" required />
          </CardFieldset>

          <CardFieldset>
            <CardButton type="button">Log In</CardButton>
          </CardFieldset>
          <CardFieldset>
            <CardLink>I don't have an account</CardLink>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </div>
  );
}
