import Proptypes from "prop-types";

const Hello = ({name})=> <p>{`Hello, ${name}`}</p>;

// proptypes are only used in dev not in production
Hello.propTypes={
    name: Proptypes.string.isRequired,
};

export default Hello;

