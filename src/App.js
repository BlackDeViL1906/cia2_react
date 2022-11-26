import { React, useState } from 'react';
import Select from 'react-select';
import './style.css';

function Dropdown ()
{
    const colors = [
        {
            id: 1,
            label: "lime",
        },
        {
            id: 2,
            label: "lavender",
        },
        {
            id: 3,
            label: "crimson",
        },
        {
            id: 4,
            label: "darkblue",
        },
        {
            id: 5,
            label: "teal",
        },
        {
            id: 6,
            label: "rebeccapurple",
        },
        {
            id: 7,
            label: "ghostwhite",
        },
        {
            id: 8,
            label: "aquamarine",
        },
        {
            id: 9,
            label: "aliceblue",
        },
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div className='dropdownWrapper'>
            <style>
            {
                `.button 
                {
                 background-color:` + color + ';'
                }
            </style>

            <center>
            <h1>Choose to change color</h1>
            </center>
            
            <div className="dropdownContainer">
                <Select options={colors} onChange={click} className='select' placeholder="Select your req Color"></Select>
            </div>
            <div className="block">
                
                    <button className='button'></button>
                    
                
            </div>
        </div>

    );
}
export default Dropdown;