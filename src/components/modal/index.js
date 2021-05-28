import PropTypes from "prop-types";
import { createPortal } from "react-dom"; //permet d inserer une div dans la div de l app
import { NBSP, BREAK_DURATION } from "../../core/constants";
import {useTimer} from "../../core/hooks/use-timer"
import Button from "../tools/button";
import Display from "../display";

const Modal = ({
    onClose, 
    onRestart, 
}) => {

    const [{running, seconds}, {setRunning}] = useTimer(
BREAK_DURATION, true, onRestart,
    );


    return createPortal(
        <div className={"modal-overlay"}>
            <div className={"box"}>
                <h3>{"It's over !"}</h3>
                <p>{"Please take a BreakTime !"}</p>
                <Display seconds ={seconds}/>
                <div className={"is-flex"}>
                    <Button label={"Stop"} onClick ={onClose}/>
                    {NBSP}
                    <Button label={"Restart"} onClick = {onRestart}/>
                </div>
            </div>
        </div>,
        document.querySelector("#modals"),
    );
};


Modal.propTypes = {
    onClose: PropTypes.func.isRequired, 
    onRestart: PropTypes.func.isRequired,
};

export default Modal;