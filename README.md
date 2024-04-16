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

## Reducers

- Reducers are the alternative way of implementing the contexts in React. The main advantage of using Reducers is that the implementation is scalable and effective. Whereas using the `useState()` hook in comparatively less scalable because the logic to update the variables has to be taken individually. For example, while updating the cart, it involves in updating the `cartItems`, `cartCount`, `cartTotal` variables which has to be updated individually when `useState()` hook is used. The same can be done in a more effective way by using `useReducer()` way of implementing it.
- Though most of the code seems similar with `useState()` and `useReducer()`, the latter is more effecient.
- The `useReducer()` hook takes 2 arguments and returns 2 variables

  ```javascript
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  ```

  2 Arguments are:

  - `Reducer function`: The logical implementation of what has to be done when a specific type is passed.

    ```javascript
    const cartReducer = (state, action) => {
      const { type, payload } = action;

      switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
          return {
            ...state,
            ...payload,
          };

        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
          return {
            ...state,
            ...payload,
          };

        default:
          throw new Error(`Unhandled type ${type} in cartReducer`);
      }
    };
    ```

  - `INITIAL_STATE`: The deafult values of all the context variables
    ```javascript
    const INITIAL_STATE = {
      isCartOpen: false,
      cartItems: [],
      cartCount: 0,
      cartTotal: 0,
    };
    ```

  2 return variables are

  - `state`: The state variable will be returned which holds the values that we have passed as the initial value as an argument to the useReducer() hook.
    ```javascript
    const { cartItems, isCartOpen, cartCount, cartTotal } = state;
    ```
  - `dispatch`: The dispatch function when called, hits the reducer function that has been passed as an argument to the useReducer() hook. It takes an object as an argument, which should contain a `type` -> the action that has to be done and the `payload` -> the updated data that needs to be passed further

    ```javascript
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
    ```

- To retreive the values that has been dispatched by the componenets, we can use the same `useContext()` hook which gives the desired values back to us.
  ```javascript
  const { currentUser } = useContext(UserContext);
  ```

## Redux

- The whole idea of using `react-redux` is to have one `root-reducer` which links with all the individual reducers that returns all the required data as a `state`. When an `action` is fired from the UI component, the corresponding `action-type` will dispatched and `state` will be updated (The action dispatched once will be sent to all the reducers even though its irrelevant to a specific reducer and only the relevant reducer matching the action-type will be triggered). Added adavantage of using redux is additional middlewares can be added which helps in monitoring the flow/state or add the persist functionality. With `redux-react` package, it gives 2 functions `useDispatch` and `useSelector`

  - Previously `useReducer()` returned the `dispatch` method for each component but here, the `useDispatch()` will give the `dispatch` method. Once these are called with the corresponding action functions, the action will be sent to all the reducers and respective reducer matching the action type will be executed.

    ```javascript
    import { useDispatch } from "react-redux";
    const dispatch = useDispatch();
    ```

  - `useSelector()` helps in connecting the corresponding `selector` method which returns the desired `data` from the `state`.

    ```javascript
    import { useSelector } from "react-redux";
    import { selectCategoriesMap } from "../../store/categories/category.selector";

    const categoriesMap = useSelector(selectCategoriesMap);
    ```

  ### Following are the files required to create a react-redux based state

  - `category.action.js`

    ```javascript
    import { CATEGORIES_ACTION_TYPES } from "./category.types";

    import { createAction } from "../../utils/reducer/reducer.utils";

    export const setCategories = (categoriesArray) =>
      createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
    ```

  - `category.reducer.js`

    ```javascript
    import { CATEGORIES_ACTION_TYPES } from "./category.types";

    export const CATEGORIES_INITIAL_STATE = {
      categories: [],
    };

    export const categoriesReducer = (
      state = CATEGORIES_INITIAL_STATE,
      action = {}
    ) => {
      const { type, payload } = action;

      switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
          return { ...state, categories: payload };
        default:
          return state;
      }
    };
    ```

  - `category.selector.js`

    ```javascript
    import { createSelector } from "reselect";

    const selectCategoryReducer = (state) => state.categories;

    export const selectCategories = createSelector(
      [selectCategoryReducer],
      (categoriesSlice) => categoriesSlice.categories
    );

    export const selectCategoriesMap = createSelector(
      [selectCategories],
      (categories) =>
        categories.reduce((acc, category) => {
          const { title, items } = category;
          acc[title.toLowerCase()] = items;
          return acc;
        }, {})
    );
    ```

  - `category.types.js`

    ```javascript
    export const CATEGORIES_ACTION_TYPES = {
      SET_CATEGORIES: "category/SET_CATEGORIES",
    };
    ```

