import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router";
import { format } from "date-fns";

const StoriesList = () => {
  const [stories, setStories] = useState([]);
  const userId = useSelector((state) => state.userId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }

    async function fetchData() {
      try {
        const response = await axios.get("/api/getAllStories");
        console.log(response.data);
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    }
    fetchData();
  }, [userId, navigate]);

  return (
    <>
      <h1>My Stories</h1>
      <div className="stories-list-wrapper">
        {stories.length > 0 ? (
          stories.map((story, index) => {
            let array = story.content.split(" ");
            let excerpt = "";
            if (array.length > 14) {
              excerpt = array.splice(0, 14).join(" ") + "...";
            } else excerpt = array.join(" ") + "...";
            return (
              <Link
                className="story-container"
                key={story.storyId}
                to={`/write/${story.storyId}`}
              >
                <div key={story.storyId}>
                  <h3 className="story-list-story-title">{story.title}</h3>{" "}
                  <p>{excerpt}</p>
                  <p className="updated-at">
                    Last Updated:{" "}
                    {format(new Date(story.updatedAt), "MMMM dd, yyyy h:mm a")}
                  </p>
                </div>
              </Link>
            );
          })
        ) : (
          <button
            onClick={() => {
              navigate("/write");
            }}
          >
            Start your first story
          </button>
        )}
      </div>
    </>
  );
};

export default StoriesList;
