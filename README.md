# REACT NOTES

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

- `ComponentDidMount()`: This method gets invoked when the component is placed on the DOM.
- MORE TO BE ADDED HERE

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
