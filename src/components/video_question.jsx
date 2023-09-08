import TextareaAutosize from "react-textarea-autosize";

import "./video_question.scss";
import { useEffect, useState } from "react";

const options = [
    {
        "value":"Short Answer",
        "class_name":"short_answer",
    },
    {
        "value":"Long Answer",
        "class_name":"long_answer",
    },
    {
        "value":"Multiple Choice",
        "class_name":"multiple_choice",
    },
    {
        "value":"Video Question",
        "class_name":"video_icon",
    },
    {
        "value":"Header Text",
        "class_name":"header_text",
    }

]

function VideoQuestion(){

    const [isOpen, setOpen] = useState(false);

    const onClickQuestionSelection = (event) =>{
        event.preventDefault();
        setOpen(!isOpen);
    }


    useEffect(() => {
        console.log(isOpen);
      });

    return(
        <div className="video_question">
            <span className="grip_dots"></span>
            <form action="/" method="get" >
                <div className="question_title">
                    <div>                       
                        <input type="text" name="title" placeholder="Type your question here."/>
                        <button className="dropdown_button" onClick={onClickQuestionSelection}>
                            <span className="question_type_icon"></span>
                            <span className="carret_icon"></span>
                        </button> 
                        {isOpen && 
                            <div className="dropdown_menu">
                                {
                                    options.map((item, index) =>(
                                        <button>
                                            <span className={item.class_name}></span>
                                            <span>{item.value}</span>
                                        </button>
                                    ))
                                }
                            </div>
                        }                
                    </div>
                    <label>
                        <span className="file_attachment_icon"></span>
                        <input type="file" name="attachment"/>
                    </label>                   
                </div>
                <div className="video_input">
                    <iframe className="responsive-iframe" width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                </div>
                <TextareaAutosize placeholder="Write notes that are only visible to you. (Optional)" maxRows="5"/>
                <p className="required_note">Video questions are required.</p>
            </form>
        </div>  
    )
}

export default VideoQuestion;