## reselect

- One disadvantage with `redux` is, once the `dispatch` gets called, the `useSelector()` gets triggered and the components using the state forced to re-render which is unnecessary when a component's state data is unchanged. To avoid this scenario `reselect` package can be used. The main logic with it is `memoization` which caches the data and updates the data only if the reference is changed. This way the unnecessary re-render of the component can be avoided and improve the efficiency. Refer the code from above.

## redux-persist

- To persist the data from previous session we can leverage `redux-persist` package which manages and stores the data in local storage and retreives on load. The configuration of this packages goes in the middleware/store.js

  - In `store.js`

    ```javascript
    import { compose, createStore, applyMiddleware } from "redux";
    import { persistStore, persistReducer } from "redux-persist";
    import storage from "redux-persist/lib/storage";

    // import { loggerMiddleware } from "./middleware/logger";
    import logger from "redux-logger";
    import { rootReducer } from "./root-reducer";

    const persistConfig = {
      key: "root",
      storage,
      // Blacklist the reducers that doesn't need the local persistance
      // Here as the userReducer is anyways persisted with firebase/firestore,
      // we can blacklist that specific reducer
      blacklist: ["user"],
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    // The shortcircuting logic helps in identifying the env type but it return only true or false,
    // To get the actual logger object we use filter with Boolean type.
    const middleWares = [
      process.env.NODE_ENV !== "production" && logger,
    ].filter(Boolean);

    const composeEnhancer =
      (process.env.NODE_ENV !== "production" &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
      compose;

    const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

    export const store = createStore(
      persistedReducer,
      undefined,
      composedEnhancers
    );

    export const persister = persistStore(store);
    ```

  - In `index.js`

    ```javascript
    import React from "react";
    import ReactDOM from "react-dom/client";

    import { Provider } from "react-redux";
    import { BrowserRouter } from "react-router-dom";
    import { store, persister } from "./store/store";
    import { PersistGate } from "redux-persist/integration/react";

    import "./index.scss";
    import App from "./App";
    import reportWebVitals from "./reportWebVitals";

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          {/* loading={null} makes sure the app is idle until PERSIST, REHYDRATE actions are done. */}
          <PersistGate loading={null} persistor={persister}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
    ```

    ```javascript
    import { store, persister } from "./store/store";
    import { PersistGate } from "redux-persist/integration/react";

    root.render(
      <React.StrictMode>
        <Provider store={store}>
          {/* loading={null} makes sure the app is idle until PERSIST, REHYDRATE actions are done. */}
          <PersistGate loading={null} persistor={persister}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    );
    ```

## redux-thunk

`redux-thunk` supports async functionality to the flow. To get an information from an external API, we can leverage async for better performance. It acts as a middleware which takes the thunk function and further dispatches it to the relevant action type.

Following are the changes needed to support `redux-thunk`:

- In `store.js`, update the following content
  ```javascript
  import thunk from "redux-thunk";
  const middleWares = [
    process.env.NODE_ENV !== "production" && logger,
    thunk,
  ].filter(Boolean);
  ```
- In `category.action.js`, observe the below changes. Here 4 new functions are being created with new action types, which denote start, success and failed state, additionally the 4th function itself is the thunk supported async function, that dispatches the corresponding functions even if it is of type async.

  ```javascript
  import { CATEGORIES_ACTION_TYPES } from "./category.types";

  import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
  import { createAction } from "../../utils/reducer/reducer.utils";

  // When redux-thunk is not used
  // export const setCategories = (categoriesArray) =>
  //   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

  export const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

  export const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    );

  export const fetchCategoriesFailed = (error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

  // Thunk convention to suffix the function name with "Async"
  export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesFailed(error));
    }
  };
  ```

- In `category.reducer.js`, following code has to be updated
  ```javascript
  export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
  };
  ```
  ```javascript
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
  ```
