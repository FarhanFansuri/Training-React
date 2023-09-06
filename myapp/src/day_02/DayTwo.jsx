//Conditional Rendering
//Working with List

function DayTwo(params) {

    const users = [
        {name: "John", age:21},
        {name: "Jane", age:22},
        {name: "Sasha", age:23},
    ]

    const planet = [
        {name: "Mars" , isGasPlanet: false},
        {name: "Saturn", isGasPlanet: true},
        {name: "Venus", isGasPlanet: false},
        {name: "Uranus", isGasPlanet: true},
        {name: "Earth", isGasPlanet: false},
        {name: "Jupiter", isGasPlanet: true},
        {name: "Neptune", isGasPlanet: true},
    ]


    return (
     <div>
        
        {/* {age >= 15 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
        <h1 style={{color: isGreen ? "green" : "red"}}>This has Color</h1>
        {isGreen && <button>Hello Green</button>} */}

        {users.map((value,index)=>{
            return <Iter name={value.name} age={value.age} key={index}/>
        })}

        {planet.map((value,index)=>{
            return <p style={{ color : value.isGasPlanet ? "red" : "green" }}>{value.name}</p>
        })}
     </div>   
    )
}

function Iter(props){
    return <h1 key={props.key}>Name : {props.name} and age : {props.age}</h1>
}


export default DayTwo