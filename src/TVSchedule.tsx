type Props = {
    title: string | undefined;
    children: JSX.Element | JSX.Element[];
};

const TVSchedule = ({ title, children }: Props) => {

    return <>
        <h1 id="js-title">{title}</h1>
        <div id="js-schedule">
            <ul className="list-group list-group-flush">
                {children}
            </ul>
        </div>
    </>
};

export default TVSchedule;