- In `category.types.js`, update the following content

  ```javascript
  export const CATEGORIES_ACTION_TYPES = {
    FETCH_CATEGORIES_START: "category/FETCH_CATEGORIES_START",
    FETCH_CATEGORIES_SUCCESS: "category/FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_FAILED: "category/FETCH_CATEGORIES_FAILED",
  };
  ```

- In `shop.component.jsx`, update the following code such that the component is now free from dealing with async related tasks and everything is handled by the async thunk code in the `action` files.

  ```javascript
  import { fetchCategoriesAsync } from "../../store/categories/category.action";

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    // When redux-thunk is not used
    // const getCategoriesMap = async () => {
    //   const categoriesArray = await getCategoriesAndDocuments();
    //   dispatch(setCategories(categoriesArray));
    // };
    // getCategoriesMap();
  }, []);
  ```

## redux-saga

`redux-saga` is similar to the `redux-thunk` but sagas can handle much complex async flows. In the flow, when the actions are dispatched, those will hit the middleware and then hit the reducers first before the sagas, then the action hits the saga which further connected with the middleware again. Here a saga can dispatch a new action and a saga can call another saga. Refer video 174 for more details.

- Few most used methods from `redux-saga` package are `takeLatest`, `all`, `call`, `put`.

  - `all` - It takes list as an argument, any methods passed as items in the list within call method (like `[call(someFunction), call(someFunction2)]`) will be listened and finishes only if all the functions within the list all completed.
  - `call` - In sagas flow, to invoke/call any method, we use `call()` method. We pass the function definition (can be normal function, generator function or async function) as first argument, any parameters that has to be passed to the function definition will passed as arguments following the first argument.
  - `put` - It acts as a dispatch method in Sagas.
  - `takeLatest` - It takes 2 arguments, the action that it has to monitor goes in first argument and the method goes in the second argument.

- Need to create a new file named `root-saga.js`

  ```javascript
  import { all, call } from "redux-saga/effects";
  import { categoriesSaga } from "./categories/category.saga";

  // when the webpage gets loaded initially this function gets executed from the store and further initiates the functions metioned in the all's list.
  export function* rootSaga() {
    yield all([call(categoriesSaga)]);
  }
  ```

- Following updates are needed in order to instantiate `redux-saga`

  ```javascript
  // we should either use saga or thunk but not both
  import createSagaMiddleware from "redux-saga";

  import { rootSaga } from "./root-saga";

  const sagaMiddleware = createSagaMiddleware();

  const middleWares = [
    process.env.NODE_ENV !== "production" && logger,
    sagaMiddleware,
  ].filter(Boolean);

  sagaMiddleware.run(rootSaga);
  ```

- A saga file `category.saga.js` has to be created as below

  ```javascript
  import { takeLatest, all, call, put } from "redux-saga/effects";

  import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

  import {
    fetchCategoriesSuccess,
    fetchCategoriesFailed,
  } from "./category.action";

  import { CATEGORIES_ACTION_TYPES } from "./category.types";

  // Generator function which handles the main async calls and in turn dispatches the relevant actions based on the result
  export function* fetchCategoriesAsync() {
    try {
      const categoriesArray = yield call(
        getCategoriesAndDocuments,
        "categories"
      );
      yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      yield put(fetchCategoriesFailed(error));
    }
  }

  // Generator function that keeps checking for the action type mentioned within the takeLatest method and if multiple same action types are found, the latest will be considered. Only after identifying the action type, the function definition will be executed.
  export function* onFetchCategories() {
    yield takeLatest(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
      fetchCategoriesAsync
    );
  }

  // This method will be initiated from the root-saga file. Only after all the methods mentioned in the all's list, the next line will be executed.
  export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
  }
  ```

  - Now as the `takeLatest` method is listening for start action to fetch and updated the categories, the component where the categories list is needed has to dispatch the start action.

## Generators in JS

- The generator functions add the extra ability to pause and resume the flow within its function using the `yield` keyword and the `next()` methods. The function returns only one yield statement at a time when next() method is called on a generator function. Mind the `*` after the function definition => `function* funcName() {}`.
- Example

  ```javascript
  function* gen(args) {
    yield agrs * 10;
    yield args * 20;
    return 100;
  }

  const g = gen(5); // A generator object will be returned upon calling the gen function

  g.next(); // 5 * 10 => {value: 50, done: false} will returned and the execution gets paused until next() is called
  g.next(); // 5 * 20 => {value: 100, done: false}, as the return statement is still pending, done is still false
  g.next(); // {value: 100, done: true}, as there is nothing else to execute within the function, done is true

  // If a return isn't specified, by deafult JS return undefined. So, the ouput would be {value: undefined, done: true}
  ```

