import Hello from "../components/hello";
import classnames from "classnames";


const Pomodoro = () => {
    const name = "Patricia";

    //to do: ajouter la logique
    return (
        <div className={classnames("columns", "is-mobile", "is-centered")}>
            <div className={classnames("colum", "is-half")}>
                <Hello name={name} />

            </div>
        </div>
    )
};
export default Pomodoro;