type Program = {
    id: number;
    name: string;
    description: string;
    start: string;
};

type Props = {
    program: Program;
};

const TVScheduleItem = ({ program }: Props) => {
    return <li className="list-group-item">
        <strong>{program.start}</strong>
        <div>{program.name}</div>
    </li>

};

export default TVScheduleItem;