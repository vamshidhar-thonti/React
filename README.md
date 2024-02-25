<center><h1>React Notes</h1></center>

---

## Declarative vs Imperative

### Imperative:

- With _Imperative_ coding, we instruct what has to be done at each and every step. Like we do with the vanilla JS coding (we modify the DOM manually).

### Declarative:

- With _Declarative_ coding, we just provide data and how we want to display the data. The framework then takes care of rendering the DOM effectively.

## React Concepts

- Don't touch the DOM. React will do it.
- Build websites into smaller blocks/components which are re-usable.
- One way data flow (towards the child nodes but not the other way)
- React can handle only the UI, rest should be handled by us like how the data has to be fetched.

## Important things to remember while developing a React Application

1. Decide on Components.
2. Decide the State and where it lives.
3. What changes when state changes.

## yarn to npm command mappings

- Install dependencies from package.json: `yarn` => `npm install`
- Install a package and add to package.json: `yarn add package` => `npm install package --save`
- Install a devDependency to package.json: `yarn add package --dev` => `npm install package --save-dev`
- Remove a dependency from package.json: `yarn remove package` => `npm uninstall package --save`
- Upgrade a package to its latest version: `yarn upgrade` => `npm update --save`
- Install a package globally: `yarn global add package` => `npm install package -g`

## npm vs npx

- _npm_ installs the specified/latest package version on to the computer and the package exists till its get uninstalled.
- _npx_ installs the specified/latest package version on to the computer, executes the commands. After successful execution, the package will be removed from the computer, this way the on the go packages can be installed and removed without cluttering the disk space.

## React Scripts

1. **start** script lets us run the react application through the local dev server
2. **build** script takes all the frontend files, and make a compact file (index.html) which includes the content of all the existing files. Build folder will created which contains build folders. Internally build uses _Babel_ and _webpack_ to efficiently optimizing the code.
3. **test** script will be used for testing the user written code. (unit testing)
4. **eject** script gives full control over the React app configuration in order to customize Babel and Webpack based on our needs. For basic project versions **DO NOT EJECT**.

## React Components

- Components in React can be declared in 2 ways:
  1. Through class definition which extends a Component class `class App extends Component() {}`.
  2. Through function definition which are also called **Hooks**.

## Component State

- `this.state` is an built-in variable provided by React which specifically used to hold data related to its component. It should be definied in the constructor method.
  - `constructor() {}` method is similar to just any other language which gets invoked during the class instantiation.
  - ```javascript
    this.state = {
      property: "value",
    };
    ```
    Its definition is just like a javascript object.
  - To use any of the state data, just use `{this.state.propertyName}`.
- HTML in an react app is called JSX, its just an extension of HTML that can be written in js files within a react app.
- All JSX elements supports the event handlers similar to that of HTML elements. Like `onClick, onChange... etc`.
- React only re-renders the Component if it finds any change in the object reference. It doesn't re-render if the object's data is just re-assigned (i.e., the reference of the object remains unchanged). To accomplish this, react provides a built-in method `this.setState({property: 'newValue'});`. This makes sure to update the state with new object reference, which then forces the react to re-render the component with the updated values. setState() method does shallow merging of the object.
- While shallow merging, always make sure the data type is the same as the previous one.
- `setState()` is an asynchronous method. Remember that the sequential execution doesn't happen.
- Along with `setState()` taking the object as an argument, it can also take 2 callback functions as arguments.
  1. The first callback function gives 2 parameters `state` (current state of the component) and `props`. This callback function returns the new object.
  2. The second callback function is **optional**. It executes only after the completion of the first call function and the state got updated successfully.
  - ```javascript
    this.setState(
      (state, props) => {
        // state - current state object of the component (optional argument)
        // props - a property/attribute that is associated with a custom component. Like `className`, `type` on pre-defined React components. At the component level the props can be accessed with `this.props` which returns an object.
        return {
          property1: "value1",
          property2: "value2",
        };
      },
      () => {
        // This callback function executes only after the state is successfully updated (optional)
        console.log(this.state);
      }
    );
    ```
