const Begin = ({ setPage }) => {

    return (
        <div class="position">
        <div class="background">
            <h1
                style={{
                    textAlign: "center"
                }}
            ><br></br><br></br><br></br><br></br>
            <font color="white" face="Berlin Sans FB">Quiz Game</font></h1>

            <div class="d-grid gap-2 col-6 mx-auto"><br></br>
            <button type="button" className="btn btn-success m2"
                onClick={() => setPage('Game')}>
                <i class="bi bi-controller"> Jugar</i>
                </button><br></br>
                
            <button type="button" className="btn btn-primary"
                onClick={() => setPage('Capture')}>
                <i class="bi bi-card-checklist"> Capturar</i>
                </button>
            </div>
        </div>
        </div>
    )
}

export default Begin