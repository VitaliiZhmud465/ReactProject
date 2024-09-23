import './BottomDescription.css'
export const BottomDescription = (props) => {
    const { className, style, title1, title2, content } = props;
    return (
        <div className={`${className === undefined ? "" : className}`} style={style}>
            <div style={title2 === 'NEWS' ? { display: 'flex' } : {}}>
                <div className='font-48 bold darkPurple'>{title1}</div>
                <div className={`font-48 bold red mb-10 ${title2 != 'NEWS' ? 'mt--15' : ''}`}>{'\u00A0'}{title2}</div>
            </div>
            <div className='font-18 bold black'>{content}</div>
        </div>
    )
}