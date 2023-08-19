import "./DataElements.css"
const DataElements = (props) => {
    return(
        <div className="row dataElements">
            <div className="col-md-auto dataStart">{props.name}</div>
            <div className="col-md-auto dataMid">{props.age}</div>
            <div className="col-md-auto dataMid">{props.gender}</div>
            <div className="col-md-auto dataMid">{props.region}</div>
            <div className="col-md-auto dataEnd">{props.degree}</div>
        </div>
    )
}

export default DataElements;