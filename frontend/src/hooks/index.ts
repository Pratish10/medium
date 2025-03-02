import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";

interface Blog {
  title: string;
  content: string;
  author: {
    name: string;
  };
  id: string;
}

export const useBlogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token") ?? "",
        },
      })
      .then((res) => {
        setBlogs(res.data.records);
      })
      .catch(() => {
        setError("Something Went Wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    blogs,
    error,
  };
};
export const useBlog = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token") ?? "",
        },
      })
      .then((res) => {
        setBlog(res.data.record);
      })
      .catch(() => {
        setError("Something Went Wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return {
    isLoading,
    blog,
    error,
  };
};
