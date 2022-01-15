function Projects({ projects }) {
    return (
        <ul>
            {
                projects.map(
                    (project) => (<li>{project.title}</li>)
                    )
            }
        </ul>
    )
}

export async function getStaticProps() {
    return {
        props: 
            {
                projects: [
                    {
                        title: 'Test Project 1'
                    },
                    {
                        title: 'Test Project 2'
                    },
                    {
                        title: 'Test Project 3'
                    }
                ]
            }
    }
}

export default Projects