- It is important to mention the `key` attribute on react JSX element so that react can uniquely identify the specific element and re-render it. The key's value should be unique from the rest of the similar elements.

## Single Page Applications (SPA)

- Previously for each route there used to be different html, css, js files which has to be rendered by the browser each time user requests for it. As it has to fetch all the relevant files, render and then display on the UI, it takes some time and is not so efficient.
- So to overcome that problem we have SPAs. React apps are SPAs. Here on the initial request the files (which also includes react framework) will be fetched but when a new route is needed the same page will be re-rendered with new components (React takes care of this process of removing, updating and adding components to the page). This way it is efficient to load the pages while making very few calls to the server.
- Always use `curly braces {}` to include javascript code.

## React Lifecycle methods

- `componentDidMount()`: This method gets invoked when the component is placed on the DOM.
- `componentDidUpdate()`: This method gets invoked when there is an update through `this.props`, `setState()`, `forceUpdate()`
- `componentWillUnmount()`: This method gets invoked where the component gets removed from the page. Through which the existing eventListeners can be removed to avoid any memory leaks.

> _For more information on React's class based Lifecycle methods, refer this [page](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)_

## Optimizations

- If the function remains same, prefer defining it rather than using it as anonymous callback functions. It doesn't show any effect with an app having one or two such anonymous callback functions but it does impact when the number grows.
- Leverage js advanced concepts to make code look clean and efficient. Like using de-structuring, array methods like map, filter... etc

## Components

- Components can be seen as an element that can be reused to serve a different purpose. e.g: a search bar can be a component which can be reused more than one time in an application, a card component once created can be reused at an another part of the application to serve a different purpose.
- While developing components it is better to see if it can be generalized and reused.
- Always return only one top level html on custom components (no siblings at the top level)
- Never include logic in the component. Component should just have the data to be rendered and returned.
- Just like the `setState()` re-renders a component, any change in the `this.props` values will trigger render method. So to update the UI, its important to update either from `setState()` method or the `props`.
- Except for the standard attributes like `type='search', type='input'...`, pass the values as props to the component.
- CSS in React is global even when the css file is located in a different component folder. When loading CSS, React appends all styles into a single file. So, the classNames shouldn't be overlapped. (To make the CSS style restricted to a component, css in js library can be used)

## Functional Components

- React Functional components are just arrow functions `const App = () => {}` that doesn't have any life cycle methods, constructor or render methods like Class based components. Whatever HTML-JSX returned by the Functional component will be rendered on the UI.
  - ```javascript
    const App = () => {
      return (
        <div className="App">
          <h1 className="app-title">Monsters Rolodex</h1>
        </div>
      );
    };
    ```
- **Pure Functions:** Functions that doesn't modify or rely on the external variables and in-turn doesn't produce any side effects (_when an external value is being modified by a function_) are Pure Functions. The output from these functions solely depends on the parameters passed to the function and the output remains same given the same parameters are passed.

  - ```javascript
    // Isolated from external variables
    const pureFunction = (a, b) => {
      return a + b;
    };

    pureFunction(2, 4); // Always returns 6
    ```

- **Impure Functions:** Functions that modify or rely on the external variables which causes the output of the function to change whenever the external variable changes. Also if a function changes a variable's value, its considered to be an Impure Function.

  - ```javascript
    let c = 3;

    // Function returns a new value when c value changes
    const impureFunction1 = (a, b) => {
      return a + b + c;
    };

    impureFunction1(2, 4); // returns 9; if c = 4, returns 10

    // Function modifies the external variable c which causes the side effect
    const impureFunction2 = (a, b) => {
      c = a + b;

      return a * b;
    };

    impureFunction2(2, 4); // always returns 8 but c gets modified to 6 which is a side effect
    ```

