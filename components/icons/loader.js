const Loader = (props) => {
  if (props.class) {
    return (
      <div className="flex justify-center items-center">
        <div
          className="spinner-border animate-spin inline-block w-4 h-4 mr-4 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden"> </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden"> </span>
      </div>
    </div>
  );
};

export default Loader;
