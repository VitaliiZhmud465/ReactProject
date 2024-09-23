import './CircleImageButton.css'
export const CircleImageButton = (props) => {
    const { src, onClick, className, style, imageStyle } = props;
    return (
        <div className={`circle-image-button ${className === undefined ? "" : className}`} style={style} onClick={() => {
            if (onClick == undefined) return
            onClick()
        }} >
            <img src={src} style={imageStyle} className="circle-image"/>
        </div>
    )
}