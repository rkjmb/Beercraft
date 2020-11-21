import React from 'react'

const PageSelect = ({ page, setpage, totalPages }) => {
    const renderOptions = () => {
        let options = [];
        for (let i = 1; i <= totalPages; i++) {
            options.push(<option value={i}>{`Page ${i}`}</option>)
        }
        return options;
    }
    return (
        <select value={page} onChange={(e) => setpage(Number(e.target.value))}>
            {renderOptions()}
        </select>
    )
}

export default PageSelect
