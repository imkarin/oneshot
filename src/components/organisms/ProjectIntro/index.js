import './style.scss'
import Image from '../../atoms/Image'
import Text from '../../atoms/Text'
import TextH4P from '../../molecules/TextH4P'
import TextH4H3 from '../../molecules/TextH4H3'

const ProjectIntro = props => {

    return (
        <header className="ProjectIntro">
            <Image type="projectHeader" src={props.headerImgSrc} alt="Design/Development project header" />

            <section>
                <Text type="h1">{props.projectTitle}</Text>

                <div className="col one-of-four">
                    <TextH4P h4Text="Description" pText={props.description} />
                </div>

                <div className="col one-of-four">
                    <TextH4P h4Text="Branche" pText={props.branche} />
                </div>

                <div className="col one-of-four">
                    <TextH4H3 h4Text="Year" h3Text={props.year} />
                </div>

                <div className="col one-of-four">
                    <TextH4H3 h4Text="Tasks" h3Text={props.tasks} />
                </div>
            </section>
        </header>
    )
}

export default ProjectIntro