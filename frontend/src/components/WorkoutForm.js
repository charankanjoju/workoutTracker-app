import {useState} from 'react'
import {useWorkoutsContext} from '../hooks/useWorkoutsContext'
const WorkoutForm =()=>{
    const {dispatch}=useWorkoutsContext()
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [height,setHeight]=useState('')
    const [weight,setWeight]=useState('')
    const [goal,setGoal]=useState('')
    const [plan,setPlan]=useState('')
    const [error,setError]=useState(null)
    const handleSubmit =async(e)=>{
        e.preventDefault()

        const workout={name,age,height,weight,goal,plan}

        const response=await fetch('/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json=await response.json()
        if (!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            setName('')
            setAge('')
            setHeight('')
            setWeight('')
            setGoal('')
            setPlan('')
            dispatch({type: 'CREATE_WORKOUT',payload:json})
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new client</h3>
            <label>Name:</label>
            <input
            type='text'
            onChange={(e)=>setName(e.target.value)}
            value={name}
            />
            <label>Age:</label>
            <input
            type='number'
            onChange={(e)=>setAge(e.target.value)}
            value={age}
            />
            <label>Height:</label>
            <input
            type='number'
            onChange={(e)=>setHeight(e.target.value)}
            value={height}
            />
            <label>Weight:</label>
            <input
            type='number'
            onChange={(e)=>setWeight(e.target.value)}
            value={weight}
            />
            <label>Goal:</label>
            <input
            type='text'
            onChange={(e)=>setGoal(e.target.value)}
            value={goal}
            />
            <label>Plan:</label>
            <input
            type='text'
            onChange={(e)=>setPlan(e.target.value)}
            value={plan}
            />
            <button>Add Client</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
export default WorkoutForm