class Home {
	constructor({ type, payment = "renting" }) {
		this.type = type;
		this.payment = payment;
	}

	static homeImprovement(yourHome) {
		return (yourHome.payment === 'mortgage')
	}
}

const choice1 = new Home ({type: "house", payment: "morgage"})
console.log(Home.homeImprovement(choice1))