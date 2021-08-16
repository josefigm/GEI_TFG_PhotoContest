import ContestHeader from "./ContestHeader";
import Countdown from "react-countdown";
import { Container, Spinner } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import PhotographyGridPaginated from "./PhotographyGridPaginated";
import commonFunctions from "../../commons/functions"

const ContestOpenStatus = ({ contestData }) => {

    const isOcutarFotosHastaVotacion = () => {

        return contestData.ocutarFotosHastaVotacion;
    }

    return (
        <div>
            <ContestHeader contestData={contestData} />
            <hr />
            {/* Depending of the configuration of the contest, The photographies may be shown in this state. */

                isOcutarFotosHastaVotacion() ?


                    <h4 className="centeredParagraph"><FormattedMessage id='contest.contestDetail.Body.OpenState.PhotographySection.NoPhotosUntilVoting' /></h4>


                    :

                    <PhotographyGridPaginated contestName={contestData.nombreConcurso} contestId={contestData.idConcurso}/>
            }
            <Container className="centering">
                <h4><FormattedMessage id='contest.contestDetail.Body.OpenState.CountDown.Title' /></h4>
                <Spinner animation="grow" variant="danger" size="sm" />&ensp;
                <h4 className="hWithoutLineBreak"><Countdown daysInHours={true} date={Date.now() + commonFunctions.calculateDiffBetweenDates(new Date(contestData.fechaInicioVotacion), Date.now())} /></h4>
            </Container>
        </div>
    )

}

export default ContestOpenStatus;