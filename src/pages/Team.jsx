import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import teams from '../10.6-fellows.json'
import Button from 'react-bootstrap/Button';

const Team = () => {
    const [team, setTeam] = useState(null)
    const { name } = useParams()


    useEffect(() => {
        setTeam(() => {
            return teams.find((team) => team.team === name)
        })
    }, [name])
    return (
        <>
            { team && 
                <h1>
                    <a href={team?.url} target="_blank" id="app-link">
                        {team?.team.toUpperCase()}
                    </a>
                </h1> 
            }
            <div className="fellow-links">
            {
                team && team.members.map((fellow, i) => (
                    <div key={i} className="fellow">
                        <Link to={`/${name}/${fellow.name}`} className="fellow-link">
                            <img src={fellow.image} />
                            <div className="text-overlay">
                                <p id="fellow-name">{fellow.name.toUpperCase()}</p>
                            </div>
                        </Link>
                    </div>
                ))
            }
            </div>
            <Link to={`/`}>
                <Button variant="warning" id="back">Back</Button>
            </Link>
        </>
    );
};

export default Team;