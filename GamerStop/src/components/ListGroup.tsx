
import {Fragment} from "react"; //to use multiple elements in a component we can use fragments
//To create a ListGroup component
{/* function ListGroup(){
    return (
    <Fragment>
        /* wrap inside a fragment
        <h1>LIST GROUP</h1>
        <ul className="list-group">
           <li className="list-group-item">An item</li>
           <li className="list-group-item">A second item</li>
           <li className="list-group-item">A third item</li>
           <li className="list-group-item">A fourth item</li>
           <li className="list-group-item">And a fourth item</li>
    </ul> 
    </Fragment>
    ); 
} */}
//we can also use fragments by just giving <> </> instead of <Fragment> </Fragment>
//we are using <> and mapping as follows

function ListGroup(){
    const items=["INDIA","AUS","ENG","SA","PAK"]
    //if functionality this can also be added inside if and wrapped in the fragment but in this way
    //we are not repeating the same code again anad again 
    const message=items.length===0?<p>No items to display</p>: null; 
    const getMessage=()=>{
        return items.length===0?<p>no items found</p>:null;
    }
    //we can call this fucntion inside the return statement as well
    return (
        <>
        <h1>LIST GROUP</h1>
        {message}
        {/*this is another logical way*/}
        {items.length===0 && <p>no items found</p>}
        <ul className="listgroup">
            {items.map((item)=>( //we are using the mapping method here
                <li key={item}>{item}</li> //ket is necessary for react
            ))}
        </ul>
        </>
    );
}
export default ListGroup;