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
            ],
            term: '',
            filter: 'all'
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

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'salary':
                return items.filter(item => item.salary > 1000)
            case 'increase':
                return items.filter(item => item.increase)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    onUpdateSalary = (id, salary) => {
        if (salary.indexOf('$') > -1) {
            salary = +salary.slice(0, -1);
        }

        if (isNaN(salary)) {
            return
        }

        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, salary: salary }
                }
                return item;
            })
        }))
    }

    render() {
        const { data, term, filter } = this.state;

        const employeer = data.length;
        const employeerIncrease = data.filter(item => item.increase === true).length;
        const visibleData = this.searchEmp(this.filterEmp(data, filter), term);

        return (
            <div className='app container'>
                <AppInfo
                    employeer={employeer}
                    employeerIncrease={employeerIncrease} />

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>

                <EmployeerList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onUpdateSalary={this.onUpdateSalary} />
                <EmployeerAddForm
                    data={data}
                    addItem={this.addItem} />
            </div>
        );
    }
}




export default App;