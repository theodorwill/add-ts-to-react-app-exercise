import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import TVSchedule from './TVSchedule';
import TVScheduleItem from './TVScheduleItem';

type Program = {
    id: number;
    name: string;
    description: string;
    start: string;
};

type Params = {
    channelId?: string;
};

const TVPage = () => {

    const { channelId } = useParams<Params>();
    const [programs, setPrograms] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        if (channelId) {
            fetch("https://tv-api-k39vq.ondigitalocean.app/" + channelId + ".json")
                .then(res => res.json())
                .then(data => {
                    setPrograms(data.map((program: Program, index: number) => {
                        const startDate = dayjs(program.start)
                        return { ...program, start: startDate.format("HH:mm"), id: index }
                    }));
                    setIsLoading(false);
                })
        }
    }, [channelId]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-2">

                    {!isLoading && programs.length && <TVSchedule title={channelId}>
                        {
                            programs.map(program => <TVScheduleItem key={program.id} program={program} />)
                        }
                    </TVSchedule>}
                    {isLoading && <img src="loading.gif" id="js-loading" className="loading-spinner" alt="loading" />}
                </div>
            </div>
        </div>

    )
}

export default TVPage;