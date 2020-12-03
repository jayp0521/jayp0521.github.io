import styled from 'styled-components'
import { useState } from 'react'

const JobsName = styled.div`
    border: var(--code-color) 1px solid;
    font-family: var(--font-mono);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 2vh 0;
    cursor: pointer;
    background-image: linear-gradient(
        rgba(100, 255, 218, 0.3),
        rgba(100, 255, 218, 0.3)
    );
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 0 100%;
    transition: background-size 0.5s, color 0.5s;

    :hover {
        width: 100%;
        background-size: 100% 100%;
    }
`

const JobsDescription = styled.div`
    font-family: var(--font-mono);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2vh 0 2vh 1vw;

    .position {
        color: var(--orange);
        margin: 0.5vh 0;
    }

    .date {
        margin: 0.5vh 0;
    }

    .description {
        margin: 1.5vh 0;
    }
`

const JobsMain = styled.div`
    display: flex;
    border: var(--code-color) 1px solid;
    width: 100%;
`

const JobsContainer = styled.div<{ primary?: boolean }>`
    flex: ${props => (props.primary ? `3 1 auto` : `1 1 auto`)};
    min-width: ${props => (props.primary ? `75%` : `auto`)};
    display: flex;
    flex-direction: column;
    min-height: 100%;
`

interface Jobs {
    name: string
    description: string[]
    start_date: Date
    end_date: Date | null
    position: string
}

const jobs: Jobs[] = [
    {
        name: 'Amazon',
        description: ['stuff'],
        start_date: new Date(2021, 0, 4),
        end_date: null,
        position: 'Software Development Engineer 1',
    },
    {
        name: 'Amazon Internship',
        description: ['other stuff'],
        start_date: new Date(2020, 5, 1),
        end_date: new Date(2020, 7, 21),
        position: 'Software Development Engineer Intern',
    },
]

function dateToString(date: Date | null) {
    return date
        ? date.toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
          })
        : 'Present'
}

export default function Experience() {
    const [currentShownJob, setCurrentShownJob] = useState(jobs[0])
    return (
        <>
            <JobsMain>
                <JobsContainer>
                    {jobs.map((job, index) => {
                        return (
                            <JobsName
                                key={job.position}
                                id={job.position}
                                onClick={() => setCurrentShownJob(job)}
                            >
                                {index + 1 + '. ' + job.name}
                            </JobsName>
                        )
                    })}
                </JobsContainer>
                <JobsContainer primary>
                    <JobsDescription>
                        <h2 className={'position'}>
                            {currentShownJob.position}
                        </h2>
                        <p className={'date'}>
                            {dateToString(currentShownJob.start_date) +
                                ' - ' +
                                dateToString(currentShownJob.end_date)}
                        </p>
                        <p className={'description'}>
                            {currentShownJob.description}
                        </p>
                    </JobsDescription>
                </JobsContainer>
            </JobsMain>
        </>
    )
}
