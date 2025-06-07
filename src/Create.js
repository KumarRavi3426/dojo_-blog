import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault(); // used to prevent the default action of an event from occurring. In this case, it is used to prevent the default form submission behavior when the form is submitted.
      const blog = { title, body, author };
      setIsPending(true);

      setTimeout(() => {
        fetch("http://localhost:8000/blogs", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(blog),
        }).then(() => {
          console.log("Blog added");
          setIsPending(false);
          // history.go(-1);
          history.push("/");
        });
      }, 1000);
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {isPending && (<div>Adding Blog...</div>)}
                {!isPending && (<button>Add Blog</button>)}

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>

            </form>

        </div>
    );
}

export default Create;