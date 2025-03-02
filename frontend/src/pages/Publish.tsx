import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useState } from "react";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        { title, content },
        {
          headers: {
            Authorization: localStorage.getItem("token") ?? "",
          },
        }
      );
      if (response.status === 200) {
        alert("Blog Published");
      }
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <input
        type="text"
        placeholder="Title"
        value={title}
        disabled={loading}
        onChange={({ target: { value } }) => setTitle(value)}
        className="w-full text-5xl font-bold outline-none mb-4 placeholder-gray-400"
      />

      <textarea
        placeholder="Tell your story..."
        value={content}
        onChange={({ target: { value } }) => setContent(value)}
        disabled={loading}
        className="w-full h-96 outline-none text-xl placeholder-gray-400"
      ></textarea>

      <div className="mt-4 flex justify-end">
        <button
          onClick={handlePublish}
          className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
          disabled={loading}
        >
          Publish
        </button>
      </div>
    </div>
  );
};
