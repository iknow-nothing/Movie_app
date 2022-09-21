import React from 'react'

const Pagination = () => {
  return (
    <>
      <nav aria-label="...">
        <ul class="pagination pagination-lg">
          <li class="page-item active" aria-current="page">
            <span class="page-link">1</span>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Pagination