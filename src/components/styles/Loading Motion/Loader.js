import Loading from "./Loading";

const Loader = () => {
    return (
        <Loading>
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Loading>
    );
};

export default Loader;
