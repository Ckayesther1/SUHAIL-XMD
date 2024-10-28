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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_48_10_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDgzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDc3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDExMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg1LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDU5LFxuICAgICAgICA4MixcbiAgICAgICAgMjAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInJ2S3JNWE9nNjdOQ2tKQms1eDZuRG41NGk3OFJwdnI3dGNCUHUvbDVHV2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImE3TnZBS0daU1cyUEY2SklkR21DaEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWE3ZWU5OTMtZTQzNS00YjRlLTg3NzQtMzg2YTgyODVlMjczXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTM0LFxuICAgICAgMjUzLFxuICAgICAgMjU0LFxuICAgICAgMzcsXG4gICAgICAxMDYsXG4gICAgICAxNzksXG4gICAgICAzMCxcbiAgICAgIDExLFxuICAgICAgMTg3LFxuICAgICAgMTU5LFxuICAgICAgMTkwLFxuICAgICAgMTIwLFxuICAgICAgMTM1LFxuICAgICAgMTA0LFxuICAgICAgMzMsXG4gICAgICAxMTAsXG4gICAgICAyMTUsXG4gICAgICA5MixcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgNzMsXG4gICAgICAxMTMsXG4gICAgICAzNCxcbiAgICAgIDk4LFxuICAgICAgNjQsXG4gICAgICA3MSxcbiAgICAgIDM5LFxuICAgICAgMTM0LFxuICAgICAgODgsXG4gICAgICAyMDIsXG4gICAgICA1OSxcbiAgICAgIDI3LFxuICAgICAgMTgsXG4gICAgICAzNixcbiAgICAgIDE0OCxcbiAgICAgIDEwNSxcbiAgICAgIDIsXG4gICAgICAxNDQsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhKSzRTMkxEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY5ODc5NjU0OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTU5ODA3Mjk5NzQ5NzM6NTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVNyaExZSEVOdmQrYmdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2YjdMWWpURkQ2UytzU3RHZWgwTHhjR2N2RHpncEVPWGEyODFMeWM2YVdFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZTU3NpWVQzbDdTTlpmS3d1ZGJOSHdLa1hVekh1QzYzYXl2VEhVV2luUmNDbC84SzNFSzNleE45TzF1bHlYN0F0MFp4VTU2MnRIZDlTdUZoTVllN0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNXeStrVUN2cmtmTEdqNS9uNWZiT3pic2h6dS9XeEUwYnljbkxFeDljRG9lUTJUQVdCKzVWMzJKTWVzM2IzekF0Vjc3WmlUYmNYeklOelpUMEd5bml3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjk4Nzk2NTQ6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMDQ3NzExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHZuXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEdm4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXaXZMZVYrMWdsYWF6QXA3ZG5RazdWUVVKeHNTS3JnSU9LRHh6WUF0b1VzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5OTIzNjU1MDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDAzODM3NzEyN1wifSIKfQ=="  // PUT your SESSION_ID 


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
