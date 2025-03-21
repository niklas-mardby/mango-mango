// X typa vår context
// X context
// X skapa custom hook för contexten
// X skapa en provider

import { createContext, useContext, useMemo, useState } from "react";

// datatypen för vårt globala state som ligger i contexten
type NewListContextType = {
	state: string[];
	addState: (s: string) => void;
};

// skapa contexten och typa upp vad den innehåller
export const NewListContext = createContext<NewListContextType | null>(null);

// paketera contexten i en custom hook
export const useNewListContext = (): NewListContextType => {
	const context = useContext(NewListContext);
	if (!context) throw new Error("ERROR!");
	return context;
};

// typa upp props för provider-komponenten
type NewListContextProviderProps = {
	children: React.ReactNode;
};

// skapa provider-komponenten
export function NewListContextProvider({
	children,
}: Readonly<NewListContextProviderProps>) {
	// istället för reducer använder vi state
	// så denna rad försvinner const [state, dispatch] = useReducer(listReducer, initialState);
	const [state, setState] = useState<string[]>(["Invincible"]);

	const addState = (newString: string) => {
		setState((prev) => [...prev, newString]);
	};

	const value = useMemo(() => ({ state, addState }), [state]);

	return (
		<NewListContext.Provider value={value}>
			{children}
		</NewListContext.Provider>
	);
}
