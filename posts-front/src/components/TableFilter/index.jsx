import React, { useState } from "react"
import PropTypes from 'prop-types';
import './tableFilter.css';

const TableFilter = (props) => {
    const { searchPlaceholder, searchButtonText, searchAttribute, onFilter } = props;
    const [filter, setFilter] = useState(undefined);

    const handleOnFilterChange = (e) => {
        setFilter(e.target.value);
    }

    const handleOnFilter = () => {
        onFilter({ [searchAttribute]: filter });
    }

    return (
        <div className="filter-container">
            <input placeholder={searchPlaceholder} value={filter ?? ''} onChange={handleOnFilterChange} className="filter-input"/>
            <button onClick={handleOnFilter}>{searchButtonText}</button>
        </div>
    )
}

TableFilter.defaultProps = {
    searchPlaceholder: "Filtro de",
    searchButtonText: "Buscar",
}

TableFilter.propTypes = {
    searchPlaceholder: PropTypes.string,
    searchButtonText: PropTypes.string,
    searchAttribute: PropTypes.string.isRequired,
    onFilter: PropTypes.func,
}

export default TableFilter