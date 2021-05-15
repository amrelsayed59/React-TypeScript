import React, {useState} from 'react'


const GuestList: React.FC = () => {

    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const addGuest = () => {
        setName('');
        setGuests([...guests, name]);
        console.log(name)
    }

    return<>
        <h3>Guest List</h3>
        <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        
        <button onClick={addGuest}>Add Guest</button>
        <ul>
            {guests.map((guest,index) => (
                <li key={index}>{guest}</li>
            ))}
        </ul>
       
    </>
}

export default GuestList