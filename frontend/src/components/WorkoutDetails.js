import { Link } from 'react-router-dom';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useState } from "react";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: "DELETE"
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="workout-details">
    <Link to={`/client/${workout._id}`}>
      <h4>{workout.name}</h4>
    </Link>
    <p><strong>Age:</strong> {workout.age}</p>
   
    <p><strong>Goal:</strong> {workout.goal}</p>

    <button onClick={handleClick}>Delete</button>
  </div>
  );
};

export default WorkoutDetails;
