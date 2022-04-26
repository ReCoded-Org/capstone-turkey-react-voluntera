import PropTypes from 'prop-types';

export default function PostDetails({ id, comments, post, title }) {
  // delet post
  const deletPost = () => {};

  return (
    <div className=" ml-5 p-3">
      <div className="flex justify-between">
        <strong>{title}</strong>
        <button
          onClick={deletPost(id)}
          type="button"
          className="border px-4 py-1 border-red-500 bg-red-200 "
        >
          Delete
        </button>
      </div>
      <p>
        {post}
        {id}
      </p>
      <div className="flex flex-col gap-2 border p-3 mt-4 ml-5 bg-slate-50">
        <strong>Comments</strong>
        <hr className="my-2" />
        {comments?.map((c) => {
          return (
            <div key={c.content} className="flex gap-1 ">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
                alt="profiel"
                className="h-10"
              />
              <div className="flex flex-col ml-2 w-full">
                <div className="flex gap-2 items-center">
                  <strong>Maksim</strong>
                  <span>{c.date.slice(0, 10)}</span>
                  <span>at 09:45 am</span>
                </div>
                <p>{c.content}</p>
                <button
                  type="button"
                  className="px-4 py-1 border self-end text-white bg-blue-500 rounded"
                >
                  Reply
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

PostDetails.propTypes = {
  id: PropTypes.string,
  post: PropTypes.string,
  title: PropTypes.string,
  comments: PropTypes.instanceOf(Array),
};
PostDetails.defaultProps = {
  id: '',
  post: '',
  title: '',
  comments: [],
};
