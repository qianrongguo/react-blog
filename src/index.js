import React from "react";
import renderDOM from "react-dom";

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
}

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);
// This is fake account data.
// It mimics data that might be loaded from e.g. a server or database.
const fakeAccounts = [
    {
        id: 1,
        name: "One",
        email: "fake.email@example.com"
    },
    {
        id: 2,
        name: "Two",
        email: "fake.email@example.com"
    }
];

renderDOM.render(
    element,
    document.getElementById("root")
);
