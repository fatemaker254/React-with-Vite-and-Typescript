import Message from './Message';
import ListGroup from "./components/ListGroup";

function App() {
    //return <div><Message /></div>; to print the message component
    //return <div><ListGroup/></div>;
    
    let items=["INDIA","AUS","ENG","SA","PAK"]
    //to use functions with props 
    //when we will select a object then the function will be called 
    const handleSelectItem=(item:string)=>console.log(item);

    return(
        <div>
            <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
        </div>
    )
}

export default App;