// 🥭 typa vår context
// 🥭 context
// 🥭 typa vår reducer (vår action)
// 🥭 reducer
// 🥭 skapa custom hook för contexten
// 🥭 skapa en provider

import {
	createContext,
	Dispatch,
	useContext,
	useMemo,
	useReducer,
} from "react";

// typa upp state-objektet
type ListState = {
	list: string[];
};

// vårt första state-objekt
const initialState: ListState = {
	list: ["katt", "hund", "gris", "giraff"],
};

// typa upp reducerns action
type ListReducerAction = {
	type: "ADD";
	payload: string;
};

const listReducer = (state: ListState, action: ListReducerAction) => {
	switch (action.type) {
		case "ADD":
			return { list: [...state.list, action.payload] };
		// ger oss rätt array [ "katt", "gris", "hund" ]
		// om vi skriver [state.list, action.payload] då får vi
		// [ ["katt", "gris"] , "hund" ]
		default:
			return state;
	}
};

// typa upp contexten, vårt globala state
type ListContextType = {
	state: ListState;
	dispatch: Dispatch<ListReducerAction>;
};

// skapa contexten
export const ListContext = createContext<ListContextType | null>(null);

// typa upp våra props till providern
type ListContextProviderProps = {
	children: React.ReactNode;
};

// paketera contexten i en custom hook
export const useListContext = (): ListContextType => {
	const context = useContext(ListContext);
	if (!context) throw new Error("ERROR!");
	return context;
};

// skapa provider-komponenten
export function ListContextProvider({
	children,
}: Readonly<ListContextProviderProps>) {
	const [state, dispatch] = useReducer(listReducer, initialState);

	const value = useMemo(() => ({ state, dispatch }), [state]);

	return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
}
