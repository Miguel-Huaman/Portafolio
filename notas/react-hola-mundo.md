---
title: "Hola mundo en 'React.js'"
date: 2021-06-05
tags: react
---

# Hola Miguel Angel

````jsx
import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Miguel',
  lastName: 'Angel'
};

const element = (
  <h1>
    ¡Hola, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
````
