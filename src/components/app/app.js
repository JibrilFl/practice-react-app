import { Component } from 'react';
import nextId from 'react-id-generator';

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
                { name: 'John G.', salary: 800, increase: false, rise: true, id: 1 },
                { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
                { name: 'Glor N.', salary: 5000, increase: false, rise: true, id: 3 }
            ]
        }
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
            rise: false,
            id: nextId('person-')
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    render() {
        const { data } = this.state;

        const employeer = data.length;
        const employeerIncrease = data.filter(item => item.increase === true).length;

        return (
            <div className='app container'>
                <AppInfo
                    employeer={employeer}
                    employeerIncrease={employeerIncrease} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeerList
                    data={data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeerAddForm
                    data={data}
                    addItem={this.addItem} />
            </div>
        );
    }
}




export default App;