- Functional components runs the entire function to render or re-render a component.
- re-rendering happens only when there is a change in the state value from the previous value or when the props (parameters passed to the functional component) changes. If the state value is same as previous react doesn't run the functional component.
- **Infinite re-rendering** causes when an external API call is made within the functional component. It happens because, the API result will be stored in a different memory location than the previous one, so even though the received objects are equal the strict equality (which is what react do to identify the change) will not be true with different object references. So avoid using `fetch()` within functional components. To resolve this react provides another hook called `useEffect()` which causes the side effect outside the functional component's scope.

- ### Hooks:

  - `useState()` method is used in Functional based components, the parameter passed to this method will be the default value. It can store only one value, for a different value another hook has to be used. It returns 2 values, the value and a method to set a new value.
  - `useEffect()` method is used to create side effects. It only triggers when the **mentioned** props or state values modified. It takes 2 arguments: _callback method_ and a _list of values_. The callback function is called only when the values mentioned in the list (2nd argument) gets modified. If the list is empty the callback function executes only once during the app initial run.
  - `useNavigate()` hook is programtic way of implementing React's `Link` component. Use it as a handler and pass the desired route as the parameter and pass it to the Event Handlers.

    ```javascript
    import { useNavigate } from "react-router-dom";

    const navigate = useNavigate();
    const onNavigateHandler = () => navigate("shop/hats");

    <DirectoryItemContainer onClick={onNavigateHandler}>
      {REST_OF_THE_JS_CODE}
    </DirectoryItemContainer>;
    ```

- Functional components give only 2 arguments:
  1. `props`: props from the HTML-JSX elements
  2. `forwardRef`: **Yet to be discussed** Will not be used as often as props.

## Real DOM vs Virtual DOMS:

- Real DOM is tree of nodes presented as a parent child relationship. Its expensive when the real DOM needs to be updated/re-flow.
- Virtual DOM is javascript representation of Real DOM, its just a copy of Real DOM.
- This is what happens when there is a change detected by React:
  - React maintains 2 copies of Virtual DOMs: _Virtual DOM snapshot_ which is the original copy of React DOM before changes are applied and _Virtual DOM copy_ which is the copied version of Virtual DOM snapshot. The detected changes will applied to Virtual DOM copy by doing some diffs and batching to determine new Virtual DOM once that is done it then updates the Real DOM as efficient as possible.

## Router (Routing in React):

- Navigating to a new page when the URL path is modified.
- For organizing the routes better, a `routes` directory can be used under `src` directory, which holds all the Route related files.
- `BrowserRouter` is basic router which gives the ability of storing the current location of the URL using browser's in-built history stack. The main `App` component in `index.js` has to be inside the **BrowserRouter**.
  - ```javascript
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ```
- `Routes` is component that defines the routes of the application. All individual routes should be withing the Routes component.
  - ```javascript
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    ```
- `Route` is component that specifically used to be define a URL route. `path` attribute is to specify the relative URL and `element` attribute is to specify the entire component.
  - ```javascript
    <Route path="/" element={<Home />} />
    ```
- `Outlet` component is helpful in Routes when there is an expected dynamic component that keeps changing. For example, navigation bar remains on the page for all the routes, so for the navigation component we define the `Outlet` component. Any child route in the Routes will be replaced with the `Outlet` component based on the route path. Routes can nested as deeply as possible.
  - `index` attribute is to tell that route should be on the corresponding parent route.
  - `path` attribute defines the subroute on the parent route, if parent route is `/shop`, and the child route has the path attribute `men`, then entire path for sub route would be `/shop/men`
  - `element` attribute defines the Component which we want to associate the path with.
- `Fragment` is an empty component from react. Instead of wrapping around the code with div when there is a possibility of sibling elements, we can use a Fragment component, it doesn't introduce any div element and still we can have sibiling elements within a Fragment.
- `Link` is a component provided by react-router-dom, which can be used to create an anchor tag with an extra ability to specify the route with `to` attribute.

  - ```javascript
    <Link className="nav-link" to="/link1">
      <div>Link1</div>
    </Link>
    ```

