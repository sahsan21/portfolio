import React from 'react';

const experiences = [
    {
        title: 'Healthcare and Mobile Security Officer',
        company: 'Paladin Security, St. John\'s, NL',
        period: 'Jun 2022 — Feb 2024',
        responsibilities: [
            'Acted as deterrent to prevent criminal actions, ensuring a safe environment for business operations.',
            'Gathered and implemented resolutions, planned follow-ups, and logged incident reports.',
            'Conducted security checks and responded to alarms, investigating and resolving incidents.',
            'Collaborated with local law enforcement and trained new personnel on site-specific protocols.'
        ]
    },
    {
        title: 'Assistant Manager',
        company: 'Shell Gas Station, St. John\'s, NL',
        period: 'Sep 2020 — Jun 2022',
        responsibilities: [
            'Assisted the Manager in overseeing the daily operations of the gas station.',
            'Managed inventory, including ordering and stocking merchandise, and maintaining optimal stock levels.',
            'Trained staff in customer service best practices and monitored their interaction with customers.',
            'Prepared and reviewed financial reports and budgets, ensuring profitability.',
            'Conducted regular safety drills and maintained safety equipment.',
            'Analyzed sales reports to understand customer preferences and adjusted product offerings accordingly.',
            'Ensured all security protocols were followed by staff to protect company assets.'
        ]
    },
    {
        title: 'Customer Retention Agent',
        company: 'S&P Data LLC, St. John\'s, NL',
        period: 'Feb 2020 — Sep 2020',
        responsibilities: [
            'Developed strategies for customer retention and delivered exceptional service to every customer.',
            'Addressed customer concerns with empathy and resolved problems swiftly.',
            'Created and offered unique discount options, bolstering customer retention.',
            'Promoted superior experience by resolving associate and service delivery issues revealed by statistical reports.'
        ]
    }
];

const WorkExperience = () => (
    <section id="work-experience" className="section-work-experience">
        <h2>Work Experience</h2>
        {experiences.map((experience, index) => (
            <article key={index}>
                <h3>{experience.title}</h3>
                <h4>{experience.company}</h4>
                <p><em>{experience.period}</em></p>
                <ul>
                    {experience.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                    ))}
                </ul>
            </article>
        ))}
    </section>
);

export default WorkExperience;
