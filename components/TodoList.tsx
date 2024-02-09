import { Todo } from "@prisma/client";
import TodoComponent from "./Todo";

const TodoList = ({ todos }: { todos: Todo[] }) => {
	return (
		<div>
			{todos.map((todo) => (
				<TodoComponent key={todo.id} todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
