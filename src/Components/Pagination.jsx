const Pagination = ({ setCurrentPage, currentPage, totalPage }) => {
  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);
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
