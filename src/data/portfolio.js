export const profile = {
  name: 'KHON BUNYETH',
  role: 'Frontend & Web Developer',
  intro:
    'Computer Science student passionate about building clean and responsive web applications using Vue, PHP, and modern web technologies.',
  location: 'Phnom Penh, Cambodia',
  email: 'bunyeth664@gmail.com',
  cvUrl: '/Khon%20Bunyeth.pdf',
  avatar: '/img/img.jpg',
  socials: [
    { name: 'Facebook', url: 'https://www.facebook.com/khon.bunyeth', key: 'facebook' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/khon-bunyeth-93b628310/', key: 'linkedin' },
    { name: 'Mail', url: 'mailto:bunyeth664@gmail.com', key: 'mail' }
  ]
}

export const skills = [
  { name: 'Vue.js', level: 70, key: 'vue' },
  { name: 'Tailwind CSS', level: 75, key: 'palette' },
  { name: 'JavaScript', level: 68, key: 'code' },
  { name: 'PHP', level: 72, key: 'server' },
  { name: 'MySQL', level: 65, key: 'database' },
  { name: 'GitHub', level: 60, key: 'github' }
]

export const projects = [
  {
    title: 'HR Management System',
    description:
      'Employee management and attendance tracking system with admin dashboard and employee records management.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#'
  },

  {
    title: 'Attendance Management App',
    description:
      'Simple attendance management application for tracking employee check-in and daily attendance records.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    tags: ['Vue.js', 'Tailwind CSS', 'PHP'],
    liveUrl: '#',
    githubUrl: '#'
  },

  {
    title: 'Personal Portfolio Website',
    description:
      'Modern responsive portfolio website built with Vue and Tailwind CSS to showcase projects and technical skills.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tags: ['Vue.js', 'Tailwind CSS', 'Responsive Design'],
    liveUrl: '#',
    githubUrl: '#'
  }
]

export const experiences = [
  {
    company: 'Ezecom Co., Ltd.',
    position: 'Trainee — Technical Service',
    date: 'Jul 2024 - Oct 2024',
    description: 'Completed a 3-month internship in technical support under the Technical Department. Recognized as hardworking, dedicated, and trustworthy by HR Operations.'
  },
  {
    company: 'Norton University',
    position: 'Bachelor of Computer Science',
    date: '2021 - Present',
    description: 'Year 4 student focused on web development, databases, and software engineering. Built an HR Management System using PHP and MySQL as a capstone project.'
  },
  {
    company: 'Bun Rany Hun Sen Ampovorn Chumnik',
    position: 'High School Diploma',
    date: '2018 - 2021',
    description: 'Completed secondary education with a foundation in mathematics and sciences.'
  }
]
