import { Pagination} from "react-bootstrap";
import {useState} from "react";
import {createPaginationItems} from "../hooks/createPagination.jsx";

function PaginationComponent(){

    const [active, SetActive] = useState(1);
    const items = createPaginationItems(active, 15, SetActive)

    return (
        <div>
            <Pagination className='justify-content-center my-4'>
                <Pagination.Prev onClick={()=>SetActive(active-1)} disabled={active === 1}>Newer</Pagination.Prev>
                {items}
                <Pagination.Next onClick={()=>SetActive(active+1)} disabled={active===items.length}>Older</Pagination.Next>

            </Pagination>
        </div>
    )
}

export default PaginationComponent