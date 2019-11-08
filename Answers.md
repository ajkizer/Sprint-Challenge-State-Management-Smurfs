1. What problem does the context API help solve?
   -It allows us to pass props to any of our components without having to prop drill
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   -actions are the commands that tell your app what to do. Reducers are the instructions for the actions. Store is where the information created/updated by the reducers is stored.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?  
   -Application state is the state of the entire application, whereas component is only affected at the component level. Component state is useful when each component should have it's own state, application state is more of a general purpose use.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   -redux thunk allows us to utilize async functions without crashing the app. It uses phases in which the app is operating to determine what the next course of action is.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
   -I love redux because I feel it will prove to be powerful when building large applications (build week, portfolio projects, etc.);
