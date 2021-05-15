import ReactDom from 'react-dom';
import UserSearch from './ComponentsRef/refs/UserSearch';

// import UserSearch from './state/UserSearch';
// import Parent from './props/Parent';
// import GuestList from './state/GuestList';

const App = () => {
    return(
        <>
       
        <UserSearch/>
        </>
    )
}

ReactDom.render(
    <App/>,document.querySelector('#root')
)