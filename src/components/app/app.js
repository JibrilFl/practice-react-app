import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeerList from '../employeer-list/employeer-list';
import EmployeerAddForm from '../employeer-add-form/employeer-add-form';
import './app.css';

function App() {

    const data = [
        { name: 'John G.', salary: 800, increase: true, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: false, id: 2 },
        { name: 'Glor N.', salary: 5000, increase: true, id: 3 }
    ];

    return (
        <div className='app container'>
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeerList data={data} />
            <EmployeerAddForm />
        </div>
    );
};

export default App;