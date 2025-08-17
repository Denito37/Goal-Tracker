export default function Goal({goals}){
    const goToEntries = console.log("Placeholder for goal click action")
    return(
        <div className="goal" onClick={() => goToEntries}>
            <p className="goalText">{goals.text}</p>
            <small>{goals.deadline}</small>
        </div>
    )
}