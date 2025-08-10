export default function Goal({goals}){
    const goalList = goals.forEach(goal => {
        <div className="goal" onClick={() => console.log("Placeholder for goal click action")}>
            <p className="goalText">{goal.text}</p>
            <small>{goal.deadline}</small>
        </div>
    });
    return(
        <div className="goalList">
            {goalList}
        </div>
    )
}