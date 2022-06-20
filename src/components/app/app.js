import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeerList from '../employeer-list/employeer-list';
import EmployeerAddForm from '../employeer-add-form/employeer-add-form';
import './app.css';

function App() {
    return (
        <div className='app container'>
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeerList />
            <EmployeerAddForm />
        </div>
    );
};

export default App;