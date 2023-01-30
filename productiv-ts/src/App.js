import React from "react";
import TodoApp from "./TodoApp";
import QuoteApp from "./QuoteApp";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

/** Site application.
 *
 * App -> TodoApp
 **/

function App() {
  return (
    <main className="App">
      <header className="container-fluid pt-4 pb-1">
        <div className="container">
          <h1>Prøductïv</h1>
          <p className="lead">The best name in todo list management.</p>
        </div>
      </header>

      <section> 
        <QuoteApp/>
      </section>

      <section className="container mt-4">
        <TodoApp initialTodos={[
          {
            id: 1,
            title: "Code!",
            description: "Write some code",
            priority: 2,
          },
          {
            id: 2,
            title: "Make dinner",
            description: "Cook something healthy",
            priority: 1,
          },
          {
            id: 3,
            title: "Go to bed",
            description: "In bed by 11:15",
            priority: 3,
          },
        ]} />

        <Footer />
      </section>
    </main>
  );
}

export default App;
