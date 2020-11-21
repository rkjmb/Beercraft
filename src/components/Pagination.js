import React from 'react';

import PageSelect from './PageSelect';

const Pagination = ({ page, setpage, totalPages }) => {
    return (
        <div className='pagination'>
            <button disabled={page === 1} onClick={() => setpage(1)}>First</button>
            <button disabled={page === 1} onClick={() => setpage(page - 1)}>Previous</button>
            <PageSelect setpage={setpage} page={page} totalPages={totalPages} />
            <label>{`of ${totalPages}`}</label>
            <button disabled={page === totalPages} onClick={() => setpage(page + 1)}>Next</button>
            <button disabled={page === totalPages} onClick={() => setpage(totalPages)}>Last</button>
        </div>
    )
}

export default Pagination
