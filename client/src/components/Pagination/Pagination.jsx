import React from 'react'
import './Pagination.css'

const Pagination = ({ currentPage, onPageChange, pageSize, totalItems }) => {
    const totalPages = Math.ceil(totalItems / pageSize);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
    };

    return (
        <div className="container-pagination">
            <button className='ButtonPagination' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
            </button>
            <span className='Page'>{`Page ${currentPage} of ${totalPages}`}</span>
            <button className='ButtonPagination' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

export default Pagination;