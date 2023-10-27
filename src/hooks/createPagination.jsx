import {Pagination} from "react-bootstrap";

function createPaginationItems(activePage, totalPages, onClick) {
    const paginationItems = [];

    // Always show the first page
    paginationItems.push(
        <Pagination.First
            key="pagination-first"
            onClick={() => onClick(1)}
            active={activePage===1}
        >1</Pagination.First>
    );

    if (activePage > 4 && totalPages > 4) {
        paginationItems.push(
            <Pagination.Ellipsis key="pagination-ellipsis-start" />
        );
    } else if (activePage <=4 ){
        paginationItems.filter(e => e !== <Pagination.Ellipsis key="pagination-ellipsis-start" />)
    }

    const startPage = Math.max(2, activePage - 2);
    const endPage = Math.min(totalPages-1, activePage + 2);

    for (let page = startPage; page <= endPage; page++) {
        paginationItems.push(
            <Pagination.Item
                key={`pagination-page-${page}`}
                active={page === activePage}
                onClick={() => onClick(page)}
            >
                {page}
            </Pagination.Item>
        );
    }

    // Generate ellipsis if there are more than 4 pages
    if (activePage < totalPages-4 && totalPages > 4) {
        paginationItems.push(
            <Pagination.Ellipsis key="pagination-ellipsis-end" />
        );
    }

    // Always show the last page
    paginationItems.push(
        <Pagination.Last
            key="pagination-last"
            onClick={() => onClick(totalPages)}
            active={activePage===totalPages}
        >{totalPages}</Pagination.Last>
    );

    return paginationItems;
}

export {createPaginationItems}