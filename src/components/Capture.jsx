import AddBtn from "./Add";
import InitBtn from "./InitBtn";
import CleanBtn from "./CleanBtn";
import QuestionList from "./QuestionsList";


const Capture = ({
    setPage,
    listQuestions,
    setListQuestions,
}) => {

    return (
        <div class="containerC">

            <div className="row">
                <div className="col text-start">
                    <h1>Capturar Preguntas</h1>
                </div>
                <div className="col text-end mt-1">
                    <CleanBtn
                        setListQuestions={setListQuestions}
                    />
                    <AddBtn
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
                    <InitBtn
                        setPage={setPage}
                    />
                </div>
            </div>

            <hr />
            {
                listQuestions.length === 0 && (
                    <div className="text-center">
                        <h3>La lista de preguntas esta en 0.</h3>
                        Añade una nueva preguntas.
                    </div>
                )
            }
            {
                listQuestions.map((Question) => (
                    <QuestionList
                        Question={Question}
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
                ))
            }


            <hr />

            <div className="col text-end">
                <CleanBtn
                    setListQuestions={setListQuestions}
                />
                <AddBtn
                    listQuestions={listQuestions}
                    setListQuestions={setListQuestions}
                />
                <InitBtn
                    setPage={setPage}
                />
            </div>

        </div>
    )
}

export default Capture