## redux-toolkit

- Using redux-thunk or saga introduces a lot of boiler plate code to our application, to avoid that a new package has been introduced by redux team called `redux-toolkit` which simplifies the usage of redux entirely with less boiler plate code. Just to remember that there will not be any code flow changes with toolkit, the code implementation part has been made easy with the redux-toolkit package.
- To initialize the `redux-toolkit`

  ```javascript
  import { configureStore } from "@reduxjs/toolkit";
  import { rootReducer } from "./root-reducer"; // Root reducer created by us

  export const store = configureStore({
    reducer: rootReducer,
    // middleware: middleWares // When mentioned, overrides the default middlewares from redux toolkit
  });
  ```

- In `reducer.js` file, instead of creating the reducer and manually setting the action types along with the logic, toolkit provides `createSlice()` method that gives all the required feasible options.

  ```javascript
  import { createSlice } from "@reduxjs/toolkit";

  const INITIAL_STATE = {
    currentUser: null,
  };

  export const userSlice = createSlice({
    name: "user", // The name space, refers to user in 'user/SET_CURRENT_USER' action type.
    initialState: INITIAL_STATE, // Initial state of the user reducer
    reducers: {
      setCurrentUser(state, action) {
        // The function name will be considered as the action function
        state.currentUser = action.payload; // We know that react doesn't support mutability. Though itseems like we are mutating the data, redux-toolkit under the hood uses IMMER package which updates the state and creates a new object out of it serving the main purpose.
      },
    },
  });

  export const { setCurrentUser } = userSlice.actions; // Returns the action function when `actions` is called upon destructuring it.

  export const userReducer = userSlice.reducer; // Returns the actual reducer of this store when reducer is called on the slice.
  ```

- By default `redux-toolkit` is designed to not allow serialisable data for which a default middleware is present called `serialisableCheck` that throws error when object type of data is passed. To workaround it we can disbale it with the below code and custom middlewares can also be added along with the default middlewares.
  ```javascript
  export const store = configureStore({
    reducer: rootReducer,
    // When mentioned overrides the default middlewares from redux toolkit
    // getDefaultMiddleware method is given by the toolkit on middleware key
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Making the serializableCheck to false which true by default that accepts only non-serializable data like string, int etc but not class' constructor objects like UserImpl from firebase.
      }).concat(middleWares), // Adding out custom middlewares to the default middlewares list.
  });
  ```
- So 2 solutions to avoid the `non-serialisable` data passed error are

  1. Create a custom middleware or disable the `serialisableCheck`
  2. Convert the class object into non-serialisable supported data and pass it.

- 3 default middlewares available with redux-toolkit are `redux-thunk`, `serialisableCheck`, `immutable`

## Environment variables in react

- By default the react app (when created using `create-app`) has the feature of reading env variables from the `.env` file.
- Convention to write an env variable is to prepend the variable with `REACT_APP_`. For example, to create an env variable with name `SECRET_KEY`, for react to actually detect it it should be written in the `.env` file as `REACT_APP_SECRET_KEY`.
- To actually read an env variable from the file, use the command as follows `process.env.REACT_APP_SECRET_KEY`.

## Typescript

- To make the code more consistent from type errors and make it predictable and readable static typing is prefered over js default dynamic typing.
- While defining the variables, we explicitly mention the type of the variable or the function parameters that we are going to define.
  ```typescript
  const myString: string = "Test String";
  const isString: boolean = true;
  const func: (a: string, b: boolean) => void = (a, b) => {};
  const func: (a: string, b: string) => string = (a, b) => {
    return a + b;
  };
  ```
- `interface` is new keyword which helps in creating a standard, expected structure to an object. Convetion to create an interface variable is prepending it with `I` like `IVariableName`.

  ```typescript
  interface ISearchBoxProps {
    onChangeHandler: (a: string) => void;
  }

  interface ISearchBox extends ISearchBoxProps {
    className: string;
    placeholder?: string; // If its optional
  }

  const SearchBox = ({
    className,
    placeholder,
    onChangeHandler,
  }: ISearchBox) => {
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e)}
      />
    );
  };
  ```

  1. Interfaces can be extended from an another interface (similar to inheritance in OOP)
  2. Interfaces can be overloaded, where we can re write the same variable name with additional parameters somewhere after the initial piece of code.

