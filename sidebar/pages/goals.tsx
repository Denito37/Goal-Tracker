import Goal from "../components/goal/goal.tsx"

export default function Goals({goals}){
    const goalList = goals.forEach(goal => {
        return <Goal key={goal.id} goals={goal} />;
        
    });
    return (
        <div className="goalsPage">
            {goalList}
        </div>
    );
}