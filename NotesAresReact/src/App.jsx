import { Route, Routes } from "react-router";
import Note from "./components/Note/Note";
import CreateNote from "./components/CreateNote/CreateNote";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Note
              title="Nueva tarea"
              description="Tarea por completar"
              date="31/10/2023"
            />
          }
        />
        <Route path="/create" element={<CreateNote />} />
      </Routes>
    </>
  );
}

export default App;
