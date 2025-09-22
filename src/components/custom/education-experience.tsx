export default function EducationExperience() {

    const education = [
        {
            institution: "Ayungon Central School",
            degree: "Elementary Education",
            year: "2009 - 2015"
        },
        {
            institution: "Ayungon National High School",
            degree: "Junior High School",
            year: "2015 - 2018",
        },
        {
            institution: "Foundation Preparatory Academy",
            degree: "Senior High School - STEM",
            year: "2018 - 2021"
        },
        {
            institution: "Negros Oriental State University",
            degree: "Bachelor of Science in Information Technology",
            year: "2021 - 2025"
        }
    ];

    const experience = [
        {
            company: "Negros Oriental State University",
            location: "Dumaguete City, Philippines",
            position: "Intern",
            role: "Software Developer",
            duration: "July 2024 - December 2024"
        },
    ];

    return (
        <div className="flex justify-around">
            <div>Education
            {education.reverse().map((edu, index) => (
                <div key={index}
                className="space-y-2"
                >
                    <h3>{edu.institution}</h3>
                    <p>{edu.degree} - {edu.year}</p>
                </div>
            ))}
            </div>
            <div>
                Experience
                {experience.reverse().map((exp, index) => (
                    <div key={index}
                    className="space-y-2"
                    >
                        <h3>{exp.company}</h3>
                        <p>{exp.position} - {exp.duration}</p>
                    </div>
                ))}
            </div>
        </div>
    );

}