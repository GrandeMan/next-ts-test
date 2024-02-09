"use client";
import { useState } from "react";

const NewTodoForm = () => {
	const [state, setState] = useState("");
	return (
		<form>
			<input type="text" />
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default NewTodoForm;
