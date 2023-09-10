import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import "./SortableItem.scss";
import TextareaAutosize from "react-textarea-autosize";

export function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div ref={setNodeRef} style={style} className='sortable_item' >
        <span className='grip_dots' {...attributes} {...listeners} ></span>
        
        <p>Card Number {props.id}</p>
        <TextareaAutosize maxRows="3" className="dynamic_textarea"/>
    </div>
  );
}

export default SortableItem;