import "./App.css";
import ArtistContainer from './components/ArtistContainer';
import ArtistDetails from './components/ArtistDetails';
import {Router} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">Home Page</Route>
                    <Route exact path="/artists"><ArtistContainer /></Route>
                    <Route path="/artists/:id"><ArtistDetails /></Route>
                </Switch>
            </div>
        </Router>
    );
}
export default App;
