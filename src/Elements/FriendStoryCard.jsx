import { Link } from "react-router";
import { format } from "date-fns";

const FriendStoryCard = ({
  excerpt,
  id,
  title,
  updatedAt,
  userId,
  likes,
  username,
}) => {
  return (
    <div className="story-wrapper" key={id}>
      <Link className="story-container" to={`/read/${id}`}>
        <div key={id}>
          <h3 className="story-list-story-title">{title}</h3>
          <h4>By: {username}</h4>
          <p>{excerpt}</p>
          <p className="updated-at">
            Last Updated: {format(new Date(updatedAt), "MMMM dd, yyyy h:mm a")}
          </p>
          <p>Likes: {likes}</p>
        </div>
      </Link>
    </div>
  );
};

export default FriendStoryCard;
