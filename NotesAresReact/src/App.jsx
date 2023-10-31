import { Route, Routes } from "react-router";
import Note from "./components/Note/Note";

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
			</Routes>
		</>
	);
}

export default App;
