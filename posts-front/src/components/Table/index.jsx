import React from "react"
import PropTypes from 'prop-types'
import './table.css';

const renderTableRowItem = (item, displayedColumns, actions) => {
    const selectedAttributes = Object.keys(item).filter((itemKey) => !displayedColumns || displayedColumns.includes(itemKey));

    return (
        <>
            {selectedAttributes.map((attribute) => (
                <td key={`${item.id}${attribute}`} className="table-cell">
                    <p>{item[attribute]}</p>
                </td>
            ))}
            {actions?.map(({ cellText, onClick }) => (
                <td key={`${item.id}${cellText}`} className="table-cell-action">
                    <p onClick={() => onClick(item)}>{cellText}</p>
                </td>
            ))}
        </>
    )
}

const renderTableHeaders = (headers) => {
    return headers.map((header) => (
        <th key={header} className="table-header-item">{header}</th>
    ))
}

const Table = (props) => {
    const { actions, items, displayedColumns, headers } = props;

    const rows = items.map((item, rowKey) => {
        return (
            <tr key={rowKey} className="table-row-container">
                {renderTableRowItem(item, displayedColumns, actions)}
            </tr>
        )
    })

    const allHeaders = actions ? [...headers, ...actions.map(({ title }) => title)] : headers;
    const tableHeaders = renderTableHeaders(allHeaders);
    
    return (
        <div className="table-component-container">
            <table className="table-container">
                <thead>
                    <tr className="table-headers">
                        {tableHeaders}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        onClick: PropTypes.func,
    })),
    items: PropTypes.arrayOf(PropTypes.object),
    displayedColumns: PropTypes.arrayOf(PropTypes.string),
    headers: PropTypes.arrayOf(PropTypes.string),
}

export default Table