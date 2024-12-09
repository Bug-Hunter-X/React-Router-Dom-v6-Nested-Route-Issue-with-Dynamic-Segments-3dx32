# React Router Dom v6 Nested Route Issue with Dynamic Segments

This repository demonstrates a bug encountered when using nested routes in React Router Dom v6 where a parent route contains a dynamic segment. The nested routes fail to render correctly unless accessed directly. 

## Bug Description
The `User` component, accessed via `/users/:userId`, only renders properly when navigating to it directly. If you try to navigate to it via another route (not shown in this simplified example), the component does not render, even though the URL updates correctly.

## Solution
The problem arises from how React Router handles dynamic segments within nested routes.  Using an `Outlet` component to render child routes within the parent route resolves the issue.

## Setup
1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.

## Steps to Reproduce
1. Navigate to `/` (Home page)
2. Attempt to navigate to a nested route that should eventually access a route utilizing a dynamic segment (e.g., a route that passes through a `User` component).
3. Observe that the nested route does not render correctly.
4. Directly navigate to `/users/:userId` (replace `:userId` with an actual ID) to see the User component correctly render.

