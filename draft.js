let EDB = [
    {
      "Name": "Complete Fitness Regimen",
      "Description": "An all-encompassing workout plan designed to improve overall fitness through a variety of exercises.",
      "Difficulty": "medium",
      "Age rating": "16+",
      "KeyWords": [
        "Strength",
        "Cardio Health",
        "Flexibility",
        "Endurance"
      ],
      "ProgressList": [
        {
          "Taskname": "Warm-Up",
          "Base": "Time",
          "SetDesc" : ["Light Jogging", "Dynamic Stretches"],
          "TaskDiscr": "Light cardio and stretching to prepare the body.",
          "TaskContent": "5 minutes of jogging followed by 4 minutes of dynamic stretches.",
          "TaskDay": 20,
          "TaskDayL": 20,
          "TaskState": false,
          "Time": 5,
          "Reps": "N/A",
          "Sets": 2,
          "Break": 1,
        },
        {
          "Taskname": "Push-Ups",
          "Base": "Rep",
          "SetDesc" : ["Push-Ups | 15 Reps", "Push-Ups | 15 Reps", "Push-Ups | 15 Reps", ],
          "TaskDiscr": "Upper body strength exercise focusing on the chest, shoulders, and triceps.",
          "TaskContent": "3 sets of 15 reps.",
          "TaskDay": 20,
          "TaskDayL": 20,
          "TaskState": false,
          "Time": "N/A",
          "Reps": 15,
          "Sets": 3,
          "Break": 1,
        },
        {
          "Taskname": "Bodyweight Squats",
          "Base": "Rep",
          "SetDesc" : ["Bodyweight Squats | 20 Reps", "Bodyweight Squats | 20 Reps", "Bodyweight Squats | 20 Reps", ],
          "TaskDiscr": "Lower body exercise focusing on the quadriceps, hamstrings, and glutes.",
          "TaskContent": "3 sets of 20 reps.",
          "TaskDay": 20,
          "TaskDayL": 20,
          "TaskState": false,
          "Time": "N/A",
          "Reps": 20,
          "Sets": 3,
          "Break": 1
        },
        {
          "Taskname": "Plank",
          "Base": "Time",
          "SetDesc" : ["Plank | 1 Minutes", "Plank | 1 Minutes", "Plank | 1 Minutes", ],
          "TaskDiscr": "Core strengthening exercise focusing on stabilizing the core.",
          "TaskContent": "3 sets of 1-minute holds.",
          "TaskDay": 20,
          "TaskDayL": 20,
          "TaskState": false,
          "Time": 1,
          "Reps": "N/A",
          "Sets": 3,
          "Break": 1,
        },
        {
          "Taskname": "Jumping Jacks",
          "Base": "Time",
          "SetDesc" : ["Jumping Jacks | 1 Minutes", "Jumping Jacks | 1 Minutes", "Jumping Jacks | 1 Minutes", "Jumping Jacks | 1 Minutes","Jumping Jacks | 1 Minutes",],
          "TaskDiscr": "Cardio exercise to improve cardiovascular health and burn calories.",
          "TaskContent": "3 sets of 1 minute each.",
          "TaskDay": 20,
          "TaskDayL": 20,
          "TaskState": false,
          "Time": 1,
          "Reps": "N/A",
          "Sets": 5,
          "Break": 1
        },
        {
          "Taskname": "Lunges",
          "Base": "Rep",
          "SetDesc" : [ "Lunges | 15 reps each leg","Lunges | 15 reps each leg","Lunges | 15 reps each leg","Lunges | 15 reps each leg","Lunges | 15 reps each leg", ],
          "TaskDiscr": "Lower body exercise to target the quadriceps, hamstrings, and glutes.",
          "TaskContent": "3 sets of 15 reps per leg.",
          "TaskDay": 20,
          "TaskDayL": 20,
          "TaskState": false,
          "Time": "N/A",
          "Reps": 30,
          "Sets": 3,
          "Break": 1
        },
        {
          "Taskname": "Burpees",
          "Base": "Rep",
          "SetDesc" : [ "Burpees | 12 reps","Burpees | 12 reps","Burpees | 12 reps",],
          "TaskDiscr": "Full-body exercise combining a squat, jump, and push-up for endurance and strength.",
          "TaskContent": "3 sets of 12 reps.",
          "TaskDay": 20,
          "TaskDayL": 20,
          "TaskState": false,
          "Time": "N/A",
          "Reps": 12,
          "Sets" : 3,
          "Break": 1
        },
        {
          "Taskname": "Mountain Climbers",
          "Base": "Time",
          "SetDesc" : [ "Mountain Climbers | 1 minutes","Mountain Climbers | 1 minutes","Mountain Climbers | 1 minutes",],
          "TaskDiscr": "Full-body exercise combining a squat, jump, and push-up for endurance and strength.",
          "TaskDiscr": "Cardio and core exercise to increase heart rate and strengthen the core.",
          "TaskContent": "3 sets of 1 minute each.",
          "TaskDay": 20,
          "TaskDayL": 20,
          "TaskState": false,
          "Time": 1,
          "Reps": "N/A",
          "Sets" : 3,
          "Break": 1
        },
        {
          "Taskname": "Dumbbell Rows",
          "Base": "Rep",
          "SetDesc" : [ "Dumbbell Rows | 12 reps per arm","Dumbbell Rows | 12 reps per arm","Dumbbell Rows | 12 reps per arm",],
          "TaskDiscr": "Strength exercise for the back using dumbbells.",
          "TaskContent": "3 sets of 12 reps per arm.",
          "TaskDay": 5,
          "TaskDayL": 5,
          "TaskState": false,
          "Time": "N/A",
          "Reps": 24,
          "Sets" : 3,
          "Break": 1
        },
        {
          "Taskname": "Bicycle Crunches",
          "Base": "Rep",
          "SetDesc" : [ "Bicycle Crunches | 20 reps per side","Bicycle Crunches | 20 reps per side","Bicycle Crunches | 20 reps per side",],
          "TaskDiscr": "Full-body exercise combining a squat, jump, and push-up for endurance and strength.",
          "TaskContent": "3 sets of 20 reps per side.",
          "TaskDay": 5,
          "TaskDayL": 5,
          "TaskState": false,
          "Time": "N/A",
          "Reps": 40,
          "Sets" : 3,
          "Break": 1
        },
        {
          "Taskname": "High Knees",
          "Base": "Time",
          "SetDesc" : [ "High Knees | 1 minute","High Knees | 1 minute","High Knees | 1 minute",],
          "TaskDiscr": "Cardio exercise to improve cardiovascular endurance and leg strength.",
          "TaskContent": "3 sets of 1 minute each.",
          "TaskDay": 7,
          "TaskDayL": 7,
          "TaskState": false,
          "Time": 1,
          "Reps": "N/A",
          "Sets" : 3,
          "Break": 1,
        },
        {
          "Taskname": "Tricep Dips",
          "Base": "Rep",
          "SetDesc" : [ "Tricep Dips | 15 reps","Tricep Dips | 15 reps","Tricep Dips | 15 reps",],
          "TaskDiscr": "Strength exercise focusing on the triceps using body weight or a bench.",
          "TaskContent": "3 sets of 15 reps.",
          "TaskDay": 7,
          "TaskDayL": 7,
          "TaskState": false,
          "Time": "N/A",
          "Reps": 15,
          "Sets" : 3,
          "Break": 1
        },
        {
          "Taskname": "Leg Raises",
          "Base": "Rep",
          "SetDesc" : [ "Leg Raises | 15 reps","Leg Raises | 15 reps","Leg Raises | 15 reps",],
          "TaskDiscr": "Core exercise focusing on the lower abdominals.",
          "TaskContent": "3 sets of 15 reps.",
          "TaskDay": 7,
          "TaskDayL": 7,
          "TaskState": false,
          "Time": "N/A",
          "Reps": 15,
          "Sets": 3,
          "Break": 1
        },
        {
          "Taskname": "Cardio Session",
          "Base": "Time",
          "SetDesc" : ["Cardio Session | 20 minutes"],
          "TaskDiscr": "Moderate-intensity cardio workout to enhance cardiovascular health.",
          "TaskContent": "20 minutes of brisk walking or jogging.",
          "TaskDay": 2,
          "TaskDayL": 2,
          "TaskState": false,
          "Time": "20 minutes",
          "Reps": "N/A",
          "Sets" : 1,
          "Break": "None"
        },
      ]
    }
  ]
  
  
  const auth = firebase.auth();
  const db = firebase.firestore();
  const whenSignedIn = document.getElementById('whenSignedIn');
  const whenSignedOut = document.getElementById('whenSignedOut');
  
  const SignInBtn = document.getElementById('SignInBtn');
  const SignOutBtn = document.getElementById('SignOutBtn');
  const sumbitBtn = document.getElementById('submitBtn');
  
  const provider = new firebase.auth.GoogleAuthProvider();
  const Pdropdown = document.getElementById('Pdropdown');
  
  const PList = document.getElementById('PList');
  const PreferenceSet = [
      "Weight Loss",
      "Fat Loss",
      "Muscle Gain",
      "Toning",
      "Endurance",
      "Strength",
      "Flexibility",
      "Cardio Health"
  ];
  
  SignInBtn.onclick = () => auth.signInWithPopup(provider);
  try {
  SignOutBtn.onclick = () => auth.signOut();}
  catch {}
  
  auth.onAuthStateChanged(user => {
      if (user) {
          whenSignedIn.hidden = false;
          whenSignedOut.hidden = true;
      } else {
          whenSignedIn.hidden = true;
          whenSignedOut.hidden = false;
      }
  });
  
  let thingsRef;
  let unsubscribe;
  let personalPreferences = [];
  const preferencesLabel = document.getElementById('preferencesLabel');
  const submitBtn = document.getElementById('submitBtn');
  
  
  
  
  auth.onAuthStateChanged(user => {
  
      if (user) {
  
  
          thingsRef = db.collection('preferences')
  
          try{submitBtn.onclick = () => {
              const selectedPreferences = document.getElementById('Pdropdown').value;
              thingsRef.add({
                  uid: user.uid,
                  Preference: selectedPreferences
              });
          }} catch{}
  
          unsubscribe = thingsRef
              .where('uid', '==', user.uid)
              .onSnapshot(querySnapshot => {
  
              const existingPreferences = querySnapshot.docs.map(doc => doc.data().Preference);
  
              Pdropdown.innerHTML = "";
              PreferenceSet.forEach(PDD => {
                  if (!existingPreferences.includes(PDD)) {
                      const option = document.createElement('option');
                      option.value = PDD;
                      option.textContent = PDD;
                      Pdropdown.appendChild(option);
                  }
              });
  
                  const items = querySnapshot.docs.map(doc => {
  
                      return `<li class="list-group-item">Amount: ${doc.data().Preference}</li>`
                  });
  
                  PList.innerHTML = items.join('');
              });
  
  
  
      } else {
  
          unsubscribe && unsubscribe();
      }
  });
  
  try {
  generateTaskCards()} catch{}
  
  
    
  function generateTaskCards() {
      
      const taskCardsContainer = document.getElementById('task-cards');
      document.getElementById("TasksTitle").textContent = `Tasks of ${EDB[0].Name}`
      const progressList = EDB[0].ProgressList;
      
      progressList.forEach(task => {
          
          const card = document.createElement('div');
          card.classList.add('col-md-4', 'mb-4');
          card.innerHTML = `
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${task.Taskname}</h5>
                      <p class="card-text">${task.TaskDiscr}</p>
                      <p class="card-text"><strong>Content:</strong> ${task.TaskContent}</p>
                  </div>
              </div>
          `;
          taskCardsContainer.appendChild(card);
      });
  }
  
  
  function sessionfunc() {
    document.getElementById('SessionAskSec').hidden = true;
    document.getElementById('SessionSec').hidden = false;
    let Labelz = document.getElementById("Labelz");
    let SubLabelz = document.getElementById("SubLabelz");
    let tasks = EDB[0].ProgressList;
    
    // Function to process each task sequentially
    function processTasks(index) {
        if (index >= tasks.length) {
            return; // All tasks processed
        }
        
        let task = tasks[index];
        document.getElementById("title").textContent = task.Taskname; 
        document.getElementById("Sub-title").textContent = task.TaskDiscr; 
        if (task.Base === "Time") {
            console.log("Time");
            TaskCountDown(Labelz, SubLabelz, task.Sets, Number(task.Time) * 60, Number(task.Break) * 60, () => {
                processTasks(index + 1);
            });
        } else if (task.Base === "Rep") {
            console.log("Rep");
            repCountDown(Labelz, SubLabelz, task.Sets,Number(task.Reps), Number(task.Break) * 60, () => {
                processTasks(index + 1);
            });
        }
    }
  
    // Start processing from the first task
    processTasks(0);
  }
  
  // Sessions Code //
  
  function TaskCountDown(Main, Sub, sets, taskTime, breakTime, callback) {
    let currentSet = 1;
  
    function startSet() {
        if (currentSet > sets) {
            Main.textContent = "Workout Complete!";
            Sub.textContent = "Good job!";
            callback(); // Notify when all sets are complete
            return;
        }
  
        Main.textContent = `Set ${currentSet} in progress`;
        countdown(taskTime, Sub, () => {
            if (currentSet < sets) {
                Main.textContent = "Take a break!";
                countdown(breakTime, Sub, () => {
                    currentSet++;
                    startSet();
                });
            } else {
                Main.textContent = "Workout Complete!";
                Sub.textContent = "Good job!";
                callback(); // Notify when all sets are complete
            }
        });
    }
  
    function countdown(time, element, callback) {
        let remainingTime = time;
        const interval = setInterval(() => {
            let minutes = Math.floor(remainingTime / 60);
            let seconds = remainingTime % 60;
  
            if (remainingTime < 60) {
                element.textContent = `${seconds}s remaining`;
            } else {
                element.textContent = `${minutes}m ${seconds}s remaining`;
            }
            
            remainingTime--;
  
            if (remainingTime < 0) {
                clearInterval(interval);
                callback();
            }
        }, 1000);
    }
  
    function startProgramCountdown(time, element, callback) {
        let remainingTime = time;
        const interval = setInterval(() => {
            let minutes = Math.floor(remainingTime / 60);
            let seconds = remainingTime % 60;
  
            if (remainingTime < 60) {
                element.textContent = `Starting in ${seconds}s...`;
            } else {
                element.textContent = `Starting in ${minutes}m ${seconds}s...`;
            }
            
            remainingTime--;
  
            if (remainingTime < 0) {
                clearInterval(interval);
                callback();
            }
        }, 1000);
    }
  
    Main.textContent = "Get ready!";
    startProgramCountdown(3, Sub, startSet);
  }
  
  function repCountDown(Main, Sub, sets, repCount, breakTime, callback) {
    let currentSet = 1;
  
    function startSet() {
        if (currentSet > sets) {
            Main.textContent = "Workout Complete!";
            Sub.textContent = "Good job!";
            document.getElementById('nextButton').style.display = "none";
            callback(); // Notify when all sets are complete
            return;
        }
  
        Main.textContent = `Set ${currentSet} in progress`;
        Sub.textContent = `Perform ${repCount} reps`; // Show the rep count to be done
        document.getElementById('nextButton').textContent = `Set ${currentSet} Completed`;
        document.getElementById('nextButton').style.display = "block";
    }
  
    function startBreak() {
        Main.textContent = "Take a break!";
        countdown(breakTime, Sub, () => {
            currentSet++;
            startSet();
        });
    }
  
    function countdown(time, element, callback) {
        let remainingTime = time;
        const interval = setInterval(() => {
            let minutes = Math.floor(remainingTime / 60);
            let seconds = remainingTime % 60;
  
            if (remainingTime < 60) {
                element.textContent = `${seconds}s remaining`;
            } else {
                element.textContent = `${minutes}m ${seconds}s remaining`;
            }
            
            remainingTime--;
  
            if (remainingTime < 0) {
                clearInterval(interval);
                callback();
            }
        }, 1000);
    }
  
    function startProgramCountdown(time, element, callback) {
        let remainingTime = time;
        const interval = setInterval(() => {
            let minutes = Math.floor(remainingTime / 60);
            let seconds = remainingTime % 60;
  
            if (remainingTime < 60) {
                element.textContent = `Starting in ${seconds}s...`;
            } else {
                element.textContent = `Starting in ${minutes}m ${seconds}s...`;
            }
            
            remainingTime--;
  
            if (remainingTime < 0) {
                clearInterval(interval);
                callback();
            }
        }, 1000);
    }
  
    // Initial countdown before starting the sets
    Main.textContent = "Get ready!";
    startProgramCountdown(5, Sub, startSet);
  
    // Button click event
    document.getElementById('nextButton').addEventListener('click', () => {
        document.getElementById('nextButton').style.display = "none";
        startBreak();
    });
  }
  
  