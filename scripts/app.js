const auth = firebase.auth();
const db = firebase.firestore();

// DOM Elements
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const SignInBtn = document.getElementById('SignInBtn');
const SignOutBtn = document.getElementById('SignOutBtn');
const submitBtn = document.getElementById('submitBtn');

// Firebase Auth Provider
const provider = new firebase.auth.GoogleAuthProvider();

// Sign In and Sign Out Handlers
SignInBtn.onclick = () => auth.signInWithPopup(provider);
SignOutBtn.onclick = () => {
    try {
        auth.signOut();
    } catch (error) {
        console.error('Sign out error:', error);
    }
};

// Auth State Change Listener
auth.onAuthStateChanged(user => {
    whenSignedIn.hidden = !user;
    whenSignedOut.hidden = !!user;
});

// Function to Handle Exercise or Preferences
function ExerciseORPreferences() {
    let thingsRef;
    let unsubscribe;

    auth.onAuthStateChanged(user => {
        if (user) {
            thingsRef = db.collection('preferences');
            unsubscribe = thingsRef
                .where('uid', '==', user.uid)
                .onSnapshot(querySnapshot => {
                    window.location.href = querySnapshot.empty ? "/pages/preferences/PreferencesLoad.html" : "/pages/exercises/eLoad.html";
                });
        } else {
            unsubscribe && unsubscribe();
        }
    });
}

// Function to Get User Preferences
async function getUserPreferences(userInfo, allPreferences, apiKey) {
    const MAX_PREFERENCES = 4;
    const API_URL = 'https://api.openai.com/v1/chat/completions';

    const user = await new Promise(resolve => auth.onAuthStateChanged(resolve));

    if (!user) {
        console.error('User is not authenticated.');
        return [];
    }

    const prompt = `Given the following user information:\n${JSON.stringify(userInfo, null, 2)}\n\nAnd the following list of possible preferences:\n${allPreferences.join(', ')}\n\nPlease select ${MAX_PREFERENCES} preferences that would be most suitable for this user. Return only the list of selected preferences, separated by commas.`;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 100,
                n: 1,
                temperature: 0.5,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const aiResponse = data.choices[0].message.content.trim();
        let selectedPreferences = aiResponse.split(',').map(pref => pref.trim()).filter(pref => pref !== '' && allPreferences.includes(pref));

        console.log('User Info:', userInfo);
        console.log('API Response:', data);
        console.log('Selected Preferences:', selectedPreferences);
        PreferencesPush(selectedPreferences);
    } catch (error) {
        console.error('Error determining user preferences:', error.message);
        return [];
    }
}

// Function to Push Preferences
function PreferencesPush(preferences) {
    auth.onAuthStateChanged(user => {
        if (user) {
            const thingsRef = db.collection('preferences');
            thingsRef.add({
                uid: user.uid,
                Preference: preferences,
            }).then(() => console.log("PUSHED"));

            unsubscribe = thingsRef
                .where('uid', '==', user.uid)
                .onSnapshot(querySnapshot => {
                    querySnapshot.docs.forEach(doc => {
                        console.log(doc.data().Preference);
                    });
                });
        }
    });
}

// Function to Display User Preferences
function DisplayUserPreferences() {
    let thingsRef;
    let unsubscribe;

    auth.onAuthStateChanged(user => {
        if (user) {
            thingsRef = db.collection('preferences');
            unsubscribe = thingsRef
                .where('uid', '==', user.uid)
                .onSnapshot(querySnapshot => {
                    const items = querySnapshot.docs.map(doc => `<li>${doc.data().Preference}</li>`);
                    document.getElementById('preferences').innerHTML = items.join(', ');
                });
        } else {
            unsubscribe && unsubscribe();
        }
    });
}

// Function to Find Exercises
function ExerciseFinder() {
    auth.onAuthStateChanged(user => {
        if (user) {
            const thingsRef = db.collection('exercises');
            unsubscribe = thingsRef
                .where('uid', '==', user.uid)
                .onSnapshot(querySnapshot => {
                    window.location.href = querySnapshot.empty ? "/pages/exercises/ePlan.html" : "/pages/exercises/ePlanDetails.html";
                });
        }
    });
}

// Function to Start Plan
function StartPlan(index) {
    console.log("PUSHED");
    auth.onAuthStateChanged(user => {
        if (user) {
            const thingsRef = db.collection('exercises');
            thingsRef.add({
                uid: user.uid,
                Plan: index,
            });

            unsubscribe = thingsRef
                .where('uid', '==', user.uid)
                .onSnapshot(querySnapshot => {
                    setTimeout(() => {
                        window.location.href = querySnapshot.empty ? "/pages/exercises/ePlan.html" : "/pages/exercises/ePlanDetails.html";
                    }, 2000);
                });
        }
    });
}

// Function to Initiate Session
function sessionInitiated() {
    auth.onAuthStateChanged(user => {
        if (user) {
            const thingsRef = db.collection('exercises');
            unsubscribe = thingsRef
                .where('uid', '==', user.uid)
                .onSnapshot(querySnapshot => {
                    if (querySnapshot.empty) {
                        window.location.href = "/pages/exercises/ePlan.html";
                    }
                });
        }
    });
}

// Function to Complete Session
function CompleteSession(plan) {
    auth.onAuthStateChanged(user => {
        if (user) {
            const thingsRef = db.collection('sessions');
            thingsRef.add({
                uid: user.uid,
                Plan: plan,
                Number: 1,
            });
        }
    });
}

// Function to Check Preferences
function PreferencesCheck(mode) {
    auth.onAuthStateChanged(user => {
        if (user) {
            const thingsRef = db.collection('preferences');
            unsubscribe = thingsRef
                .where('uid', '==', user.uid)
                .onSnapshot(querySnapshot => {
                    if (querySnapshot.empty) {
                        window.location.href = "/pages/preferences/PreferencesLoad.html";
                    } else {
                        window.location.href = mode === "e" ? "/pages/exercises/eLoad.html" : "/pages/diets/DietLoad.html";
                    }
                });
        } else {
            unsubscribe && unsubscribe();
        }
    });
}

// Function to Find Routine
function RoutineFinder() {
    auth.onAuthStateChanged(user => {
        if (user) {
            const thingsRef = db.collection('routines');
            console.log("Routine Finder");
            unsubscribe = thingsRef
                .where('uid', '==', user.uid)
                .onSnapshot(querySnapshot => {
                    console.log("In Routine Finder");
                    window.location.href = querySnapshot.empty ? "/pages/routine/RoutineGenForm.html" : "/pages/routine/RoutineList.html";
                });
        } else {
            unsubscribe && unsubscribe();
        }
    });
}

// Function to Select Diet Plan
function DietPlanSelection(index) {
    auth.onAuthStateChanged(user => {
        if (user) {
            const thingsRef = db.collection('dietPlans');
            thingsRef.add({
                uid: user.uid,
                DietPlan: index,
            });

            setTimeout(() => {
                window.location.href = '/pages/diets/DietDetails.html';
            }, 2000);
        }
    });
}

// Function to Load Preferences Generation
function LoadPreferencesGen(show, hide, hide2) {
    document.getElementById(hide).hidden = true;
    document.getElementById(hide2).style.display = "none";
    document.getElementById(show).hidden = false;
}

// Function to Choose Preferences
function preferencechooser() {
    window.location.href = "/pages/preferences/PreferencesLoad.html";
}
