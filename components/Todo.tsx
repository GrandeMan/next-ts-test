"use client";
import { Todo } from "@prisma/client";
import { completeTodo } from "@/utils/actions";
import { useTransition } from "react";

const TodoComponent = ({ todo }: { todo: Todo }) => {
	const [isPending, startTransition] = useTransition();
	return (
		<div
			className={`border-black ring-0 cursor-pointer hover:bg-gray-200 ${
				todo.completed ? "line-through text-gray-500" : ""
			}`}
			onClick={() => startTransition(() => completeTodo(todo.id))}
		>
			{todo.content}
		</div>
	);
};

export default TodoComponent;
