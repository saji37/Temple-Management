import React from 'react'

function Pagination(props) {
    const {nPages,currentPage, setCurrentPage} = props;
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    const nextPage = () => {
        if(currentPage !== nPages) 
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }
  return (
    <div>
      <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item ">
      <a className="page-link"
        onClick={prevPage}
        href='#' >
        Previous</a>
    </li>

    {pageNumbers.map(pgNumber => (
        <li key={pgNumber}
        className={`page-item ${currentPage == pgNumber ? 'active' : ''}`}>
            
            <a onClick={()=> setCurrentPage(pgNumber)}
             className="page-link" href="#">
            {pgNumber}</a>
        
        </li>
    ))}
    <li className="page-item">
      <a onClick={nextPage}
      className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Pagination
