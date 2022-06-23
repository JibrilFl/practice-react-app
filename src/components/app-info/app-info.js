import './app-info.css';

const AppInfo = ({ employeer, employeerIncrease }) => {

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании PagmaCorp</h1>
            <h2>Общее число сотрудников: {employeer}</h2>
            <h2>Премию получат: {employeerIncrease}</h2>
        </div>
    )
};

export default AppInfo;