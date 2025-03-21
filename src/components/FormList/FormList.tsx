import { useState } from "react";
import { useNewListContext } from "../../contexts/NewListContext";

export default function FormList() {
	const { addState } = useNewListContext();

	const [title, setTitle] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleClick = () => {
		addState(title);
	};

	return (
		<div>
			<h1>FormList</h1>
			<label htmlFor="title">Title: </label>
			<input
				type="text"
				name="title"
				placeholder="Title..."
				value={title}
				onChange={handleChange}
			/>
			<button onClick={handleClick}>Add</button>
		</div>
	);
}
