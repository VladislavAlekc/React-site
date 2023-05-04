import React from "react";
import ReactPaginate from "react-paginate";

type onChangeProps = {
  onChange: (number: number) => void;
};

const Pagination: React.FC<onChangeProps> = ({ onChange }) => {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChange(event.selected + 1)}
      pageRangeDisplayed={6}
      pageCount={2}
      previousLabel="<"
    />
  );
};

export default Pagination;
