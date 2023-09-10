import { useState } from "react";
import "./App.scss";

import VideoQuestion from "./components/video_question";

import {
    DndContext, 
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
  } from '@dnd-kit/core';
  import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
  } from '@dnd-kit/sortable';
  

  import {
    restrictToVerticalAxis,
    restrictToWindowEdges,
  } from '@dnd-kit/modifiers';


  import {SortableItem} from './components/SortableItem';

function App() {


    const [items, setItems] = useState([1, 2, 3]);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
        })
    );
      

    return (
        <div className="app">

            <DndContext 
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                modifiers={[restrictToVerticalAxis]}
                >
            <SortableContext 
                items={items}
                strategy={verticalListSortingStrategy}
            >
                
                {/* {items.map(id => <SortableItem key={id} id={id} modifiers={[restrictToWindowEdges]} />)} */}
                {items.map(id => <VideoQuestion key={id} id={id} modifiers={[restrictToWindowEdges]} />)}

            </SortableContext>
            </DndContext>
            
        </div>
    )
    function handleDragEnd(event) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}

export default App;
