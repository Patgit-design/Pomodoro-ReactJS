import { useState, useEffect } from "react";
import useInterval from "use-interval"




//eslint desactive a la ligne suivante car il n accepte pas les fonctions vides.

//eslint-disable-next-line-no-empty-function
const noop = () => { };

export const useTimer = (
    initialSeconds,
    initialRunning = false,
    onFinished = noop,

) => {

    const [running, setRunning] = useState(initialRunning)
    const [seconds, setSeconds] = useState(initialSeconds)

    useInterval(() => {
        running && setSeconds(val => Math.max(val - 1, 0))

    }, 1000); //ttes les secondes

    //useEffect depuis react, chaque fois que les secondes changent cette fonction va run

    useEffect(

        () => {

            if (seconds === 0) {
                setRunning(false);
                onFinished();
            }
        },
        [seconds]
    )

    return [
        { running, seconds },
        { setRunning, setSeconds },
    ]
};