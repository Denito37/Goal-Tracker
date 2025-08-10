import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from "./pages/login.tsx";
import Goals from "./pages/goals.tsx";
import Header from "./components/header/header.tsx";
import GoalForm from "./pages/goalForm.tsx";
import Entries from "./pages/entries.tsx";
import EntryForm from "./pages/entryForm.tsx";

export default function Sidebar() {
    return (
        <Router>
            <div className="sidebar">
                <Header />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/goals" element={<Goals />} />
                    <Route path="/goalform" element={<GoalForm />} />
                    <Route path="/entries" element={<Entries />} />
                    <Route path="/entryform" element={<EntryForm />} />
                </Routes>
            </div>
        </Router>
    );
}
/**
TODO:
 * - swap goal button with text input that by default creates a new goal when no goal is there & adds new entry to most recent goal by default
 *  - install required packages (react, react-dom, react-router typescriptSupport, Auth0, etc.) : half done
 *  - Get extension to work in dev mode
 *  - build out components
 *  - style components
 *  - Create backend functionality
 *      - Connect with database
 *      - Ultilize Auth0 for authentication
 *      - Create API endpoints for goals 
 *  - add functionality to components
 *      - Goal :
 *          - return list of goals as a clickable component from database
 *          - allow user to add, edit, and delete goals
 * **/