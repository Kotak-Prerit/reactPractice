function ImageComponent(props) {
    return (
        <div className="wrapper">
            <div className="collection-one">
                <div>
                    <p className="box-title">{props.boxTitle}</p>
                    <p className="selected-subhead">{props.selectedSubhead}</p>
                </div>
                <div className="image">
                    <img src={props.image} className="img" alt="" />
                </div>
            </div>
            <div className="collection-two">
                <p className="box-title">{props.box_title}</p>
                <p className="selected-subhead">{props.boxSubhead}</p>
            </div>
        </div>
    )
}

export default ImageComponent;