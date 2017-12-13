const Comp1 = {
	template: `
		<div>comp1</div>
	`
}
const Comp2 = {
	template: `
		<div>comp2</div>
	`
}


const routes = [
	{
		path: '/', 
		component: Comp1 
	},
	{
		path: '/comp2', 
		component: Comp2 
	}
]

export default routes;