
import {Fragment, useState} from "react"; //to use multiple elements in a component we can use fragments
import {MouseEvent} from "react"; //to use the type of event we need
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
    //event Handler fuction
    const handleClick=(event:MouseEvent) =>console.log(event);
    //we will get an error if we dont import the type of event here MouseEvent
    //this is known as type annotation.


    //let selectedIndex=0; // this will help us to select the index of the item clicked
    //One more method to do this is by using the useState hook
    //Hook
    const [selectedIndex,setSelectedIndex]= useState(-1);//this is the state hook using which we can tell react that the data can change overtime.
    //arr[0]; //this is the variable (SelectedIndex) 
    //arr[1]; //this is the updater function (setSelectedIndex
    
    return (
        <>
        <h1>LIST GROUP</h1>
        {message}
        {/*this is another logical way*/}
        {items.length===0 && <p>no items found</p>}
        <ul className="listgroup">
            {items.map((item)=>( //we are using the mapping method here
                <li  //we can also add another parameter in the key that is index
                    className="list-group-item" 
                    //if we wantt that the options when selected will change colour then the following code is necessary
                    //className={
                        //selectedIndex===index
                        //?"list-group-item active"
                        //:"list-group-item"
                    //}
                    key={item} 
                    onClick={()=> console.log(item)}//this onclick function will show the item in the console when the items are clicked
                //if the index parameter is added then we will be able to see the index of the item clicked
                //key={item} onClick={(event)=> console.log(event)}//
                //if we use the function handleClick then we can write
                //onClick={handleClick} 

                //if we want to add a colour to the selected then 
                //onClick={()=>setSelectedIndex(index)} //this will set the index of the item clicked 
                //by the above code we will get the item coloured when it is selected
                >
                    {item}
                </li> //key is necessary for react
            ))}
        </ul>
        </>
    );
}
export default ListGroup;
//SyntheticBaseEvent is the type of the event that is passed to the event handler.
//It is also a wrapper around the native event and has the same properties as the native event.
//Hook is a special function that lets you “hook into” React features. For example, useState is a Hook 