import { useState } from 'react'
import GradientList from '../styles/GradientList'
import {
    JobsContainer,
    JobsDescription,
    JobsMain,
    JobsName,
} from '../styles/JobsStyle'

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
        description: [...Array(10).keys()].map(_ => 'hi'),
        start_date: new Date(2021, 0, 4),
        end_date: null,
        position: 'Software Development Engineer 1',
    },
    {
        name: 'AWS Internship',
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
    const [currentJobIndex, setCurrentJobIndex] = useState(0)
    return (
        <>
            <JobsMain>
                <JobsContainer>
                    {jobs.map((job, index) => {
                        return (
                            <JobsName
                                key={job.position}
                                id={job.position}
                                onClick={() => {
                                    setCurrentShownJob(job)
                                    setCurrentJobIndex(index)
                                }}
                                className={
                                    currentJobIndex === index ? 'active' : ''
                                }
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
                        <GradientList className={'description'}>
                            {currentShownJob.description.map(sentence => {
                                return <li>{sentence}</li>
                            })}
                        </GradientList>
                    </JobsDescription>
                </JobsContainer>
            </JobsMain>
        </>
    )
}
