// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  S,
  Slide,
  Spectacle,
  Text
} from "spectacle";
// Import CodeSlide
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  reduxLogo: require("../assets/redux-logo.png"),
  fluxLogo: require("../assets/flux.png"),
  fluxFlow: require("../assets/flux-flow.png"),
  reduxFlow: require("../assets/redux-flow.png"),
  storeExample: require("../assets/store-example.png")
};

preloader(images);

const bgColor = "#222222";

const theme = createTheme({
  primary: "#F49E00"
}, {
  primary: "labmedium",
  secundary: "montserratbold",
  tertiary: "montserratregular"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor={bgColor}>
            <Image width="35%" src={images.reduxLogo.replace("/", "")}/>
            <Heading fit caps textColor="primary">
              Redux 101
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Summary
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="primary">What is it Flux?</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">What is it Redux?</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">Redux flow</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">Actions</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">Reducers</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">Store</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">Data Flow</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">React + Redux</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              What is it Flux?
            </Heading>
            <Image style={{margin: "0"}} src={images.fluxLogo.replace("/", "")} height="180px"/>
            <List>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">Made by Facebook</ListItem>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">It is pattern</ListItem>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">Helps handling data in your app</ListItem>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">Problem: Views update models. Models update other models</ListItem>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">Async events getting even worst(casacade event)</ListItem>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">Solution: Unidirectional data flow</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Flux flow
            </Heading>
            <Image style={{margin: "0"}} src={images.fluxFlow.replace("/", "")} width="100%"/>
            <Link href="https://facebook.github.io/flux/docs/overview.html#content">
              <Text padding="10px 0 0 0" italic textFont="tertiary" textColor="white">More Flux info</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              What is it Redux?
            </Heading>
            <List>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">Made by community</ListItem>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">It is pattern Flux based</ListItem>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">Single source of truth</ListItem>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">State is read-only</ListItem>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">Changes are made with pure functions(reducers)</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Redux flow
            </Heading>
            <Image style={{margin: "0"}} src={images.reduxFlow.replace("/", "")} width="100%"/>
            <Link href="http://redux.js.org/index.html">
              <Text padding="10px 0 0 0" italic textFont="tertiary" textColor="white">More Redux info</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Actions
            </Heading>
            <Text textFont="secundary" textColor="white">Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.</Text>
          </Slide>
          <CodeSlide
            transition={["zoom", "fade"]}
            lang="js"
            code={require("raw!../assets/actions.example")}
            ranges={[
              { loc: [4, 7], note: "Action types"},
              { loc: [12, 21], note: "Action creators"}
            ]}
          />
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading caps textColor="primary">
              Middlewares
            </Heading>
            <Text style={{marginTop: "0.5em"}} textAlign="justify" textFont="secundary" textColor="white">It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.</Text>
            <Text style={{marginTop: "0.5em"}} textAlign="justify" textFont="secundary" textColor="white">People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.</Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Reducers
            </Heading>
            <Text style={{marginTop: "0.5em"}} textAlign="justify" textFont="secundary" textColor="white">Reducers describe how the application’s state changes in response.</Text>
            <Text style={{marginTop: "0.5em"}} textAlign="justify" textFont="secundary" textColor="white">In Redux, all application state is stored as a single object. It’s a good idea to think of its shape before writing any code.</Text>
          </Slide>
          <CodeSlide
            transition={["zoom", "fade"]}
            lang="js"
            code={require("raw!../assets/reducers.example")}
            ranges={[
              { loc: [1, 2], note: "Import action type constants support by reducer"},
              { loc: [13, 14], note: "Create function reducer"},
              { loc: [14, 23], note: "Handle action type"},
              { loc: [23, 32], note: "Another example of handle action type"},
              { loc: [32, 34], note: "Allways return state by default"}
            ]}
          />
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Store
            </Heading>
            <List>
              <Text textAlign="justify" textFont="secundary" textColor="white">It takes care of holding on to the whole state tree. It then delegates the work of figuring out what state changes need to happen. The reducers, headed up by the root reducer, take on this task.</Text>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">Holds application state</ListItem>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">Allows access to state via <S type="italic">getState()</S></ListItem>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">Allows state to be updated via <S type="italic">dispatch(action)</S></ListItem>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">Registers listeners via <S type="italic">subscribe(listener)</S></ListItem>
              <ListItem textSize="1.1em" textFont="secundary" textColor="primary">Handles unregistering of listeners via the function returned by <S type="italic">subscribe(listener)</S></ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Store
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/store.example")}
              textSize="0.55em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Store
            </Heading>
            <Image style={{margin: "0"}} src={images.storeExample.replace("/", "")} width="80%"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Data flow
            </Heading>
            <Text style={{marginTop: "0.5em"}} textAlign="justify" textFont="secundary" textColor="white">1. You call <S type="italic">store.dispatch(action)</S></Text>
            <Text style={{marginTop: "0.5em"}} textAlign="justify" textFont="secundary" textColor="white">2. The Redux store calls the reducer function you gave it.</Text>
            <Text style={{marginTop: "0.5em"}} textAlign="justify" textFont="secundary" textColor="white">3. The root reducer may combine the output of multiple reducers into a single state tree.</Text>
            <Text style={{marginTop: "0.5em"}} textAlign="justify" textFont="secundary" textColor="white">4. The Redux store saves the complete state tree returned by the root reducer.</Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Usage with React
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/setup.example")}
              textSize="0.75em"
            />
          </Slide>
          <CodeSlide
            transition={["zoom", "fade"]}
            lang="js"
            code={require("raw!../assets/react-redux.example")}
            ranges={[
              { loc: [0, 3], note: "Import actions, component and connect redux helper"},
              { loc: [29, 33], note: "Initialize component"},
              { loc: [15, 20], note: "Map state to props"},
              { loc: [4, 14], note: "getVisibleTodos function"},
              { loc: [21, 28], note: "Bind actions with dispatch and add it to props"}
            ]}
          />
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading caps textColor="primary">
              Demo
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/demo-instructions.sh")}
              textSize="1em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={1} caps textColor="primary">
              Thanks
            </Heading>
            <Link href="https://github.com/JonatanGarciaClavo/redux101">
              <Text padding="50px 0 0 0" italic textFont="tertiary" textColor="white">Docs and examples: https://github.com/JonatanGarciaClavo/redux101</Text>
            </Link>
            <Link href="http://redux.js.org/index.html">
              <Text padding="50px 0 0 0" italic textFont="tertiary" textColor="white">Redux docs</Text>
            </Link>
            <Link href="mailto:jonatan.garcia@mobgen.com">
              <Text padding="50px 0 0 0" italic textFont="tertiary" textColor="white">Email: jonatan.garcia@mobgen.com</Text>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
