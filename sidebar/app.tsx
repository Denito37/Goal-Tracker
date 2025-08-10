import Header from "./components/header/header.tsx"
import Goal from "./components/goal/goal.tsx"
import AddGoal from "./components/addGoal/addGoal.tsx"

export default function Sidebar() {
    return(
        <div className="sidebar" >
            <Header />
            <Goal />
            <AddGoal />
        </div>
    )
}
/**
TODO:
 *  - install required packages (react, react-dom, react-router typescriptSupport, Auth0, etc.)
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