let Discord = require("discord.js");
let Client = new Discord.Client({ intents: 32767});

Client.on("ready", () => {
    console.log("bot opérationnel"); 
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;
    
    message.reply("message recçu !");
});

//STATUS
Client.on("ready", async () => {
    console.log("BOT IS READY !")
    Client.user.setStatus("online");
    Client.user.setActivity("Créating MXS Skins", {type: 'PLAYING'});
})

//WELCOME MESSAGE
Client.on("guildMemberAdd", member => {      member.roles.add("882223583143796737");
    const embeds = new Discord.MessageEmbed()     
        .setAuthor("EK'GRAPHICS")     
        .setImage(`${member.user.displayAvatarURL()}`)     
        .setTitle("Bienvenue ! 👋")     
        .setDescription(`<@${member.user.id}> Vient de rejoindre le serveur ! `) 
        .setFooter("Nous sommes maintenant"  +  member.guild.memberCount)    
        .setColor("#FFFFFF")
        .setThumbnail("https://cdn.discordapp.com/attachments/762763776532545556/900085364713226270/EK.png")
        Client.channels.cache.get("882219421622493245").send({ embeds : [embeds]});  
    });

//LEAVE MESSAGE
Client.on("guildMemberRemove", member => {
    const embed = new Discord.MessageEmbed() 
        .setAuthor("EK'GRAPHICS")     
        .setImage(`${member.user.displayAvatarURL()}`)     
        .setTitle("À Bientôt ! 👋")     
        .setDescription(`<@${member.user.id}> Vient de quitter le serveur ! `) 
        .setFooter("Nous sommes maintenant"  +  member.guild.memberCount)    
        .setColor("#FFFFFF")
        .setThumbnail("https://cdn.discordapp.com/attachments/762763776532545556/900085364713226270/EK.png")
        Client.channels.cache.get("882219421622493245").send({ embeds : [embed]});
});




Client.login("ODgyMTc1Mjk5Nzk2NzU0NDYy.YS3jxQ.2HbosqGGozCDUggM7l6KjzHVx5Y");