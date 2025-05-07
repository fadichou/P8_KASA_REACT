import { useParams } from 'react-router-dom';

function Housing() {
  const { id } = useParams();

  return (
    <main>
      <div className="housing">
        <h1>Détail du logement</h1>
        <p>ID du logement : {id}</p>
      </div>
    </main>
  );
}

export default Housing;