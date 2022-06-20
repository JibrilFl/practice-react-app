import EmployeerListItem from '../employeer-list-item/employeer-list-item';

import './employeer-list.css';

const EmployeerList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeerListItem />
            <EmployeerListItem />
            <EmployeerListItem />
        </ul>
    );
};

export default EmployeerList;