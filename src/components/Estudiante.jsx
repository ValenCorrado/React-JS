const Estudiante = ({name, status}) => {
    return (
        <div>
            <h1>Nombre: {name} </h1> {/* no se pueden crear componenetes con mas de un elemento */}
            <h3>Status: {status} </h3>
        </div>
    );
};
export default Estudiante; 