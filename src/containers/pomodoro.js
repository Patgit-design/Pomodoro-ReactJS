import Display from "../components/display";
import classnames from "classnames";


const Pomodoro = () => {
    const seconds = 1500;

    //to do: ajouter la logique
    return (
        <div className={classnames("columns", "is-mobile", "is-centered")}>
            <div className={classnames("colum", "is-half")}>
                <Display seconds={seconds} />

            </div>
        </div>
    )
};
export default Pomodoro;