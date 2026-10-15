import skmRMUTL from '$lib/assets/skillMappingRMUTL.png';

export const projects = [
	{
		slug: 'rmutl-skillmapping',
		title: 'RMUTL SkillMapping',
		description: {
			th: 'ระบบทำแผนที่ทักษะสำหรับมหาวิทยาลัย เชื่อมโยงทักษะของนักศึกษาเข้ากับความต้องการของแต่ละโปรเจค',
			en: 'A skill mapping platform for the university, connecting student skills with what each project needs.'
		},
		image: skmRMUTL,
		alt: 'RMUTL SkillMapping project interface',
		tags: ['SvelteKit', 'Node.js', 'Tailwind CSS', 'Docker', 'MySQL'],
		status: 'wip',
		featured: true,
		span: 8,
		github: 'https://github.com/BlackglassesDev',
		demo: null
	}
];