- While using `form` be sure make the data circularly dependent with the help of `useState()`. As per the example below a ny change in the input field triggers the `setFormFields` method which re-assigns all the values, those values will be set as the value in the corresponding input fields.

  - ```javascript
    const SignUpForm = () => {
      const [formFields, setFormFields] = useState(defaultFormFields);
      const { displayName, email, password, confirmPassword } = formFields;

      const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
      };

      return (
        <div>
          <h1>Sign Up with your Email and Password</h1>
          <form onSubmit={() => {}}>
            <label>Display Name</label>
            <input
              type="text"
              onChange={handleChange}
              name="displayName"
              value={displayName}
              required
            />

            <label>Email</label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={email}
              required
            />

            <label>Password</label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              value={password}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
              required
            />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
    };
    ```

## Context in React:

- In order to pass data from one component to another component, one way acheiving it is to pass it to the parent component till it reaches the required component which is called `Drilling`. But doing so, the data is being available to the components which doesn't need it. To avoid that we need something called `Context`.
- `Context` is also a component that wraps around the component where the data can be accessed.
- `useContext` hook can be used to access the data updated in the context by a different component. For example, after successful sign in, firebase gives a user object which holds all the information of the logged in user. To use the same data in the different component like navigation to display SignOut option, we can use this hook to update the user object in the object and then the same hook can be used to access the data in different component without being drilled through parent components.

  - The following code snippet shows, how to create a context

    ```javascript
    import { createContext } from "react";

    // Initialize a context using CreateContext method with default null initial values. Where currentUser holds the actual information and setCurrentUser is the setter function which helps in assigning the user object to the currentUser variable.
    export const UserContext = createContext({
      currentUser: null,
      setCurrentUser: () => null,
    });

    // Each context should have provider, which takes children that needs to be wrapped around the context's provider. useState hook can be used to initialize the variable with a setter function. Whenever the User Provider in used in the index.js as a wrapper it return the UserContext.Provider component with its children wrapped around along with the initalised curerntUser object and its setter function.
    export const UserProvider = ({ children }) => {
      const [currentUser, setCurrentUser] = useState(null);
      const value = { currentUser, setCurrentUser };

      return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
      );
    };
    ```

  - To use the context in any of the components, the Context's Provider has to be wrapped around the App component.

  ```javascript
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
  ```

  - To set the value to the context, below is the code

    ```javascript
    import { useContext } from "react";
    import { UserContext } from "../../contexts/user.context";

    // Here the setter function is being fetched from context.
    const { setUserContext } = useContext(UserContext);

    // Using the setter function, the actual object has been assigned through it.
    setUserContext(userObject);
    ```

  - To fetch the value from the context, below is the code

    ```javascript
    import { useContext } from "react";
    import { UserContext } from "../../contexts/user.context";

    // Here the currentUser value itself is being called.
    const { currentUser } = useContext(UserContext);
    ```

  - `onAuthStateChanged` method in react is used to track the authentication changes happening on the singleton auth object (returned from getAuth() method). It takes 2 arguments, auth object and the callback function. So, as soon as the auth change happens the callback function gets triggered.

  - Never add 2 different logics in the same `useEffect()` hook even though the dependency array is same for both the logics. For example, if we want to perform 2 different logics when the value of `cartItems` gets updated, have those 2 logics in a 2 different useEffect hooks.

## Patterns in React:

- In order to use async functions in useEffect hook, instead making the function within the hook as async, we can create a new async function inside the function and then call it.
- ```javascript
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };

    getCategoriesMap();
  }, []);
  ```

## CSS in JS

- To use CSS in JS we create a file with jsx or js extension and the `styled-components` library will be used which have all the relevant html elements.
- We just create a React component with desired styles, export and use it at the desired element.
- In CSS, we write the styles as

  ```css
  .navigation-container {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  ```

- The equivalent style of the above CSS in `CSS in JS` is
  ```javascript
  export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  `;
  ```
- If any pre-built React components has to be used (say `Link` React component) we use

  ```javascript
  styled(Link)`Styles Code Goes Here`;
  ```
