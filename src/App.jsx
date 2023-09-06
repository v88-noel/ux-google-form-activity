import { useState } from "react";
import "./App.scss";

import VideoQuestion from "./components/video_question";

function App() {
  const [count, setCount] = useState(0)

    return (
        <div className="app">
            <VideoQuestion/>
        </div>
    )
}

export default App;
