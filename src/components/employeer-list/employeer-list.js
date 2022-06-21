import EmployeerListItem from '../employeer-list-item/employeer-list-item';

import './employeer-list.css';

const EmployeerList = ({ data }) => {

    const elements = data.map(item => {
        return (
            <EmployeerListItem {...item} />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeerList;