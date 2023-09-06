import "./video_question.scss";
import TextareaAutosize from 'react-textarea-autosize';


function VideoQuestion(){
  

    return(
        <div className="video_question">
            <span className="grip_dots"></span>
            <form action="/" method="get" >
                <div className="question_title">
                    <div>                       
                        <input type="text" name="title" placeholder="Type your question here."/>
                        <span>drop</span>                  
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