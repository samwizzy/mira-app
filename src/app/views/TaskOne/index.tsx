import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import * as _ from "lodash";
import { RootState } from "src/store";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import AddPost from "src/app/views/TaskOne/AddPost";
import { openDialog, openEditDialog } from "src/store/slices/dialog.slice";
import {
  getPostsApi,
  deletePostApi,
  postProps,
} from "src/store/slices/crud.slice";
import { getUsersApi } from "src/store/slices/users.slice";
import Loader from "src/app/components/Loader";
import Card from "src/app/components/Card";

function TaskOne() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(({ crud }: RootState) => crud);
  const { users } = useSelector(({ users }: RootState) => users);
  const [paginatedPosts, setpaginatedPost] = useState<postProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const count = Math.ceil(posts.length / 10);

  console.log(posts, "posts");
  console.log(page, "page");

  useEffect(() => {
    dispatch(getPostsApi());
    dispatch(getUsersApi());
  }, [dispatch]);

  useEffect(() => {
    const start = (page - 1) * 10;
    const end = start + 10;
    setpaginatedPost(posts.slice(start, end));
  }, [posts, page]);

  const handleChange = (event: any, value: number) => {
    setPage(value);
  };

  if (loading) {
    return <Loader className="#fff" />;
  }

  return (
    <div className="">
      <div className="bg-blue-800 sm:py-6 px-4">
        <div className="max-w-7xl mx-auto sm:p-6 py-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-200">
              Task One: <span className="font-light">CRUD</span>
            </h2>

            <div className="space-x-2">
              <Button
                variant="outlined"
                color="secondary"
                component={Link}
                to="users"
              >
                Users
              </Button>

              <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(openDialog())}
              >
                Add post
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-12 sm:gap-8 gap-x-0 gap-y-6">
            {paginatedPosts.map((post) => (
              <Card
                key={post.id}
                className="sm:col-span-4 col-span-12"
                title={post.title}
                onEdit={() => dispatch(openEditDialog(post))}
                onDelete={() => dispatch(deletePostApi(Number(post.id)))}
                footer={_.find(users, { id: Number(post.userId) })?.name}
              >
                <p className="text-gray-700">{post.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto sm:p-6 px-4 py-6">
        <Pagination
          color="secondary"
          className="mt-2"
          shape="rounded"
          count={count}
          page={page}
          onChange={handleChange}
        />
      </div>

      <Outlet />

      <AddPost />
    </div>
  );
}

export default TaskOne;