- `type`s are very similar to interfaces which goes well with functional programming style. All the type definitions with `type` are similar to the intefaces only advantage is that `types` can be `unioned` which means we can define a new type that can be combined with one or many with `|` symbol. When actually defining variabled typed with a unioned type it can hold any of the values from the unioned types.

  ```typescript
  type SearchBoxProps = {
    className: string;
    placeholder?: string; // ?: implies optional
    onChangeHandler: (a: string) => void;
  };
  ```

  - Additionally, we have third party types (like react) which gives more types for event handlers etc.

    ```typescript
    import { ChangeEvent, ChangeEventHandler } from "react";

    type SearchBoxProps = {
      className: string;
      placeholder?: string; // ?: implies optional
      onChangeHandler: ChangeEventHandler<HTMLInputElement>; // Need to mention the specific HTML Element type
      onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; // Need to mention the specific HTML Element type, using ChangeEvent gives more control over the function definition and return type.
    };
    ```

  - When a function/async call's return type is unexpected, `generics` can be used where in the definition we mention a dummy variable in angular brackets like `<T>` and when actually calling the function we pass the return type. Example scenario is with the `fetch` calls.

    ```typescript
    // Defining generic
    export const getData = async <T>(url: string): Promise<T> => {
      const response = await fetch(url);
      return await response.json();
    };

    // Invoking the function with actual generic return type
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
    };
    ```

  - The `useState` hook if passed any generic default value like Array which can hold any data types within, then typescript by default sets it to `never` data type which is opposite to the `any` data type for safety measures. So while using `useState` hook we have to specifically mention the data type.

    ```typescript
    const [monsters, setMonsters] = useState<Monster[]>([]);
    ```

  ##### \*\* _For any typescript related information refer udemy videos section and the actual code_

## GraphQL

- Helpful to query API in a much easy way with dynamic custom data selection on the result. But the backend has to be GraphQL based APIs.
- Apollo client is the library which gives the graphql capabilites.
- Following is the code to initialise an apollo client

  - Initialize the apollo/client

    ```javascript
    import {
      ApolloClient,
      InMemoryCache,
      ApolloProvider,
    } from "@apollo/client";

    const client = new ApolloClient({
      uri: "https://crwn-clothing.com/", // GraphQL server's URI
      cache: new InMemoryCache(),
    });

    // In index.js, wrap the below tag around <BrowserRouter>
    <ApolloProvider client={client}></ApolloProvider>;
    ```

  - Query an API

    ```javascript
    import { gql, useQuery } from "@apollo/client";

    const COLLECTIONS = gql`
      query {
        collections {
          id
          title
          items {
            id
            name
            price
            imageUrl
          }
        }
      }
    `;

    const { loading, error, data } = useQuery(COLLECTIONS);
    ```

  - To modify the content on the GraphQL backend, useMutation hooks can leveraged. For more information refer the documentation. [GraphQL mutations documentation](https://www.apollographql.com/docs/react/data/mutations/)

## Performance optimizations

- Do not optimize the code before hand unless it is necessary, optimizing the code comes with trade-offs like more CPU usage, memory etc.
- `useCallback()` hook can be used to memoize the function but not the function's output, this helps in avoiding re-initialisation of the function definition. Just like `useEffect()` hook useCallback also takes a second parameter which is list that look for the variables that could possibily change in the future at which the function in the useCallback should re-initialise.
- `useMemo()` hook helps in memoizing the return value of a function.
- `memo` method from react helps in memoizing the functional component and does not re-render the entire component again and again. To use just wrap around the functional component with memo method.
- `Code Splitting` is a way to download and render only the page that user needed and not the entire application's bundle.js while loading the site for the first time. To use this react gives 2 methods `lazy` & `Suspense`.
  ##### \*\* _Refer video 243 for detailed explanation to implement it_

## Deploying the site to netlify

- Use `CI= yran build` command to enable CI feature with github and netlify
- Redirects on a specific route doesn't happen on refresh in netlify, to fix it, create a new file with name `_redirects` in the `public` folder and add the following code `/* /index.html 200`, which means that whenever a refresh request hits the server with a route in the URL, netlify automatically routes it index.html and further renders the given route's page.
