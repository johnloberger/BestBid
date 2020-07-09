# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Item.destroy_all

user_1 = User.create(full_name: 'Tom Smith', email: 'tomsmith@yahoo.com', date_of_birth: '05/19/90', location: 'Chicago', profile_picture: 'https://i.imgur.com/qF2JiTo.jpg') 
user_2 = User.create(full_name: 'George Johnson', email: 'gjohnson@yahoo.com', date_of_birth: '11/18/91', location: 'Chicago', profile_picture: 'https://i.imgur.com/h78QOSF.jpg') 
user_3 = User.create(full_name: 'Greg Doe', email: 'gregdoe@gmail.com', date_of_birth: '10/01/92', location: 'Houston', profile_picture: 'https://i.imgur.com/pYCekqv.jpg') 
user_4 = User.create(full_name: 'Samantha Smith', email: 'samsmith@gmail.com', date_of_birth: '09/12/91', location: 'Chicago', profile_picture: 'https://i.imgur.com/M3ZpYJG.jpg') 
user_5 = User.create(full_name: 'Ashley Brown', email: 'ashleybrown@gmail.com', date_of_birth: '08/22/99', location: 'Chicago', profile_picture: 'https://i.imgur.com/T00fhYj.jpg.jpg') 
user_6 = User.create(full_name: 'Sarah Turner', email: 'sarahturner@yahoo.com', date_of_birth: '03/30/98', location: 'Houston', profile_picture: 'https://i.imgur.com/Nf4Qwa7.jpg') 

item_1 = Item.create(image: 'https://www.generatormix.com/images/yugioh/timeater.jpg', name: 'Timeater Yugioh Card', user_id: user_1.id, starting_price: 5, duration: 1, description: 'Slightly worn card, ask me for other cards!', is_available: true, like_count: 0)
item_2 = Item.create(image: 'https://www.generatormix.com/images/yugioh/timeater.jpg', name: 'Slightly Worn Timeater Yugioh Card', user_id: user_1.id, starting_price: 6, duration: 2, description: 'Slightly worn card, ask me for other cards!', is_available: true, like_count: 0)
item_3 = Item.create(image: 'https://www.generatormix.com/images/yugioh/timeater.jpg', name: 'Slightly Worn Timeater Yugioh Card', user_id: user_1.id, starting_price: 6, duration: 3, description: 'Slightly worn card, ask me for other cards!', is_available: true, like_count: 0)
item_4 = Item.create(image: 'https://www.generatormix.com/images/yugioh/timeater.jpg', name: 'Slightly Worn Timeater Yugioh Card', user_id: user_1.id, starting_price: 6, duration: 4, description: 'Slightly worn card, ask me for other cards!', is_available: true, like_count: 0)
