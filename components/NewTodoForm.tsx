"use client";
import { useState } from "react";
import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
	const [state, setState] = useState("");
	return (
		<form action={newTodo} className="flex flex-col">
			<input name="content" className="border-black ring-0" type="text" />
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default NewTodoForm;
