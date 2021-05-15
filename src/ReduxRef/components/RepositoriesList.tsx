import React, {useState} from 'react';
import {useActions} from '../hooks/useActions';

const RepositoriesList: React.FC = () => {

    const [term, setTerm] = useState('');
    
    const {SearchRepositories} = useActions();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        SearchRepositories(term)
    }

    return (
        <>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
     </>
    )
}

export default RepositoriesList