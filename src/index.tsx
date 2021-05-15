import ReactDom from 'react-dom';
import AppRedux from './ReduxRef/components/App';


const App = () => {
    return(
        <>
           <AppRedux/>
        </>
    )
}

ReactDom.render(
    <App/>,document.querySelector('#root')
)