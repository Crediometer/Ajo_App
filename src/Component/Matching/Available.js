import { Link } from 'react-router-dom';
import './Available.css';
const Available = () => {
    return ( 
        <div className="available">
            <Link to='/matchform'>
                <div className="grid-1">
                    <p>Yam sellers ajo </p>
                </div>
            </Link>
            <div className="grid-2">
                <p>Credio office </p>
            </div>
            <div className="grid-3">
                <p>Yam sellers ajo </p>
            </div>
            <div className="grid-4">
                <p>corn farmers</p>
            </div>
            <div className="grid-5">
                <p>Food sellers ajo </p>
            </div>
            <div className="grid-6">
                <p>Food sellers ajo </p>
            </div>
        </div>
     );
}
 
export default Available;