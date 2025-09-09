// Course data extracted from EPFL study plan 2025-2026
const courseData = {
    'allCourses': [
        {
            id: 'COM-301',
            title: 'Computer security and privacy',
            code: 'COM-301',
            credits: 6,
            language: 'EN',
            semesters: ['BA5'],
            group: 'bloc-c',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/computer-security-and-privacy-COM-301'
        },
        {
            id: 'CS-300',
            title: 'Data-intensive systems',
            code: 'CS-300',
            credits: 6,
            language: 'EN',
            semesters: ['BA6'],
            group: 'bloc-c',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/data-intensive-systems-CS-300'
        },
        {
            id: 'CS-251',
            title: 'Theory of computation',
            code: 'CS-251',
            credits: 6,
            language: 'EN',
            semesters: ['BA6'],
            group: 'bloc-c',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/theory-of-computation-CS-251'
        },
        {
            id: 'SHS-BA5',
            title: 'SHS + MGT : Cycle Bachelor BA5',
            code: 'SHS',
            credits: 2,
            language: 'FR',
            semesters: ['BA5'],
            group: 'shs',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/programme-sciences-humaines-et-sociales'
        },
        {
            id: 'SHS-BA6',
            title: 'SHS + MGT : Cycle Bachelor BA6',
            code: 'SHS',
            credits: 2,
            language: 'FR',
            semesters: ['BA6'],
            group: 'shs',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/programme-sciences-humaines-et-sociales'
        },
        {
            id: 'MATH-310',
            title: 'Algebra',
            code: 'MATH-310',
            credits: 4,
            language: 'EN',
            semesters: ['BA3'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/algebra-MATH-310'
        },
        {
            id: 'MATH-207(d)',
            title: 'Analysis IV',
            code: 'MATH-207(d)',
            credits: 4,
            language: 'EN',
            semesters: ['BA4'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/analysis-iv-MATH-207-D'
        },
        {
            id: 'CS-341',
            title: 'Computer graphics',
            code: 'CS-341',
            credits: 6,
            language: 'EN',
            semesters: ['BA4'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/computer-graphics-CS-341'
        },
        {
            id: 'CS-320',
            title: 'Computer language processing',
            code: 'CS-320',
            credits: 6,
            language: 'EN',
            semesters: ['BA6'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/computer-language-processing-CS-320'
        },
        {
            id: 'EE-330',
            title: 'Digital IC design',
            code: 'EE-330',
            credits: 3,
            language: 'EN',
            semesters: ['BA6'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/digital-ic-design-EE-330'
        },
        {
            id: 'EE-200',
            title: 'Electromagnétisme I : lignes et ondes',
            code: 'EE-200',
            credits: 3,
            language: 'FR',
            semesters: ['BA5'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/electromagnetisme-i-lignes-et-ondes-EE-200'
        },
        {
            id: 'EE-201',
            title: 'Electromagnétisme II : calcul des champs',
            code: 'EE-201',
            credits: 3,
            language: 'FR',
            semesters: ['BA6'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/electromagnetisme-ii-calcul-des-champs-EE-201'
        },
        {
            id: 'EE-202(b)',
            title: 'Electronique I',
            code: 'EE-202(b)',
            credits: 4,
            language: 'FR',
            semesters: ['BA3'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/electronique-i-EE-202-B'
        },
        {
            id: 'EE-203(b)',
            title: 'Electronique II (pour IC)',
            code: 'EE-203(b)',
            credits: 4,
            language: 'FR',
            semesters: ['BA5'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/electronique-ii-pour-ic-EE-203-B'
        },
        {
            id: 'COM-304',
            title: 'Intelligent systems: communications & AI',
            code: 'COM-304',
            credits: 8,
            language: 'EN',
            semesters: ['BA6'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/intelligent-systems-communications-ai-COM-304'
        },
        {
            id: 'COM-308',
            title: 'Internet analytics',
            code: 'COM-308',
            credits: 6,
            language: 'EN',
            semesters: ['BA6'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/internet-analytics-COM-308'
        },
        {
            id: 'CS-233',
            title: 'Introduction to machine learning',
            code: 'CS-233',
            credits: 6,
            language: 'EN',
            semesters: ['BA4'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/introduction-to-machine-learning-CS-233'
        },
        {
            id: 'CS-308',
            title: 'Introduction to quantum computation',
            code: 'CS-308',
            credits: 5,
            language: 'EN',
            semesters: ['BA6'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/introduction-to-quantum-computation-CS-308'
        },
        {
            id: 'COM-309',
            title: 'Introduction to quantum information processing',
            code: 'COM-309',
            credits: 5,
            language: 'EN',
            semesters: ['BA5'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/introduction-to-quantum-information-processing-COM-309'
        },
        {
            id: 'COM-300',
            title: 'Modèles stochastiques pour les communications',
            code: 'COM-300',
            credits: 6,
            language: 'FR',
            semesters: ['BA5'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/modeles-stochastiques-pour-les-communications-COM-300'
        },
        {
            id: 'CS-328',
            title: 'Numerical methods for visual computing and ML',
            code: 'CS-328',
            credits: 4,
            language: 'EN',
            semesters: ['BA3'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/numerical-methods-for-visual-computing-and-ml-CS-328'
        },
        {
            id: 'CS-302',
            title: 'Parallelism and concurrency in software',
            code: 'CS-302',
            credits: 6,
            language: 'EN',
            semesters: ['BA6'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/parallelism-and-concurrency-in-software-CS-302'
        },
        {
            id: 'COM-302',
            title: 'Principles of digital communications',
            code: 'COM-302',
            credits: 6,
            language: 'EN',
            semesters: ['BA6'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/principles-of-digital-communications-COM-302'
        },
        {
            id: 'CS-303',
            title: 'Principles of online decision-making',
            code: 'CS-303',
            credits: 6,
            language: 'EN',
            semesters: ['BA5'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/principles-of-online-decision-making-CS-303'
        },
        {
            id: 'CS-304',
            title: 'Projet de recherche optionnel en Informatique I',
            code: 'CS-304',
            credits: 8,
            language: 'FR',
            semesters: ['BA5', 'BA6'],
            group: 'options',
            toggleable: true,
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/projet-de-recherche-optionnel-en-informatique-i-CS-304'
        },
        {
            id: 'CS-290',
            title: 'Responsible software',
            code: 'CS-290',
            credits: 5,
            language: 'EN',
            semesters: ['BA3', 'BA5'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/responsible-software-CS-290'
        },
        {
            id: 'COM-202',
            title: 'Signal processing',
            code: 'COM-202',
            credits: 8,
            language: 'EN',
            semesters: ['BA4'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/signal-processing-COM-202'
        },
        {
            id: 'CS-234',
            title: 'Technologies for democratic society',
            code: 'CS-234',
            credits: 5,
            language: 'EN',
            semesters: ['BA3'],
            group: 'options',
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/technologies-for-democratic-society-CS-234'
        },
        {
            id: 'BIO-109',
            title: 'Introduction aux sciences du vivant (pour IC)',
            code: 'BIO-109',
            credits: 6,
            language: 'FR',
            semesters: ['BA4'],
            group: 'physique-bio',
            toggleable: true,
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/introduction-aux-sciences-du-vivant-pour-ic-BIO-109'
        },
        {
            id: 'PHYS-202',
            title: 'Mécanique analytique (pour SPH)',
            code: 'PHYS-202',
            credits: 5,
            language: 'FR',
            semesters: ['BA3'],
            group: 'physique-bio',
            toggleable: true,
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/mecanique-analytique-pour-sph-PHYS-202'
        },
        {
            id: 'BIOENG-310',
            title: 'Neuroscience foundations for engineers',
            code: 'BIOENG-310',
            credits: 6,
            language: 'EN',
            semesters: ['BA6'],
            group: 'physique-bio',
            toggleable: true,
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/neuroscience-foundations-for-engineers-BIOENG-310'
        },
        {
            id: 'PHYS-114',
            title: 'Physique générale : électromagnétisme',
            code: 'PHYS-114',
            credits: 4,
            language: 'FR',
            semesters: ['BA3'],
            group: 'physique-bio',
            toggleable: true,
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/physique-generale-electromagnetisme-PHYS-114'
        },
        {
            id: 'PHYS-344',
            title: 'Quantum mechanics for non-physicists',
            code: 'PHYS-344',
            credits: 5,
            language: 'EN',
            semesters: ['BA5'],
            group: 'physique-bio',
            toggleable: true,
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/quantum-mechanics-for-non-physicists-PHYS-344'
        },
        {
            id: 'CS-358(a)',
            title: 'Making intelligent things A',
            code: 'CS-358(a)',
            credits: 8,
            language: 'EN',
            semesters: ['BA5'],
            group: 'projets',
            toggleable: true,
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/making-intelligent-things-a-CS-358-A'
        },
        {
            id: 'CS-358(b)',
            title: 'Making intelligent things B',
            code: 'CS-358(b)',
            credits: 8,
            language: 'EN',
            semesters: ['BA6'],
            group: 'projets',
            toggleable: true,
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/making-intelligent-things-b-CS-358-B'
        },
        {
            id: 'CS-311',
            title: 'The software enterprise - from ideas to products',
            code: 'CS-311',
            credits: 8,
            language: 'EN',
            semesters: ['BA5'],
            group: 'projets',
            toggleable: true,
            link: 'https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/the-software-enterprise-from-ideas-to-products-CS-311'
        }
    ]
};
