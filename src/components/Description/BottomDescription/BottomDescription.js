import './BottomDescription.css'
export const BottomDescription = (props) => {
    const { className, style, title1, title2, content } = props;
    return (
        <div className={`${className ? className : ''} responsive-branch`} style={style}>
            <div className="bottom-title" style={title2 === 'NEWS' || title2 === 'US' || title2 === 'PROGRAMS' ? { display: 'flex' } : {}}>
                <div className='font-48 bold darkPurple'>{title1}</div>
                <div className={`font-48 bold red ${!['NEWS', 'US', 'PROGRAMS'].includes(title2) ? 'mt--15' : ''}`}>
                    {title2 === 'NEWS' || title2 === 'US' | title2 === 'PROGRAMS' ? '\u00A0' : ''}{title2}
                </div>
            </div>
            <div className='font-18 bold black'>{content}</div>
        </div>
    )
}