export const PROFILE = {
  name: 'Baxtiyorov Shohjahon',
  role: 'Frontend Developer',
  location: 'Uzbekistan',
  summary:
    "Mas'uliyatli front-end dasturchi va talaba, asosiy e'tibori moslashuvchan (responsive) hamda foydalanuvchilar uchun qulay veb-ilovalar yaratishga qaratilgan. Zamonaviy texnologiyalar va kuchli UI asoslaridan foydalangan holda, real loyihalarni amalga oshirish orqali o'z ko'nikmalarimni tez sur'atlarda rivojlantirmoqdaman.",
  email: 'shohjahon.baxtiyorov.11@gmail.com',
  links: {
    github: 'https://github.com/Sasha0119',
  },
}

export const NAV = [
  { id: 'home', label: 'Uy' },
  { id: 'about', label: 'Haqida' },
  { id: 'projects', label: 'Loyihalar' },
  { id: 'skills', label: 'Ko\'nikmalar' },
  { id: 'contact', label: 'Aloqa' },
]

export const PROJECTS = [
  {
    title: 'Xiva Tutor',
    description:
      'Xiva uchun tutor topish tizimini ishlab chiqdim. Foydalanuvchilar tutorlarni qidirib bog‘lanadi, tutorlar esa ma’lumot qo‘shib, admin tasdig‘idan o‘tadi.',
    technologies: ['React', 'Vite',],
    liveUrl: 'https://khivatutor.netlify.app',
    repoUrl: 'https://github.com/Sasha0119/KhivaTutor',
    highlights: [
  'Mobile-first responsive layout',
  'Tutor search & filter functionality',
  'Backend with tutor submission & admin approval',
  'Direct contact via phone & Telegram'
]
  },
  {
    title: 'To‑Do App (CRUD)',
    description:
      'Created a practical task manager to practice real UI states: add/edit/complete, empty states, filters, and persistent storage.',
    technologies: ['JavaScript', 'LocalStorage', 'CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/',
    highlights: ['CRUD + filters', 'Local storage persistence', 'Keyboard-friendly UI'],
  },
  {
    title: 'React Mini Dashboard',
    description:
      'A small React dashboard to practice component composition, props/state, and responsive grid layouts. Includes loading states and polished UI.',
    technologies: ['React', 'Vite', 'CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/',
    highlights: ['Reusable components', 'Responsive cards', 'UI state handling'],
  },
  {
    title: 'Portfolio Website (This Site)',
    description:
      'A modern single-page portfolio with smooth scrolling, subtle animations, and a data-driven content structure for easy updates.',
    technologies: ['React', 'Vite', 'CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/',
    highlights: ['SEO-friendly structure', 'Accessible sections', 'Fast, minimal dependencies'],
  },
]

export const SKILLS = [
  {
    group: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'Responsive dizayn', 'Accessibility (Basics)'],
  },
  { group: 'React', items: ['React (Basics)', 'Component-based UI', 'State & Props'] },
  { group: 'Asbob-uskunalar', items: ['Git & GitHub', 'VS Code', 'Vite', 'Browser DevTools'] },
  { group: 'Kuchli tomonlar', items: ['Xatoliklarni tuzatish', "UI detallariga e'tibor berish", "Tez o'rganishga yo'naltirilgan fikrlash tarzi"] },
]

