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
- React only re-renders the Component if it finds any change in the object reference. It doesn't re-render if the object's data is just re-assigned (i.e., the reference of the object remains unchanged). To accomplish this, react provides a built method `this.setState({property: 'newValue'})`. This makes sure to update the state with new object reference, which then forces the react to re-render the component with the updated values.
