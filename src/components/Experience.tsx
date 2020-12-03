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
    resource_link?: URL
}

const jobs: Jobs[] = [
    {
        name: 'Amazon',
        description: ['Starting Soon'],
        start_date: new Date(2021, 0, 4),
        end_date: null,
        position: 'Software Development Engineer 1',
    },
    {
        name: 'AWS Internship',
        description: [
            'Utilized Golang to create APIs to securely communicate between CodeBuild and CodeArtifact',
            'Sanitized Data in Scala',
            'Integrated other services to set up package managers',
            'Communicated with senior engineers to develop & establish best scalable practices',
            'Developed using Microservices to allow scalability and ensure continuous customer access',
            'Learned CodeBuild, DynamoDB, and more',
        ],
        start_date: new Date(2020, 5, 1),
        end_date: new Date(2020, 7, 21),
        position: 'Software Development Engineer Intern',
        resource_link: new URL(
            'https://docs.aws.amazon.com/codeartifact/latest/ug/codebuild.html',
        ),
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
