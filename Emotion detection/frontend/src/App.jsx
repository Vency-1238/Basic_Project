import { useState } from 'react';
import './App.css';

import{
  Bar,BarChart,CartesianGrid,Tooltip,XAxis,YAxis,ResponsiveContainer
} from 'recharts';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState([]);  // <-- FIXED
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      setResult(data.emotions);
    } catch (err) {
      console.error("Fetch error:", err);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Emotion Detector</h2>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Input Comment Here...'
        style={{ width: '100%', padding: '0.5rem' }}
      />
      <br />
      <button onClick={handleSubmit} disabled={loading} style={{ marginTop: '1rem' }}>
        {loading ? 'Detecting...' : 'Detect Emotions'}
      </button>
      {result.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h4>Result Detection (Table):</h4>
          {result.map((r) => (
            <div key={r.label} >
              <strong>{r.label}</strong>: {(r.score * 100).toFixed(2)}%
            </div>
          ))}
          <h4 style={{ marginTop: '2rem' }}>Top 3 emotions</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[...result].sort((a, b) => b.score - a.score).slice(0, 3).map((r) => ({
              ...r,score: r.score * 100}))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    
    </div>
  );
}

export default App;