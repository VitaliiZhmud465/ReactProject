import './BottomDescription.css'
export const BottomDescription = (props) => {
    const { className, style, title1, title2, content } = props;
    return (
        <div className={`${className ? className : ''} responsive-branch`} style={style}>
            <div className="bottom-title" style={title2 === 'NEWS' || title2 === 'US' || title2 === 'PROGRAMS' || title2 === 'DETAILS' || title2 === 'STRUCTURE' ? { display: 'flex' } : {}}>
                <div className='font-48  typo-blue'>{title1}</div>
                <div className={`font-48 typo-red ${!['NEWS', 'US', 'PROGRAMS', 'DETAILS', 'STRUCTURE'].includes(title2) ? 'mt--15' : ''}`}>
                    {title2 === 'NEWS' || title2 === 'US' || title2 === 'PROGRAMS' || title2 === 'DETAILS' || title2 === 'STRUCTURE' ? '\u00A0' : ''}{title2}
                </div>
            </div>
            <div className='font-18 typo-general black'>{content}</div>
        </div>
    )
}