
import React from "react";
import Input from "@material-tailwind/react/Input";
import useFormControls from "../../hooks/useFormControls";

const criptomonedas = [
    "Bitcoin",
    "Ethereum",
    "Cardano",
    "Dai",
    "Tether",
    "Solana",
    "Ergo"
];

const operaciones = [
    "Sell",
    "Buy"
];


export default function GenericsInput(properties) {


    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value)
        // console.log(event.target.value)
        properties.onChange(event)
    
    };

    const variable = useFormControls(properties.entity);

    const searchResults = !searchTerm.results
        ? variable.results
        : variable.results.filter(variable =>
            variable.results.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
        // console.log(properties)    

    return (
        <div>
            <Input
                type={properties.type}
                color={properties.color}
                size={properties.size}
                outline={properties.outline}
                placeholder={properties.placeholder}
                value={searchTerm}
                name='moneda'
                onChange={handleChange}
                list={properties.entity}
            />
            <datalist id={properties.entity}>
                {searchResults.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </datalist>
        </div>
    );
}