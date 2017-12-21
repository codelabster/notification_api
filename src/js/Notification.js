export default class NotificationAPI{
	constructor(){

		this.icons=['icon1','icon2','icon3']
		this.randomInt=Math.floor(Math.random()* (3- 0) + 0)

		this.notificationOptions={
			icon:`./icon/${this.icons[this.randomInt]}.png`,
			body:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful',
			tag:'once'
		}


		if(window.Notification){
			//ask permission
			Notification.requestPermission().then(res=>{
				if(res=='granted'){
					this.granted()
				}

				if(res=='denied'){
					this.denied()
				}
			})
		}
	}

	granted(){
		console.log(this.notification)
		this.notification=new Notification(`Notification API (#${this.randomInt})`,this.notificationOptions)

		//autoclose by 3 secs
		 setTimeout(()=>{
		 	this.notification.close()
		 },3000); 
	}

	denied(){
		alert('> User denied receiving notification from this host')
	}

}
