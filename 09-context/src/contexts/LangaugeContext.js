import React from 'react';

export default React.createContext('english');

/*
The reason why we create a new file for this context is because we will only export this to the components that care about this. Which is the App, Field and Button components.
We can use any valid js value functions,arrays etc
 */