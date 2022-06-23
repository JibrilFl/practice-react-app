import EmployeerListItem from '../employeer-list-item/employeer-list-item';

import './employeer-list.css';

const EmployeerList = ({ data, onDelete, onToggleProp }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployeerListItem key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeerList;