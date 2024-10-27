const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348069016472";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2348069016472";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_02_10_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTczLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1MixcbiAgICAgICAgODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDgwLFxuICAgICAgICA5MixcbiAgICAgICAgMTEwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5LFxuICAgICAgICA2LFxuICAgICAgICA0LFxuICAgICAgICA1OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3LFxuICAgICAgICA2MixcbiAgICAgICAgMjM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc0LFxuICAgICAgICA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2LFxuICAgICAgICA4MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU0LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDMzLFxuICAgICAgICA5NixcbiAgICAgICAgODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiREtEVXIwaTI1OG9ia0w4cFRMWjQ0a0JGSS95MjhNeWMwa044WFhjbmhqWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLWZPZTN1VVVUcC16UFFFTHJHdGtyd1wiLFxuICBcInBob25lSWRcIjogXCI2YzY0Y2U0OS0yOGMwLTQ1NzYtOWZhOS00ZGI1YzliNzc3NmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICAxODQsXG4gICAgICAyMzUsXG4gICAgICAxMDQsXG4gICAgICA3OSxcbiAgICAgIDIwMSxcbiAgICAgIDE0MSxcbiAgICAgIDIwNyxcbiAgICAgIDEzOCxcbiAgICAgIDE3LFxuICAgICAgMjE2LFxuICAgICAgMTEsXG4gICAgICA2MSxcbiAgICAgIDQyLFxuICAgICAgMjUyLFxuICAgICAgMTI5LFxuICAgICAgMTU2LFxuICAgICAgMjUxLFxuICAgICAgOTgsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICAyNDUsXG4gICAgICAxNixcbiAgICAgIDE0OSxcbiAgICAgIDE1MSxcbiAgICAgIDU1LFxuICAgICAgMTE4LFxuICAgICAgMjMwLFxuICAgICAgMjM0LFxuICAgICAgMjM5LFxuICAgICAgMTAyLFxuICAgICAgMTQzLFxuICAgICAgMTAyLFxuICAgICAgMTcwLFxuICAgICAgMjMyLFxuICAgICAgMTE1LFxuICAgICAgMTMsXG4gICAgICAyNixcbiAgICAgIDkzLFxuICAgICAgMTM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5CUkoyR05FXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY5MDE2NDcyOjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTY4MjI3MjgxMTgyNzY6MzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTdRbmN3RkVPL3crcmdHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiQVM1K0FBTDZ2Uk81ZzlLZUpydGM2M1ZKclJxZzlYU2h4WlB0aFJhYVg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFyQTRMcXAxU2pOMkhNdmQrZEhOVDFBdGdSRlhOWVVhVXcveG9RM3FVenkxK2tOdzNWaDcvN21EN2NoWlQvU3gzTEJ1YTJYd0J3aFpqOEVqblZFYUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJrcUZIYks3Y3lBbWV4NzFLREVEN1VoRDYwaFVEMWlLRG1DL2h6Umo5VWs0RmwzKzh1WXpiOUYwQWlxb3NmTjJWQUZ4VzFtZjNoaDlxYThsam1iZ0JnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjkwMTY0NzI6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDA2NjU0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUcwVVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzBVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOGY2TG96QVRrOVU0Z0k4V3UxOHNvRzJET3BoYThmU1RDUzNxY2svakY2WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTAyMDQ2MjIyLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAwMzkyMjYwMDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Ckay",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
