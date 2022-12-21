const Spinner = () => {
  return (
    <div className="absolute top-1/2 left-1/2 ">
      <div
        className="spinner-border animate-spin inline-block w-14 h-14 border-4 rounded-full"
        role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
