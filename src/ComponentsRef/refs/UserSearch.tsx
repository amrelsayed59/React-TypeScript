import {useState, useRef, useEffect} from 'react';

const users = [
    {
        name: 'Sarah', age: 20
    },
    {
        name: 'Amr', age: 25
    },
    {
        name: 'Islam', age: 27
    },

]

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null); 
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name:string, age:number} | undefined>();

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    const findUser = () => {
        const foundUser = users.find((user) => {
            return user.name === name
           
        })
        setUser(foundUser)
    }

    return <> 
        UserSearch
        <input 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            ref={inputRef}
            
        />
        <button onClick={findUser}>Find User</button>
        {user? (
            <div>
                <p>Name: {user?.name}</p>
                <p>Age: {user?.age}</p>
            </div>
        ): (
            <div>Users Not Found</div>
        )}
        </>
}

export default UserSearch