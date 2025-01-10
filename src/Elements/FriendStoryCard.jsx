import { Link } from "react-router";
import { format } from "date-fns";

const FriendStoryCard = ({ excerpt, id, title, updatedAt, userId }) => {
  return (
    <div className="story-wrapper" key={id}>
      <Link className="story-container" to={`/write/${id}`}>
        <div key={id}>
          <h3 className="story-list-story-title">{title}</h3> <p>{excerpt}</p>
          <p className="updated-at">
            Last Updated: {format(new Date(updatedAt), "MMMM dd, yyyy h:mm a")}
          </p>
        </div>
      </Link>
      {userId === id ? (
        <button
          onClick={() => {
            setDeleteId(story.storyId);
            setDeleteTitle(story.title);
            setIsConfirmed(false);
          }}
        >
          Delete
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default FriendStoryCard;
