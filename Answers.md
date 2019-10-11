# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React.js attempts to make it much easier to create interactive UIs and single-page applications. Some examples: 
It provides JSX that makes it easier mix html with JavaScript. Styled components allow a component to include its own CSS.
React itself is modular with many features that can be added through yarn or npm.

2. What does it mean to think in react?

    React is built using encapsulated components. Thinking in React turns the inheritance model upside-down
and forces you to think through your site's design in a modular fashion as you build it.

3. Describe state.

    State is an object that is managed within a component (vs props that are passed to it).

4. Describe props.

    Props is short for "properties." In react, properties can be passed down to components, but not back up
or shared directly with other components.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

    A side-effect is something outside the scope of something being executed. A network request, for example,
might be outside a function that needs to use it. The request can be triggered with useEffect().
