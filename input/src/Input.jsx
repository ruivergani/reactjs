/* eslint-disable react/prop-types */

// Create an INPUT component
export default function Input({typeInput, valueInput, setInputValue}){
    return(
        <input
            type={typeInput}
            value={valueInput}
            onChange={(event) => setInputValue(event.target.value)}
        >
        </input>
    );
}