const {channelService} = require('../../services')
//todo :: 어디에 둘지 고ㅁ
const redisClient = require('../../config/database/redis')
const socketCatchAsync = require('../../utils/socketCatchAsync')

const hi = socketCatchAsync(async (io, socket, data) => {
    await redisClient.sinterAsync('connectedUser',1)
        .then((data)=>{
            console.log('data :')
            return data[0] + 1;
        })
        .then((data)=>{
            console.log('data2 :');
            console.log(data);
        })
        .catch((err)=>{
            throw new Error(err.message);
        })
});

const sendMessage = (io, socket) => async (req) => {
    try{
        const response = await channelService.sendMessage(req.params, req.body, "Bearer "+ socket.handshake.auth.token);
        let recipientSets =[]
        let recipients = []
        for(let i=0 ; i < response.recipients.length; i++){
            recipientSets.push(response.recipients[i].UserUserId)
        }
        await redisClient.select(1, (err)=>{
            if(err){
                throw err;
            }
        })
        await redisClient.sadd(socket.userId, recipientSets, function (err, res){
            if(err)
                throw err;
        })
        console.log(socket.userId)
        await redisClient.sinter('connectedUser', socket.userId, function(err, res){
            res.forEach((value)=>{
                recipients.push(value)
            })
            if(err){
                throw err;
            }
        })
        await redisClient.del(socket.userId, function(err, res){
        })
        //todo :: fcm
        // await fcmService.sendFcm(response);
        await io.to(recipients).emit('message', response);
    }catch (err){
        socket.emit('error',err.message)
    }
};

const inviteUser = (io, socket) => async (req) => {
    try{
        const response = await channelService.inviteUser(req.params, req.body, "Bearer "+ socket.handshake.auth.token);
        let recipients = []
        for(let i=0 ; i < response.recipients.length; i++){
            recipients.push(response.recipients[i].UserUserId)
        }
        await io.to(recipients).emit('inviteUser', response)
    }catch(err){
        socket.emit('error',err.message)
    }
};

const exitChannel = (io, socket) => async (req) => {
    try{
        const response = await channelService.exitChannel(req.params, req.query, "Bearer "+ socket.handshake.auth.token);
        let recipients = [];
        for(let i=0 ; i < response.length; i++){
            recipients.push(response[i].UserUserId)
        }
        await io.to(recipients).emit('exitChannel', response)
        //todo :: 단톡인경우 emit to all rooms
    }catch (err){
        socket.emit('error',err.message)
    }
};

const getRecipients = (io, socket) => async (req) => {
    try{
        const response = await channelService.getRecipients(req.params, "Bearer "+ socket.handshake.auth.token);
        socket.emit('getRecipients',response);
    }catch (err){
        socket.emit('error',err.message)
    }
};

module.exports = {
    sendMessage,
    exitChannel,
    inviteUser,
    getRecipients,
};