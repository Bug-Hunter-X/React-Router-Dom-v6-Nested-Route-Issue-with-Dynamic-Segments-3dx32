```javascript
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users/>}>
          <Route path="/:userId" element={<User />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <Outlet/>
    </div>
  );
}

function User() {
  return <h1>User</h1>;
}
```