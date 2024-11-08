import './App.css'
import EventCard from './components/EventCard/EventCard'


function App() {
    const onShareClickHandler = () => {
        console.log('clicked on SHARE btn'); 
    }
    const onFavoriteClickHandler = () => {
        console.log('clicked on FAV btn'); 
    }
    const onInfoClickHandler = () => {
        console.log('clicked on INFO btn'); 
    }
    const onRemoveClickHandler = () => {
        console.log('clicked on REMOVE btn'); 
    }
    return (
        <div className='App'>
            <EventCard>
                <EventCard.Title onShareClick={onShareClickHandler}>Example Title</EventCard.Title>
                <EventCard.Content>Some text in the card</EventCard.Content>
                <EventCard.ActionBar onMore={ onInfoClickHandler } onRemove={onRemoveClickHandler} onFav={onFavoriteClickHandler}></EventCard.ActionBar>
            </EventCard>
        </div>
        
  )
}

export default App
