import EmployeerListItem from '../employeer-list-item/employeer-list-item';

import './employeer-list.css';

const EmployeerList = ({ data }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployeerListItem key={id} {...itemProps} />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeerList;