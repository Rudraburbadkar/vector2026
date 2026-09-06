// Central source of truth for all VECTOR 2026 event content.
// Used by the home page teaser cards, the interactive spider-web nodes,
// and each event's detail page.

export const events = [
  {
    id: 'squid-game',
    path: '/squid-game',
    index: '01',
    nodeLabel: 'SQUID GAME',
    tag: 'TENSION / ARENA / CRIMSON',
    title: 'Squid Game',
    shortDescription: 'An elimination arena built on nerve, logic, and speed.',
    tagline: 'An elimination arena for teams who trust their nerve more than their luck.',
    description:
      "Squid Game tests logic, agility, and nerve under a countdown that never slows down. Teams move through a sequence of elimination rounds — miss the mark and you're out, no appeals, no re-entry. It's built for teams who work as one mind under pressure, not for solo heroics.",
    introHeading: 'Four rounds. One survivor team.',
    teaser:
      'Six players enter the yard. The floor remembers every step you take — and every one you don\u2019t.',
    date: '21 Feb 2026',
    time: '10:00 AM',
    venue: 'Central Arena Hall',
    entryFee: '\u20B9500 / team',
    teamSize: '4\u20135',
    feePerTeam: '\u20B9500',
    topPrize: '\u20B925,000',
    stagesHeading: 'Round Structure',
    stages: [
      {
        title: 'Round 1 \u2014 Logic Maze',
        meta: [
          ['Duration', '10 minutes'],
          ['Focus', 'Pattern reading and quick decision-making under a ticking clock']
        ]
      },
      {
        title: 'Round 2 \u2014 Code Breaking',
        meta: [
          ['Duration', '15 minutes'],
          ['Focus', 'Cracking sequences and encoded signals as a team']
        ]
      },
      {
        title: 'Round 3 \u2014 Speed Trial',
        meta: [
          ['Duration', '10 minutes'],
          ['Focus', 'Physical puzzle-solving where every second counts']
        ]
      },
      {
        title: 'Round 4 \u2014 Final Showdown',
        meta: [
          ['Duration', '20 minutes'],
          ['Focus', 'Every earlier skill, combined, for the last team standing']
        ]
      }
    ],
    rules: [
      'Teams must consist of 4\u20135 members, registered in advance.',
      'Each round runs on a strict time limit \u2014 once it ends, it ends.',
      'A failed round results in elimination for that team.',
      'External devices, notes, or outside assistance are not permitted inside the arena.',
      'Referee decisions are final and cannot be appealed mid-round.',
      'Disrespect toward staff, referees, or other teams brings immediate disqualification.',
      'Full round mechanics are disclosed only at check-in \u2014 no advance spoilers.'
    ],
    eligibility: [
      'Open to all students currently enrolled at A.C. Patil College of Engineering',
      'Minimum team size: 4 \u00b7 Maximum team size: 5',
      'Mixed-department teams are welcome and encouraged',
      "Past winners may re-enter, but can't retake the same title twice"
    ],
    ctaHeading: 'Think you can survive the arena?',
    accent: 'crimson',
    accentVar: 'var(--crimson)',
    accentGlowVar: 'var(--crimson-glow)',
    nodeGlow: 'rgba(161,29,49,0.55)'
  },
  {
    id: 'treasure-hunt',
    path: '/treasure-hunt',
    index: '02',
    nodeLabel: 'TREASURE HUNT',
    tag: 'EXPLORATION / CLUES / MAPS',
    title: 'Technical Treasure Hunt',
    shortDescription:
      'A campus-wide hunt driven by cryptic clues, technical challenges and exploration.',
    tagline: 'Follow the thread across campus — every clue you crack spins you closer to the center.',
    description:
      "Part digital, part physical \u2014 this hunt strings together cryptic clues, technical puzzles, and hidden checkpoints across the college grounds. Teams combine programming logic, lateral thinking, and plain old teamwork to trace the thread to its end. No shortcuts, no outside help \u2014 just the next clue, waiting to be earned.",
    introHeading: 'A hunt spun across the whole campus.',
    teaser: "The first clue is already hiding in plain sight. You've probably walked past it today.",
    date: '22 Feb 2026',
    time: '11:00 AM',
    venue: 'Campus-wide',
    entryFee: '\u20B9400 / team',
    teamSize: '3\u20134',
    feePerTeam: '\u20B9400',
    topPrize: '\u20B920,000',
    stagesHeading: 'Hunt Stages',
    stages: [
      {
        title: 'Stage 1 \u2014 Code Decryption',
        meta: [
          ['Location', 'Registration Point'],
          ['Focus', 'Decode an encrypted message to find your next location']
        ]
      },
      {
        title: 'Stage 2 \u2014 Digital Puzzle',
        meta: [
          ['Location', 'Computer Lab'],
          ['Focus', 'Solve a technical problem to unlock the next clue']
        ]
      },
      {
        title: 'Stage 3 \u2014 Riddle Challenge',
        meta: [
          ['Location', 'Library Reading Room'],
          ['Focus', 'Answer tech-themed riddles under time pressure']
        ]
      },
      {
        title: 'Stage 4 \u2014 Final Challenge',
        meta: [
          ['Location', 'Main Auditorium'],
          ['Focus', 'Combine every clue collected to find the treasure']
        ]
      }
    ],
    rules: [
      'Teams consist of 3\u20134 members, registered in advance.',
      'Clues are distributed at each checkpoint \u2014 no skipping ahead.',
      'Smartphones are allowed for digital puzzle-solving only.',
      'No hints or help from anyone outside the registered team.',
      'Teams must stay within campus boundaries and stay together throughout.',
      'The first team to reach the final checkpoint with the correct answer wins.',
      'Exact clue locations and puzzle formats stay sealed until the hunt begins.'
    ],
    eligibility: [
      'Open to all students currently enrolled at A.C. Patil College of Engineering',
      'Minimum team size: 3 \u00b7 Maximum team size: 4',
      'Mixed-department teams are welcome',
      'No prior puzzle-solving experience required'
    ],
    ctaHeading: 'Ready to trace the thread to the end?',
    accent: 'amber',
    accentVar: 'var(--amber)',
    accentGlowVar: 'var(--amber-glow)',
    nodeGlow: 'rgba(201,154,58,0.5)'
  },
  {
    id: 'code-fusion-ai',
    path: '/code-fusion-ai',
    index: '03',
    nodeLabel: 'CODE FUSION AI',
    tag: 'CODE / AI / DIGITAL SYSTEMS',
    title: 'Code Fusion AI',
    shortDescription: 'A coding challenge where human logic meets artificial intelligence.',
    tagline: 'Human logic and machine intelligence, wired into the same circuit for one build cycle.',
    description:
      "Code Fusion AI is a build sprint where teams design, train, and ship an AI-powered solution to a real-world prompt revealed on the day. It rewards teams that pair strong fundamentals with genuine product thinking \u2014 not just a model that runs, but one that actually solves something.",
    introHeading: 'Build something that thinks back.',
    teaser: "The prompt isn't the hard part. Getting your model to agree with your teammates is.",
    date: '20 Feb 2026',
    time: '9:00 AM',
    venue: 'Innovation Lab',
    entryFee: '\u20B9600 / team',
    teamSize: '2\u20134',
    feePerTeam: '\u20B9600',
    topPrize: '\u20B930,000',
    stagesHeading: 'Build Stages',
    stages: [
      {
        title: 'Stage 1 \u2014 Problem Drop',
        meta: [
          ['Duration', '30 minutes'],
          ['Focus', 'Read the brief, scope the approach, split the work']
        ]
      },
      {
        title: 'Stage 2 \u2014 Core Build',
        meta: [
          ['Duration', '3 hours'],
          ['Focus', 'Train, wire, and test the core AI-driven feature']
        ]
      },
      {
        title: 'Stage 3 \u2014 Polish & Package',
        meta: [
          ['Duration', '1.5 hours'],
          ['Focus', 'Harden the demo and prep the walkthrough']
        ]
      },
      {
        title: 'Stage 4 \u2014 Live Demo',
        meta: [
          ['Duration', '1 hour'],
          ['Focus', 'Present to the judging panel and field questions']
        ]
      }
    ],
    rules: [
      'Teams consist of 2\u20134 members, registered in advance.',
      'The problem statement is released at the start of the session \u2014 no pre-built solutions.',
      'Any programming language, open-source model, or standard library is permitted.',
      'Teams must bring their own laptops and required development tools.',
      'Plagiarized or pre-existing solutions result in immediate disqualification.',
      'Judging covers functionality, originality, and clarity of the final demo.',
      'Full evaluation rubric is shared only at check-in.'
    ],
    eligibility: [
      'Open to all students currently enrolled at A.C. Patil College of Engineering',
      'Minimum team size: 2 \u00b7 Maximum team size: 4',
      'No prior AI/ML experience required \u2014 enthusiasm counts for a lot here',
      'Mixed-department teams are welcome and encouraged'
    ],
    ctaHeading: 'Ready to fuse your code with something smarter?',
    accent: 'violet',
    accentVar: 'var(--violet)',
    accentGlowVar: 'var(--violet-glow)',
    nodeGlow: 'rgba(111,77,224,0.55)'
  }
]

export const getEventById = (id) => events.find((e) => e.id === id)

export const FEST_TARGET_DATE = '2026-02-20T09:00:00+05:30'
export const REGISTER_FORM_URL = 'https://forms.gle/REPLACE-WITH-YOUR-GOOGLE-FORM'
export const CONTACT_EMAIL = 'vector2026@acpce.edu.in'
export const CONTACT_PHONE = '+91 98765 43210'
