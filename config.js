seeconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348159932143";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_58_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1LFxuICAgICAgICA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDk5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMjUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjExLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1LFxuICAgICAgICAyNixcbiAgICAgICAgMjEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxODksXG4gICAgICAgIDM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg2LFxuICAgICAgICA4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI2LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzksXG4gICAgICAgIDc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU2LFxuICAgICAgICA2MixcbiAgICAgICAgMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQyLFxuICAgICAgICA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImVEZzI4MnRHSnVGdzc1VS8rcWlDeW55OEMvL21KWUQxMEJZQU5oK09PREk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJaWExicjJKU1JDdVZBbEtSRDFLVmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODJmNDgxZTctYTZjMS00MGYyLWJhNTMtOTgzODEzOWNmMmEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDE4NSxcbiAgICAgIDE5NCxcbiAgICAgIDM3LFxuICAgICAgNTEsXG4gICAgICAxNzAsXG4gICAgICAxMjksXG4gICAgICAzMCxcbiAgICAgIDUyLFxuICAgICAgMTk2LFxuICAgICAgMjEyLFxuICAgICAgNzMsXG4gICAgICAxNyxcbiAgICAgIDI1MyxcbiAgICAgIDI0LFxuICAgICAgOCxcbiAgICAgIDIxMCxcbiAgICAgIDk3LFxuICAgICAgMTUwLFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgMjQ4LFxuICAgICAgMjQxLFxuICAgICAgNDYsXG4gICAgICA1NyxcbiAgICAgIDEyMCxcbiAgICAgIDEzNixcbiAgICAgIDExOCxcbiAgICAgIDIyNSxcbiAgICAgIDYyLFxuICAgICAgODksXG4gICAgICAxNzEsXG4gICAgICAxODYsXG4gICAgICA2MSxcbiAgICAgIDk4LFxuICAgICAgMjM1LFxuICAgICAgMTAwLFxuICAgICAgMTY5LFxuICAgICAgNTMsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWQzdXTkdNV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE1OTkzMjE0MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODE0OTY4NzkwMDk5OTU6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJekI5c3dERUttZThiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRGMm5yMCtad2dqSmwvNVBOY3VxT3d3NlFVOWhadjlNUzc4cWxDeDcxMWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicDM4UTZEUDhrNWNZM29QcFBOOVBKbWpYMDN6Ums5OGdQZUxoWXU1aHN2N0RSaEVoVUZRTEYxUkJCVUN0TG9hblBFR2hDQzdZSCtZVGZwT0lweG1GQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwienJDZkU0QlFoZHJZWjNHVkRVSTBqVzB5cUFUVnYwYXc1LzNtOTBqYVpybzJMNjc3aXBvSWdIYWRibUNPMktNM3lKWDg4Q0NQdS9NeHRFZkJzamN6Z0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1OTkzMjE0MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTE5OTE3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
