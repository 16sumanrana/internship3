import React, { useState } from 'react';
import './App.css';
import IconPicker from './IconPicker';

const App = () => {
	const [iconPickerProps, setIconPickerProps] = useState({
		rowsInOnePage: 5,
		columnsInOnePage: 5,
		iconWidth: 100,
		iconHeight: 100
	});
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.target.elements);
		const elements = event.target.elements;
		setIconPickerProps({
			rowsInOnePage: elements.rowsInOnePage.value,
			columnsInOnePage: elements.columnsInOnePage.value,
			iconWidth: elements.iconWidth.value,
			iconHeight: elements.iconHeight.value
		});
	};
	return (
		<div className="App">
			<form onSubmit={ handleSubmit }>
				<label>
					Rows per page: <input type="number" name="rowsInOnePage" min={ 1 } required placeholder={ iconPickerProps.rowsInOnePage } />
				</label>
				{/* <br /> */ }
				<label>
					Colums per page: <input type="number" name="columnsInOnePage" min={ 1 } required placeholder={ iconPickerProps.columnsInOnePage } />
				</label>
				<br />
				<label>
					Icon width: <input type="number" name="iconWidth" min={ 20 } required placeholder={ iconPickerProps.iconWidth } />
				</label>
				{/* <br /> */ }
				<label>
					Icon height: <input type="number" name="iconHeight" min={ 20 } required placeholder={ iconPickerProps.iconHeight } />
				</label>
				<br />
				<button type="submit">Submit</button>
			</form>
			<br />
			<br />
			<IconPicker
				rowsInOnePage={ iconPickerProps.rowsInOnePage }
				columnsInOnePage={ iconPickerProps.columnsInOnePage }
				iconWidth={ iconPickerProps.iconWidth }
				iconHeight={ iconPickerProps.iconHeight }
			/>
		</div>
	);
};

export default App;
