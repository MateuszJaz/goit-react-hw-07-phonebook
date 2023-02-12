import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import style from "./Filter.module.css";

export const Filter = () => {
	const dispatch = useDispatch();

	const onChange = (e) => {
		const value = e.target.value.toLowerCase();
		dispatch(setFilter(value));
	};

	return (
		<>
			<label htmlFor="filter">Find contacts by name or number</label>
			<input
				className={style.filterInput}
				type="text"
				name="filter"
				onChange={onChange}
			/>
		</>
	);
};
