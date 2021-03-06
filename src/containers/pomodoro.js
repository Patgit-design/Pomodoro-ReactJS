import { useCallback, useState } from "react"; //evite de replay chaque fonction qui est constante 
import { useTimer } from "../core/hooks/use-timer";

import Display from "../components/display";
import classnames from "classnames";
import Tools from "../components/tools";
import Modal from "../components/modal";

import { SESSION_DURATION } from "../core/constants";


const Pomodoro = () => {
    const [showModal, setShowModal] = useState(false);//par defaut le modal n est pas montre

    const [{ running, seconds }, { setRunning, setSeconds }] = useTimer(SESSION_DURATION, false,
        () => setShowModal(true)
    );


    const handleMinus = useCallback(() => setSeconds(val => Math.max(val - 60, 0)), [setSeconds]); //useCallback permet de n appeler la fonction que 1x
    const handleReset = useCallback(() => setSeconds(SESSION_DURATION), [setSeconds]); //[]sont les dependances
    const handlePlayPause = useCallback(() => setRunning(val => !val), [setRunning]);
    const handlePlus = useCallback(() => setSeconds(val => val + 60), [setSeconds]);
    const handleCloseModal = useCallback(() => {
        setShowModal(false);
        handleReset();
    }, [setShowModal, handleReset]);
    const handleRestart = useCallback(() => {
        handleCloseModal();
        handlePlayPause();
    }, [handleCloseModal, handlePlayPause]);

    return (
        <div className={classnames("columns", "is-mobile", "is-centered")}>
            <div className={classnames("colum", "is-half")}>
                <Display seconds={seconds} />
                <Tools
                    running={running}
                    onMinus={handleMinus}
                    onReset={handleReset}
                    onPlayPause={handlePlayPause}
                    onPlus={handlePlus}
                />
            </div>
            {showModal && (
                <Modal onClose={handleCloseModal} onRestart={handleRestart} />
            )}
        </div>
    )
};
export default Pomodoro;