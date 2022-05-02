const users = []
 //addUser, removeUser, getUser, getusersInRoom
 const addUser = ({ id, username, room }) => {
     //cleaning of data
     username = username.trim().toLowerCase()
     room = room.trim().toLowerCase()

     //validation of data
     if( !username || !room ) {
         return {
             error: 'Username and room are required!!!'
         }
     }

     //check for existing user
     const existingUser = users.find((user) => {
         return user.room === room && user.username === username
     })

     //validate username
     if(existingUser) {
         return{
             error: 'Username is already in use...'
         }
     }

     //store user
     const user = { id, username, room }
     users.push(user)
     return { user }
 }

 //remove user
 const removeUser = (id) => {
     const index = users.findIndex((user) => user.id === id)

     if(index !== -1) {
         return users.splice(index, 1)[0]
     }
 }

 const getUser = (id) => {
    return users.find((user) => user.id === id)
 }

 const getUsersInRoom = (room) => {
     room = room.trim().toLowerCase()
     return users.filter((user) => user.room === room)
 }


 module.exports = {
     addUser, 
     removeUser,
     getUser,
     getUsersInRoom
 }

//  addUser({
//      id: 22,
//      username: 'akaka',
//      room: 'lkooo'
//  })

//  addUser({
//     id: 42,
//     username: 'ash',
//     room: 'lkooo'
// })

// addUser({
//     id: 32,
//     username: 'adarsh',
//     room: 'ballia'
// })


// const user = getUser(42) 
// console.log(user)

// const userList = getUsersInRoom('balli')
// console.log(userList)
