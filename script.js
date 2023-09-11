const params = new URLSearchParams(document.location.search);
const s = params.get("place");
const p = params.get("serverid")
const link = "roblox://experiences/start?placeId="+s+"&serverId="+p
console.log(link)
window.location.href = link;