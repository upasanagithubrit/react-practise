import Card from './card.js'
import './tours.css'

const Tours=({tours,removecard})=>
    
    {
        return(
            <div>
        <h2>Cards Rendering</h2>
        <div className='tour-cards'>
            {
                tours.map((tour) => {
                    return (<Card key={tour.id} {...tour} removecard={removecard} />);
                })
            }
        </div>
            </div>
            
        )

    }

    export default Tours;