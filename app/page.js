"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [des, setdes] = useState("");
  const [task, setTask] = useState([]);

  const RenderTask = task.map((e, i) => {
    return (
      <>
        <div className='p-4 bg-white  '>
          <li className='my-2 flex justify-between items-center bg-transparent  px-5  hover:shadow-lg transition duration-100'>
            <div>
              <h1 className='text-base font-semibold'>{e.title}</h1>
              <p className='text-sm  text-gray-600'>{e.des}</p>
            </div>
            <button
              onClick={() => {
                Delete(i);
              }}
              className='bg-red-600 text-white px-3 py-1 rounded-md transition duration-300 ease-in-out transform hover:scale-105'>
              Delete
            </button>
          </li>
        </div>
      </>
    );
  });

  const Delete = (i) => {
    const NewTask = [...task];
    NewTask.splice(i, 1);
    setTask(NewTask);
  };

  const Submit = (e) => {
    e.preventDefault();
    setTask([...task, { title, des }]);
    settitle("");
    setdes("");
    console.log(task);
  };

  return (
    <>
      <h1 className='shadow border flex h-20 text-2xl font-semibold justify-center items-center  '>
        Todo App
      </h1>
      <div>
        <form
          onSubmit={Submit}
          className='  flex justify-between  px-4 py-2   shadow '>
          <input
            className='flex px-4 py-1 border border-slate-300 w-1/3 outline-none   '
            type='text'
            placeholder='tast'
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            className='flex px-3 py-1 border border-slate-300 w-1/3 outline-none'
            type='text'
            placeholder='description'
            value={des}
            onChange={(e) => {
              setdes(e.target.value);
            }}
          />
          <button className='bg-gradient-to-tr from-rose-800 to-purple-800 text-white px-3 py-1 rounded-sm transition duration-300 ease-in-out transform hover:scale-105'>
            Add Task
          </button>
        </form>
        <div className='h-full bg-slate-200'>{RenderTask}</div>
      </div>
    </>
  );
};

export default page;
