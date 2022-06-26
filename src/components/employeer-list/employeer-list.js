import EmployeerListItem from '../employeer-list-item/employeer-list-item';

import './employeer-list.css';

const EmployeerList = ({ data, onDelete, onToggleProp, onUpdateSalary }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployeerListItem key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onUpdateSalary={(e) => onUpdateSalary(id, e.target.value)} />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeerList;