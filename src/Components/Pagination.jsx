const Pagination = ({ setCurrentPage, currentPage, totalPage }) => {
  const pages = [...Array(totalPage)?.keys()].slice(1);
  return (
    <div className="text-red">
      {pages?.map((page) => (
        <span
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`${currentPage === page ? "active" : ""} cursor-pointer`}
        >
          {" "}
          {` ${page} |`}{" "}
        </span>
      ))}
    </div>
  );
};
export default Pagination;
