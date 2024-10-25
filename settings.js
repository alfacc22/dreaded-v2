/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0g2b2FmZWlZRVNUZnNRQktvOFluRWlpNW53b3h1NDBUVmVmTXFodzhXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibys4S0RjL1h0UWE1NWlTbXJhb3pxTXJsQ1VEWjR3N3hjR2p4b3lUckNURT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TTBzRWI0L25yekpYUVc2dk1xOWJQZ0JqbU94QmI4MDF5K1g0bTZ0SjBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1eU10MGgzeDV5OWRyRzZLN05kK2lqc3FNVEQ4ZmN6ckdtL1BEK2xHcEV3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9ORHVGODM0Y2JhODliM0JwWGdqV2dubmx6WEVXek9yalBBVSs2RWNhWG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJXUHBXandZVkN4OHJmYXlrYTZFRXpsREFSdXc1RXdzU1AxNG5iaTBBSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJGY3FLS2hycXFUdFpnTGJCVVlRbHdyV3c0NmRYTDBtYkc1MmZNSE5FMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXRXeC9qYzJ3Umh6L2tkbUtNaWR6K3hRK0Z1ZzZzRGhEOXVJS0R2V1VVcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp1YXVVN3ZQY240MnpPMXArblU5ZkRrNGN4ZDB3N0dSa3FNN1BpVkNOWjQzenA5M3V0c2F1RWRqYVNkRHd1c25GR25hMFVldDN3QkZwS1BiQjMrNmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6IlJhZmFRRDFKNXN1WVRVSlZsZjdDVlRkWG5vVkFRVVFxM2l3TXYvSk9WN2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjYwMzQ5NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMEExMzQ2MTg2NjNEMjAwMTZENzIzOUY0MzRDQkQyQkUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTg3NjIxNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjYwMzQ5NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkZFNTE4NzNBRDhGNjc2QUZDRjlGMDFCM0M5MDRDOTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTg3NjIxNn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjYwMzQ5NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjMxRDFBQ0EwODdGOEE4NjdCOThGODVEMjZERUE3NEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTg3NjIzMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjYwMzQ5NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTQwOERGODczNkQyRkVCMjNFQTdEREFCODFFOUZGQTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTg3NjIzM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQ1Q3cm5JWjhSazJlNkdKV3JlbWFfdyIsInBob25lSWQiOiJmZjZmMDBmZi02MjQyLTRkODktOTM4Zi01ZTQyYmMwYTY3ODQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVRLaEcvdGphNVlLMVg5M0dFWEFqUjFaeTI0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkEwU2JRcTBhTitubklmbTZzNUI0U3pQN2RXQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGMzk2RERRMiIsIm1lIjp7ImlkIjoiOTQ3NjYwMzQ5NDM6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi44CK4pywIOG0jcqAIOG0m+G0h8qA4bSAIOKcsOOAiyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXlwemRrQkVPV2g3N2dHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidnFBb3ZoQ2NtQ05mMGVXWUYvbGtMQUJsaVlmS014S0h0d3llaTNFeUpDOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNzVqNll1d1VUS1dINGt2LytTYmFDTFo0T0lya3lnSXd5TGhMcXNnK01rZkZXUFFqdThadHl3V0tHNTJOdWkxN3J0Qk9uRXV5Y3YxUloxclRBUUNOREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImUyM2NBS0JMeXZxSGZjajkvUTdYekFLcVczR0YrSGdRTHVoak5pK2FISy9ZakNSVHhLMzNDR0xXOEk4NWNDN0NIcGNPNDFzTmJuNWJhSC9CZEFoT2dBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjYwMzQ5NDM6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYjZnS0w0UW5KZ2pYOUhsbUJmNVpDd0FaWW1IeWpNU2g3Y01ub3R4TWlRdiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTg3NjIwOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHRGoifQ==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "94";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '94754625969';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DREADED';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
