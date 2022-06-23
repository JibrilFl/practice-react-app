import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeerList from '../employeer-list/employeer-list';
import EmployeerAddForm from '../employeer-add-form/employeer-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John G.', salary: 800, increase: false, id: 1 },
                { name: 'Alex M.', salary: 3000, increase: false, id: 2 },
                { name: 'Glor N.', salary: 5000, increase: false, id: 3 }
            ]
        }

        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            // const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })
    }

    render() {
        const { data } = this.state;
        return (
            <div className='app container'>
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeerList
                    data={data}
                    onDelete={this.deleteItem} />
                <EmployeerAddForm
                    data={data}
                    addItem={this.addItem} />
            </div>
        );
    }
}




export default App;