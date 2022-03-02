import styles from './Media.module.css';

export const Media = ({as, children, className, reverse, ...props}) => {
    const Tag = as || 'div';

    return (
        <Tag className={`${styles['Media']} ${className ? className : ''} ${reverse ? styles['Media-reverse'] : ''}`}
             {...props}
        >
            {children}
        </Tag>
    );
}

Media.Figure = Figure;

function Figure({as, children, className, ...props}) {
    const Tag = as || 'figure';

    return (
        <Tag className={`${styles['Media-figure']} ${className ? className : ''}`}
             {...props}
        >
            {children}
        </Tag>
    );
}

Media.Body = Body;

function Body({as, children, className, ...props}) {
    const Tag = as || 'p';

    return (
        <Tag className={`${styles['Media-body']} ${className ? className : ''}`}
             {...props}
        >
            {children}
        </Tag>
    );
}
