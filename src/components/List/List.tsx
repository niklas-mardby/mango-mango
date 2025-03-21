import { useNewListContext } from "../../contexts/NewListContext";

export default function List() {
	const { state } = useNewListContext();

	return (
		<div>
			<h1>List</h1>
			<ul>
				{state.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
}
