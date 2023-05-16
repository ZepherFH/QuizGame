import { useState } from "react";
import GamePage from "./components/GamePage";
import PageFinal from "./components/Finish";
import ShowAnswers from "./components/ShowAnswer";
import './components/Game.css'
import Begin from "./components/Begin";
import Capture from "./components/Capture";

function App() {

  const [Page, setPage] = useState('Home')
  const [score, setscore] = useState(0);
  const [listQuestions, setListQuestions] = useState(
    JSON.parse(localStorage.getItem("listQuestions")) || []
  )

  return (

    <div className="container mt-2">

      {
        Page === 'Home' && (
          <div>
            <Begin
              setPage={setPage}
            />
          </div>
        )
      }

      {
        Page === 'Capture' && (
          <div>
            <Capture
              setPage={setPage}
              listQuestions={listQuestions}
              setListQuestions={setListQuestions}
            />
          </div>
        )
      }

      {

        Page === 'Game' && (
          <div>
            <GamePage
              Page={Page}
              setPage={setPage}
              listQuestions={listQuestions}
              score={score}
              setscore={setscore}
            />
          </div>
        )
      }

      {
        Page === 'Finish' && (
          <div>
            <PageFinal
              setPage={setPage}
              listQuestions={listQuestions}
              score={score}
              setscore={setscore}
            />
          </div>
        )
      }

      {
        Page === 'Answers' && (
          <div>
            <ShowAnswers
              setPage={setPage}
              listQuestions={listQuestions}
            />
          </div>
        )
      }

    </div>
  )
}

export default App