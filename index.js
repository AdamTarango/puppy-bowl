const addPuppy = async(puppy) => {
  const main = document.querySelector(`main`)
  main.innerHTML += 
  `<section class="${puppy.id}">
    <h2 class="${puppy.id}">${puppy.name}</h2>
    <div hidden id="${puppy.id}_2">
      <img src="${puppy.imageUrl}" alt="picture of ${puppy.name}" />
      <h2> ${puppy.name} is a ${puppy.breed}</h2>
      <p>This puppy is on the ${puppy.status}</p>
    </div>
  </section>`;
  // let toggle = true;
  const name = await document.getElementById(`${puppy.id}`)
  // name.addEventListener('click', (event) => {
    //alert(`click`)
    //if (toggle){
      // console.log(puppy.id)
      // const info = document.getElementById(`${puppy.id}_2`);
      // info.toggleAttribute("hidden");
      //toggle = false
    //}
  //   else {
  //     console.log(puppy.id)
  //     const info = document.getElementById(`${puppy.id}_2`);
  //     info.setAttribute("hidden", "");
  //     toggle = true
  //   }
   //})
}
const pullRequest = async () => {
  try{
    raw = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players`);
    data = await raw.json();
    players = await data.data.players;
    return await players;
  }
  catch{
    alert(`Error 503!`)
  }
}
const switchVis = (event) => {

}

(async () => {
  const puppies = await pullRequest();
  console.log(puppies)
  addPuppy(puppies[0])
  for (const puppy of puppies) {
    addPuppy(puppy)
  }
  const main = document.querySelector(`main`)
  main.addEventListener(`click`, (event) => {
    if (event.target.tagName.toLowerCase() === `h2`){
      console.log(event.target.className)
      document.getElementById(`${event.target.className}_2`).toggleAttribute("hidden")
      
    }
  })
}) ();