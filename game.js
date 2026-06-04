const STORY = {
  start: {
    text: "The museum doors close behind you as the gala begins. Your team waits in the shadows while you decide how to begin the heist.",
    choices: [
      { label: "Sneak through the service entrance", next: "serviceEntrance" },
      {
        label: "Dazzle the guests with a forged invitation",
        next: "galaEntry",
      },
    ],
  },
  serviceEntrance: {
    text: "You slip through the delivery bay. The security guard is distracted by a spilled tray in the hallway.",
    choices: [
      { label: "Head for the ancient artifacts hall", next: "artifactHall" },
      { label: "Cut power to the security grid", next: "powerRoom" },
    ],
  },
  galaEntry: {
    text: "With a cloak and a confident smile, you blend in among the wealthy patrons. The guard nods and waves you past the velvet rope.",
    choices: [
      { label: "Follow the curator to the east wing", next: "eastWing" },
      {
        label: "Slip into the gift shop and change your disguise",
        next: "giftShop",
      },
    ],
  },
  artifactHall: {
    text: "The ancient gallery is dim and quiet. The glass case holding the star sapphire glows under the motion sensors.",
    choices: [
      { label: "Use the glass cutter on the case", next: "sapphireHeist" },
      {
        label: "Try to distract the guard with a smoke bomb",
        next: "smokeBomb",
      },
    ],
  },
  powerRoom: {
    text: "The electrical closet is cramped, but the security grid is within reach. One wrong move and the alarms will scream.",
    choices: [
      {
        label: "Disable the cameras for exactly two minutes",
        next: "cameraOff",
      },
      { label: "Trigger a fake fire alarm instead", next: "fireAlarm" },
    ],
  },
  eastWing: {
    text: "You trail the curator into the east wing. The exhibit guard is watching the priceless painting on the wall.",
    choices: [
      {
        label: "Create a distraction with a spilled drink",
        next: "spillDrink",
      },
      { label: "Pick the lock to the adjoining vault", next: "vaultDoor" },
    ],
  },
  giftShop: {
    text: "In the gift shop, you trade your gala outfit for a staff uniform. The other employees are too busy to notice you.",
    choices: [
      {
        label: "Walk confidently toward the main gallery",
        next: "mainGallery",
      },
      {
        label: "Sneak into the break room and grab the master key",
        next: "masterKey",
      },
    ],
  },
  sapphireHeist: {
    text: "The cutter slides silently. The case cracks just enough for the sapphire to be freed. Suddenly, footsteps approach.",
    choices: [
      { label: "Hide behind the statue", next: "hiddenStatue" },
      {
        label: "Rush to the emergency exit with the gem",
        next: "escapeRooftop",
      },
    ],
  },
  smokeBomb: {
    text: "The smoke fills the hall and the guard coughs. It buys you a moment, but the sprinkler system is arming itself.",
    choices: [
      { label: "Run for the sapphire case now", next: "sapphireHeist" },
      {
        label: "Head for the back door while the guard recovers",
        next: "backdoorEscape",
      },
    ],
  },
  cameraOff: {
    text: "The cameras flicker and go dark. For two minutes, the museum is blind. You can almost taste success.",
    choices: [
      { label: "Dash to the vault with your team", next: "vaultEntry" },
      {
        label: "Move to the main gallery and take the painting",
        next: "paintingHeist",
      },
    ],
  },
  fireAlarm: {
    text: "The hall fills with red light and blaring sirens. Guests rush out, and security floods the corridors.",
    choices: [
      {
        label: "Blend into the panic and slip out a side door",
        next: "sideDoorEscape",
      },
      { label: "Use the chaos to grab the prized amulet", next: "amuletRush" },
    ],
  },
  spillDrink: {
    text: "Guests gasp as champagne spills across the floor. The exhibit guard steps away to help.",
    choices: [
      {
        label: "Grab the painting while he is distracted",
        next: "paintingHeist",
      },
      { label: "Sneak into the vault door behind him", next: "vaultDoor" },
    ],
  },
  vaultDoor: {
    text: "The vault door is heavy and locked with a keypad. Your fingers hover over the emergency code you memorized.",
    choices: [
      { label: "Enter the code confidently", next: "vaultEntry" },
      { label: "Plant a hacking device and wait", next: "hackVault" },
    ],
  },
  mainGallery: {
    text: "In the main gallery, the museum's crown jewel glows under a pressure-sensitive alarm grid.",
    choices: [
      { label: "Cut the grid and lift the jewel", next: "jewelGrab" },
      { label: "Distract the guard with a smoke bomb", next: "smokeBomb" },
    ],
  },
  masterKey: {
    text: "You pocket the master key. It could open the vault or the rooftop maintenance access.",
    choices: [
      { label: "Head to the vault now", next: "vaultEntry" },
      {
        label: "Climb to the rooftop and exit through the skylight",
        next: "rooftopEscape",
      },
    ],
  },
  hiddenStatue: {
    text: "You hold your breath behind the marble statue. A guard passes by, unaware of the glittering stone in your bag.",
    choices: [
      { label: "Wait for the coast to clear", next: "waitClear" },
      {
        label: "Sneak out through the emergency corridor",
        next: "escapeRooftop",
      },
    ],
  },
  escapeRooftop: {
    text: "You climb to the rooftop and the city air hits your face. The gem is secured, and the exit is finally in sight.",
    choices: [
      { label: "Lower yourself down the fire escape", next: "winRooftop" },
      { label: "Run across the roof to the other building", next: "fallRoof" },
    ],
  },
  backdoorEscape: {
    text: "The back door swings open, but the corridor is lined with motion sensors you hadn't seen.",
    choices: [
      { label: "Try to dash through before they trigger", next: "dashSensors" },
      { label: "Retreat and find another route", next: "mainGallery" },
    ],
  },
  vaultEntry: {
    text: "The vault opens with a heavy sigh. Inside are the museum's most valuable treasures, waiting for you.",
    choices: [
      { label: "Take the diamond necklace and slip away", next: "winVault" },
      { label: "Grab everything and move fast", next: "crowdAlarm" },
    ],
  },
  paintingHeist: {
    text: "The painting lifts cleanly off its mount. Someone in the gallery gasps as security radios in the alert.",
    choices: [
      { label: "Make a run for the rooftop exit", next: "winRooftop" },
      { label: "Hide the painting in the storage closet", next: "storageFail" },
    ],
  },
  amuletRush: {
    text: "You rush the amulet display. A hidden pressure plate triggers, and the case seals shut with a loud bang.",
    choices: [
      { label: "Smash the case and flee", next: "alarmFail" },
      {
        label: "Drop the amulet and disappear into the crowd",
        next: "crowdAlarm",
      },
    ],
  },
  hackVault: {
    text: "Your hacking device whirs. The keypad blinks, but a guard appears in the doorway before the door unlocks.",
    choices: [
      { label: "Act like you belong there", next: "caughtFail" },
      { label: "Run before he notices you", next: "alarmFail" },
    ],
  },
  rooftopEscape: {
    text: "The skylight cracks open, and you climb into the night. The city below is your route to freedom.",
    choices: [
      { label: "Lower yourself down the drainpipe", next: "winRooftop" },
      { label: "Leap to the adjacent ledge", next: "fallRoof" },
    ],
  },
  waitClear: {
    text: "You wait too long. The guard returns, finds the open case, and sounds the alarm.",
    choices: [
      { label: "Fight your way out", next: "caughtFail" },
      { label: "Surrender quietly", next: "captureFail" },
    ],
  },
  dashSensors: {
    text: "You sprint down the corridor. One sensor flashes red as you pass, and the alarm blares instantly.",
    choices: [
      { label: "Barrel through the nearby exit", next: "caughtFail" },
      { label: "Drop to the floor and stay still", next: "captureFail" },
    ],
  },
  crowdAlarm: {
    text: "The crowd panics. Security surrounds the exits and the police are minutes away.",
    choices: [
      { label: "Fight through the chaos", next: "caughtFail" },
      { label: "Hide in a delivery truck", next: "winVault" },
    ],
  },
  fallRoof: {
    text: "Your foot slips on the rooftop edge. You tumble down, missing the escape and injuring your leg badly.",
    choices: [
      { label: "Crawl back inside and surrender", next: "captureFail" },
      { label: "Try one last leap to the alley", next: "caughtFail" },
    ],
  },
  winRooftop: {
    text: "You disappear into the night with the stolen masterpiece. The museum is left guessing how you vanished.",
    choices: [],
  },
  winVault: {
    text: "You escape with the diamond necklace hidden beneath your coat. The heist is a success.",
    choices: [],
  },
  caughtFail: {
    text: "Security corners you with nowhere to go. The heist ends in cuffs and broken plans.",
    choices: [],
  },
  captureFail: {
    text: "You are detained before you can flee. The museum lights stay on, and your crew scatters.",
    choices: [],
  },
  alarmFail: {
    text: "The alarm shatters the silence. Guards swarm your position and the priceless artifact stays behind glass.",
    choices: [],
  },
  storageFail: {
    text: "The storage closet is locked from the inside. You are trapped while security closes in.",
    choices: [],
  },
};

let currentScene = "start";
let choiceRects = [];

function goToScene(key) {
  if (STORY[key]) {
    currentScene = key;
    choiceRects = [];
  } else {
    console.warn(`Scene key not found: ${key}`);
  }
}
