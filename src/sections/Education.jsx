import { FaGraduationCap } from 'react-icons/fa6';
import '../css/Education.css';

function Education() {
  const educationList = [
    {
      id: 1,
      degree: 'M.Sc. Computer Science',
      institution: 'Magadh University, Bodh-Gaya',
      period: '2024 - 2026',
      status: 'Currently Pursuing',
      description:
        'Postgraduate studies focused on computer science and related technologies.',
    },
    {
      id: 2,
      degree: 'BCA - Bachelor of Computer Applications',
      institution: 'Magadh University, Bodh-Gaya',
      period: '2020 – 2023',
      status: 'Completed',
      description:
        'Undergraduate studies in computer applications and information technology.',
    },
    {
        id: 3,
        degree: '12th - Intermediate',
        institution: 'Magadh Inter College, Shakurabad, Jehanabad',
        period: '2018 – 2020',
        status: 'Completed',
        description:
        'Higher Secondary education completed with a focus on academic fundamentals.',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-heading">
          <span className="section-eyebrow">MY JOURNEY</span>

          <h2>
            Education & <span>Qualifications.</span>
          </h2>

          <p>
            My academic journey in Computer Science and
            Information Technology.
          </p>
        </div>

        <div className="education-timeline">
          {educationList.map((item) => (
            <article className="education-item" key={item.id}>
              <div className="education-timeline-icon">
                <FaGraduationCap />
              </div>

              <div className="education-card">
                <div className="education-card-top">
                  <span className="education-period">
                    {item.period}
                  </span>

                  <span className="education-status">
                    {item.status}
                  </span>
                </div>

                <h3>{item.degree}</h3>

                <h4>{item.institution}</h4>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;