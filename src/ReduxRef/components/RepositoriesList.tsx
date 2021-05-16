import React, {useState} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';

const RepositoriesList: React.FC = () => {

    const [term, setTerm] = useState('');
    
    const {SearchRepositories} = useActions();

    const {data, error, loading} = useTypedSelector(
        (state) => state.repositories
        )

   
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        SearchRepositories(term)
    }

    return (
        <>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)}/>
            <button>Search</button>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {data.length > 0 ? (
                <ul>
                {!error && !loading && data.map((t:any) => (
                    <li>{t}</li>
                ))}
            </ul>
            ) : (
                <p style={{fontWeight: 'bold'}}>No Result</p>
            )}
          
        </form>
     </>
    )
}

export default RepositoriesList