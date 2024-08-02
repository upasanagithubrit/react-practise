import Tours from './tours'
import data from './data'
import {useState} from 'react'
const App=()=>
    {
        const[tours,setTours]= useState(data);
        const removecard=(id)=>
            {
                const newtours=tours.filter(tours=>tours.id!=id);
                setTours(newtours)
            }
        return (
            <Tours tours={tours}  removecard={removecard}/>
        )


    }


    export default App;