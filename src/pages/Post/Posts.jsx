import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../redux/slices/postsSlice';
import PostDetails from './Postdetail/PostDetails';

export default function Posts() {
  const [clicked, setClicked] = useState();
  const [postClick, setPostClick] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.list);
  // console.log(posts);
  return (
    <div className="mx-1  lg:mx-16 my-10 p-3  grid lg:grid-cols-3 md:grid-cols-2 gap-5">
      {/* sidebar */}
      <div className=" col-span-1 p-3 flex flex-col gap-3 md:max-w-sm ">
        <input
          type="text"
          className=" border rounded-full px-4 py-2 w-full text-lg shadow-lg mb-5 outline-none"
          placeholder="Search..."
        />
        <div className="border px-4 py-6 rounded-lg bg-white shadow-xl">
          <div className="flex justify-between">
            <span
              className="text-xl font-semibold cursor-pointer"
              onClick={() => setClicked('cats')}
              aria-hidden="true"
            >
              CATEGORIES
            </span>
            <span
              className="border rounded border-gray-400 px-3 cursor-pointer lg:hidden"
              onClick={() => setClicked(null)}
              aria-hidden="true"
            >
              <i
                className={`ri-arrow-drop-${
                  clicked === 'cats' ? 'up' : 'down'
                }-line ri-md`}
              />
            </span>
          </div>
          <div
            className={`${
              clicked === 'cats' ? 'flex' : 'hidden'
            }  md:flex lg:flex flex-col gap-4 mt-5`}
          >
            <span className="border-b pb-2 hover:bg-gray-100 rounded px-3 py-1">
              Culture
            </span>
            <span className="border-b pb-2 hover:bg-gray-100 rounded px-3 py-1">
              Creativity
            </span>
            <span className="border-b pb-2 hover:bg-gray-100 rounded px-3 py-1">
              Food
            </span>
            <span className="border-b pb-2 hover:bg-gray-100 rounded px-3 py-1">
              Travel
            </span>
            <span className="border-b pb-2 hover:bg-gray-100 rounded px-3 py-1">
              Humor
            </span>
            <span className="border-b pb-2 hover:bg-gray-100 rounded px-3 py-1">
              Music
            </span>
          </div>
        </div>
        <div className="border px-4 py-6 rounded-lg bg-white shadow-xl">
          <div className="flex justify-between">
            <span
              className="text-xl font-semibold cursor-pointer"
              onClick={() => setClicked('top')}
              aria-hidden="true"
            >
              TOP POSTS
            </span>
            <span
              className="border rounded border-gray-400 px-3 cursor-pointer lg:hidden"
              onClick={() => setClicked(null)}
              aria-hidden="true"
            >
              <i
                className={`ri-arrow-drop-${
                  clicked === 'top' ? 'up' : 'down'
                }-line ri-md`}
              />
            </span>
          </div>
          <div
            className={`${
              clicked === 'top' ? 'flex' : 'hidden'
            }  md:flex lg:flex flex-col gap-4 mt-5`}
          >
            <div className="flex gap-3 items-start hover:bg-slate-100 rounded p-1 cursor-pointer">
              <span className="text-4xl font-bold">1</span>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold text-slate-700">
                  Lorem ipsum dolor sit amet consectetur
                </span>
                <span className="text-xs text-slate-500">
                  FOOD, TRAVEL - NOV 17,2022
                </span>
              </div>
            </div>
            <div className="flex gap-3 items-start hover:bg-slate-100 rounded p-1 cursor-pointer">
              <span className="text-4xl font-bold">2</span>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold text-slate-700">
                  Lorem ipsum dolor sit amet consectetur
                </span>
                <span className="text-xs text-slate-500">
                  FOOD, TRAVEL - NOV 17,2022
                </span>
              </div>
            </div>
            <div className="flex gap-3 items-start hover:bg-slate-100 rounded p-1 cursor-pointer">
              <span className="text-4xl font-bold">3</span>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold text-slate-700">
                  Lorem ipsum dolor sit amet consectetur
                </span>
                <span className="text-xs text-slate-500">
                  FOOD, TRAVEL - NOV 17,2022
                </span>
              </div>
            </div>
            <div className="flex gap-3 items-start hover:bg-slate-100 rounded p-1 cursor-pointer">
              <span className="text-4xl font-bold">4</span>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold text-slate-700">
                  Lorem ipsum dolor sit amet consectetur
                </span>
                <span className="text-xs text-slate-500">
                  FOOD, TRAVEL - NOV 17,2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className=" lg:col-span-2 md:col-span-1 p-3 flex flex-wrap gap-x-5 justify-around gap-3 mt-1 flex-col px-16">
        {posts?.map((p) => {
          return (
            <div key={p.date}>
              <div
                className="border h-sm rounded-lg max-h-full lg:max-h-44  md:max-w-full lg:w-full  max-w-full  bg-white shadow-xl hover:ring-4 cursor-pointer flex md:flex-col lg:flex-row flex-col  sm:max-w-mds sm:max-h-96"
                onClick={() => setPostClick(p.title)}
                aria-hidden="true"
              >
                <div className="px-5 my-5 h-full order-1 max-h-full flex flex-col gap-2 justify-between md:order-1 lg:w-full ">
                  <span className="text-xl font-semibold text-slate-700 leading-5">
                    {p.title}
                  </span>
                  <p className="text-slate-600 leading-tight">
                    {p.content.slice(0, 80)}...
                  </p>
                  <span className="text-xs text-slate-500 mb-0">
                    FOOD, TRAVEL - {p.date.slice(0, 10)}
                  </span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt="cover"
                  className="lg:order-1 lg:rounded-r-lg  h-60 rounded-none lg:h-full w-full sm:rounded-none  md:max-w-full md:rounded-t-lg sm:rounded-t-lg  lg:rounded-l-none lg:max-w-44 lg:w-52 "
                />
              </div>
              {/*  comments */}
              {postClick === p.title ? (
                <PostDetails
                  id={p.sender}
                  comments={p.comments}
                  post={p.content}
                  title={p.title}
                />
              ) : null}
            </div>
          );
        })}
        {/* pagination */}
        <div className="flex gap-2 items-center mt-10 self-center">
          <span className="px-4 py-1 border bg-white rounded cursor-pointer hover:bg-purple-400">
            Prev
          </span>
          <p className="flex gap-1">
            <span className="px-2 border bg-white rounded text-lg cursor-pointer hover:bg-purple-400">
              1
            </span>
            <span className="px-2 border bg-white rounded text-lg cursor-pointer hover:bg-purple-400">
              2
            </span>
            <span className="px-2 border bg-white rounded text-lg cursor-pointer hover:bg-purple-400">
              3
            </span>
          </p>
          <span className="px-4 py-1 border bg-white rounded cursor-pointer hover:bg-purple-400">
            Next
          </span>
        </div>
      </div>
    </div>
  );
}
