const assets = [];

assets.push("Company 401k");
assets.push("Credit Union Checking Account");
assets.push("Stock market account");
assets.push("Home mortgage");
assets.push("Auto loan");

document.addEventListener('DOMContentLoaded',()=>{
  const headerEl = document.createElement('h1');
  headerEl.innerHTML = "List of assets:";
  document.body.appendChild(headerEl)
  const listEl = document.createElement('ul');
  assets.forEach(asset=>{
    const listItemEl = document.createElement('li');
    console.log('asset', asset)
    listItemEl.innerHTML = asset;
    console.log('listItemEl', listItemEl)
    listEl.appendChild(listItemEl);
  })
  document.body.appendChild(listEl);
  console.log("My assets are: ", assets);
})