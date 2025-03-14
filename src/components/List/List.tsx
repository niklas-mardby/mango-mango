import { useListContext } from "../../contexts/ListContext";

export default function List() {
	const { state } = useListContext();

	return (
		<div>
			<h1>List</h1>
			<ul>
				{state.list.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}
