import {Provider} from 'react-redux';
import {store} from '../state';
import RepositoriesList from './RepositoriesList'

const AppRedux = () => {
    return <Provider store={store}>
        <h1>Search For a package</h1>
        <RepositoriesList/>
    </Provider>
}

export default AppRedux;