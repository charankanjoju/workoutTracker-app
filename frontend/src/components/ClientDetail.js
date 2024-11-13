import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ClientDetail.css';  // Import the CSS file for styling

const ClientDetail = () => {
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    const fetchClient = async () => {
      const response = await fetch(`/api/workouts/${id}`);
      const json = await response.json();
      if (response.ok) {
        setClient(json);
      }
    };
    fetchClient();
  }, [id]);

  if (!client) return <div className="loading">Loading...</div>;

  const goalDetails = client.goal === 'Weight Loss'
    ? `Target: Lose ${client.targetWeightLoss} kg by ${client.targetDate}`
    : `Target: Gain ${client.targetWeightGain} kg by ${client.targetDate}`;

  const additionalInfo = client.goal === 'Weight Loss' ? (
    <div className="goal-info">
      <h3>Understanding Weight Loss</h3>
      <p><strong>Why It Happens:</strong> Weight loss generally occurs when you consume fewer calories than your body needs, creating a calorie deficit. This forces your body to use stored fat for energy.</p>
      <p><strong>What to Do Now:</strong> Focus on a balanced diet with fewer calories, and combine it with regular physical activity. It's important to be consistent and patient.</p>
      <p><strong>Food Intakes:</strong> Opt for nutrient-dense foods like vegetables, lean proteins, whole grains, and healthy fats. Limit processed sugars and refined carbs.</p>
      <p><strong>Common Problems:</strong> You may face issues like hunger, slow progress, or plateaus. Stay consistent, and consult a nutritionist or trainer if needed.</p>
    </div>
  ) : (
    <div className="goal-info">
      <h3>Understanding Weight Gain</h3>
      <p><strong>Why It Happens:</strong> Weight gain happens when you consume more calories than your body burns, resulting in the storage of excess calories as fat or muscle.</p>
      <p><strong>What to Do Now:</strong> Focus on a calorie surplus diet, increasing your intake of healthy, nutrient-rich foods while engaging in strength training exercises to build muscle.</p>
      <p><strong>Food Intakes:</strong> Include calorie-dense foods like nuts, lean meats, dairy, legumes, whole grains, and healthy fats like avocado and olive oil.</p>
      <p><strong>Common Problems:</strong> Some may experience digestive issues or find it hard to consistently eat enough. It's key to increase meal frequency and focus on calorie-dense foods.</p>
    </div>
  );

  // Conditionally apply class based on goal
  const goalClass = client.goal === 'Weight Loss' ? 'weight-loss-bg' : 'weight-gain-bg';

  return (
    <div className="client-detail">
      <div className="client-header">
        <h2 className="client-name">{client.name}</h2>
        <p className="join-date"><strong>Joined:</strong> {new Date(client.createdAt).toLocaleDateString()}</p>
      </div>

      <div className="client-info">
        <div className="client-stats">
          <p><strong>Age:</strong> {client.age}</p>
          <p><strong>Height:</strong> {client.height} cm</p>
          <p><strong>Weight:</strong> {client.weight} kg</p>
        </div>

        <div className={`client-goal ${goalClass}`}>
          <h3>Goal</h3>
          <p>{goalDetails}</p>
          <p><strong>Plan:</strong> {client.plan}</p>
        </div>

        {additionalInfo}
      </div>
    </div>
  );
};

export default ClientDetail;
