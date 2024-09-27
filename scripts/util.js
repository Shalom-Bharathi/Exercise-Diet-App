const DietsDB = [
    {
        "name": "Zone Diet",
        "description": "Balances macronutrients (proteins, carbohydrates, and fats) to reduce inflammation.",
        "averageCalories": 1500,
        "macronutrients": {
            "carbs": 40,
            "protein": 30,
            "fat": 30
        },
        "keyNutrients": [
            { "name": "Protein", "amount": "60-120g", "unit": "per day" },
            { "name": "Fiber", "amount": "25g", "unit": "per day" },
            { "name": "Omega-3", "amount": "1-2g", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Lean Proteins",
                "icon": "fish",
                "foods": ["Chicken", "Fish (Salmon, Tuna)", "Eggs", "Tofu", "Lentils"]
            },
            {
                "name": "Low Glycemic Vegetables",
                "icon": "leaf",
                "foods": ["Broccoli", "Spinach", "Cucumbers", "Tomatoes", "Bell Peppers"]
            },
            {
                "name": "Fruits",
                "icon": "apple",
                "foods": ["Apples", "Berries", "Oranges", "Grapefruit"]
            },
            {
                "name": "Healthy Fats",
                "icon": "oil",
                "foods": ["Olive Oil", "Nuts (Almonds, Walnuts)", "Avocados"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Egg white omelette with spinach and avocado",
                    "Greek yogurt with berries and almonds"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Grilled chicken with mixed greens and olive oil dressing",
                    "Lentil soup with a side of cucumber salad"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Baked salmon with steamed vegetables",
                    "Tofu stir-fry with broccoli and bell peppers"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Mixed nuts",
                    "Fresh fruit"
                ]
            }
        ],
        "benefits": [
            "May aid in weight loss and improve overall health",
            "Balances energy levels",
            "Reduces inflammation"
        ],
        "considerations": [
            "Requires portion control to maintain balance of macronutrients",
            "May be difficult to follow in social settings"
        ],
        "category": "Weight Management",
        "keywords": ["Weight Loss", "Energy", "Metabolism", "Performance"],
        "dietTypes": ["veg", "non-veg", "egg"]
    },
    {
        "name": "Keto Diet",
        "description": "A low-carb, high-fat diet that shifts the body into ketosis for fat burning.",
        "averageCalories": 1800,
        "macronutrients": {
            "carbs": 5,
            "protein": 20,
            "fat": 75
        },
        "keyNutrients": [
            { "name": "Fat", "amount": "150-165g", "unit": "per day" },
            { "name": "Protein", "amount": "90-100g", "unit": "per day" },
            { "name": "Carbohydrates", "amount": "20-50g", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Healthy Fats",
                "icon": "oil",
                "foods": ["Avocado", "Coconut Oil", "Olive Oil", "Butter", "Cheese"]
            },
            {
                "name": "Proteins",
                "icon": "drumstick",
                "foods": ["Eggs", "Meat", "Fish", "Poultry"]
            },
            {
                "name": "Low-Carb Vegetables",
                "icon": "leaf",
                "foods": ["Spinach", "Kale", "Broccoli", "Cauliflower", "Zucchini"]
            },
            {
                "name": "Nuts and Seeds",
                "icon": "seedling",
                "foods": ["Almonds", "Walnuts", "Chia Seeds", "Flaxseeds"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Bacon and eggs with avocado",
                    "Keto smoothie with coconut milk, berries, and chia seeds"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Chicken salad with mixed greens and olive oil dressing",
                    "Tuna lettuce wraps with mayo"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Steak with buttered vegetables",
                    "Salmon with asparagus and hollandaise sauce"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Cheese cubes",
                    "Hard-boiled eggs",
                    "Handful of nuts"
                ]
            }
        ],
        "benefits": [
            "Promotes fat loss",
            "Improves mental focus",
            "May reduce seizures in epilepsy patients"
        ],
        "considerations": [
            "Initial adaptation period can be challenging ('keto flu')",
            "May be difficult to maintain long-term",
            "Requires careful planning to ensure adequate nutrient intake"
        ],
        "category": "Weight Loss",
        "keywords": ["Weight Loss", "Energy", "Performance", "Metabolism"],
        "dietTypes": ["non-veg", "egg"]
    },
    {
        "name": "Mediterranean Diet",
        "description": "Focuses on whole foods like fruits, vegetables, and healthy fats such as olive oil.",
        "averageCalories": 2000,
        "macronutrients": {
            "carbs": 50,
            "protein": 20,
            "fat": 30
        },
        "keyNutrients": [
            { "name": "Fiber", "amount": "25-35g", "unit": "per day" },
            { "name": "Omega-3", "amount": "1-2g", "unit": "per day" },
            { "name": "Vitamin C", "amount": "65-90mg", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Fruits and Vegetables",
                "icon": "apple",
                "foods": ["Tomatoes", "Spinach", "Olives", "Grapes", "Oranges"]
            },
            {
                "name": "Whole Grains",
                "icon": "bread",
                "foods": ["Whole Wheat Bread", "Brown Rice", "Quinoa", "Oats"]
            },
            {
                "name": "Healthy Fats",
                "icon": "oil",
                "foods": ["Olive Oil", "Nuts", "Avocados"]
            },
            {
                "name": "Lean Proteins",
                "icon": "fish",
                "foods": ["Fish", "Poultry", "Legumes", "Eggs"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Greek yogurt with honey and walnuts",
                    "Whole grain toast with avocado and tomato"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Grilled fish with quinoa and roasted vegetables",
                    "Lentil soup with whole grain bread"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Chicken souvlaki with Greek salad",
                    "Vegetable and chickpea stew"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Fresh fruit",
                    "Handful of nuts",
                    "Hummus with vegetable sticks"
                ]
            }
        ],
        "benefits": [
            "Supports heart health",
            "Boosts metabolism",
            "May reduce risk of chronic diseases"
        ],
        "considerations": [
            "Higher in fat than some other diets, though mostly healthy fats",
            "May require more time for meal preparation",
            "Portion control still important for weight management"
        ],
        "category": "Cardio Health",
        "keywords": ["Cardio Health", "Flexibility", "Endurance", "Metabolism"],
        "dietTypes": ["veg", "non-veg", "egg"]
    },
    {
        "name": "Paleo Diet",
        "description": "Based on foods that could be hunted or gathered in prehistoric times, like meat, fish, vegetables, and nuts.",
        "averageCalories": 2200,
        "macronutrients": {
            "carbs": 25,
            "protein": 30,
            "fat": 45
        },
        "keyNutrients": [
            { "name": "Protein", "amount": "100-120g", "unit": "per day" },
            { "name": "Fiber", "amount": "20-30g", "unit": "per day" },
            { "name": "Omega-3", "amount": "1-2g", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Lean Meats",
                "icon": "drumstick",
                "foods": ["Grass-fed Beef", "Chicken", "Turkey", "Pork"]
            },
            {
                "name": "Fish and Seafood",
                "icon": "fish",
                "foods": ["Salmon", "Tuna", "Mackerel", "Shrimp"]
            },
            {
                "name": "Fruits and Vegetables",
                "icon": "apple",
                "foods": ["Berries", "Leafy Greens", "Sweet Potatoes", "Broccoli"]
            },
            {
                "name": "Nuts and Seeds",
                "icon": "seedling",
                "foods": ["Almonds", "Walnuts", "Pumpkin Seeds", "Sunflower Seeds"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Eggs with avocado and berries",
                    "Smoothie with almond milk, banana, and almond butter"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Grilled chicken salad with mixed vegetables",
                    "Tuna wrapped in lettuce leaves with fruit"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Grilled steak with roasted vegetables",
                    "Baked salmon with sweet potato and asparagus"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Mixed nuts",
                    "Apple slices with almond butter",
                    "Beef jerky"
                ]
            }
        ],
        "benefits": [
            "May improve strength and overall energy",
            "Can aid in weight loss",
            "May reduce inflammation"
        ],
        "considerations": [
            "Eliminates whole grains and legumes, which are nutritious",
            "Can be expensive due to emphasis on quality meats",
            "May be challenging for vegetarians or vegans"
        ],
        "category": "Strength",
        "keywords": ["Strength", "Energy", "Performance", "Power"],
        "dietTypes": ["non-veg", "egg"]
    },
    {
        "name": "Plant-Based Diet",
        "description": "Focuses on foods primarily from plants, including fruits, vegetables, nuts, seeds, oils, and whole grains.",
        "averageCalories": 1800,
        "macronutrients": {
            "carbs": 55,
            "protein": 15,
            "fat": 30
        },
        "keyNutrients": [
            { "name": "Fiber", "amount": "30-40g", "unit": "per day" },
            { "name": "Vitamin C", "amount": "65-90mg", "unit": "per day" },
            { "name": "Iron", "amount": "18mg", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Fruits and Vegetables",
                "icon": "apple",
                "foods": ["Leafy Greens", "Berries", "Citrus Fruits", "Cruciferous Vegetables"]
            },
            {
                "name": "Whole Grains",
                "icon": "bread",
                "foods": ["Quinoa", "Brown Rice", "Oats", "Whole Wheat Pasta"]
            },
            {
                "name": "Legumes",
                "icon": "seedling",
                "foods": ["Lentils", "Chickpeas", "Black Beans", "Tofu"]
            },
            {
                "name": "Nuts and Seeds",
                "icon": "seedling",
                "foods": ["Almonds", "Chia Seeds", "Flaxseeds", "Walnuts"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Oatmeal with berries and nut butter",
                    "Tofu scramble with vegetables"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Quinoa salad with mixed vegetables and chickpeas",
                    "Lentil soup with whole grain bread"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Stir-fry vegetables with tofu and brown rice",
                    "Black bean and sweet potato tacos"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Apple slices with almond butter",
                    "Carrot sticks with hummus",
                    "Trail mix with nuts and dried fruit"
                ]
            }
        ],
        "benefits": [
            "May enhance immune function",
            "Promotes detoxification",
            "Can lower risk of chronic diseases"
        ],
        "considerations": [
            "May require B12 supplementation",
            "Need to ensure adequate protein intake",
            "Some may find it challenging to meet calorie needs"
        ],
        "category": "Immune Support",
        "keywords": ["Detox", "Immune Support", "Hydration", "Recovery"],
        "dietTypes": ["veg"]
    },
    {
        "name": "High-Protein Diet",
        "description": "Emphasizes protein intake to support muscle gain and recovery.",
        "averageCalories": 2500,
        "macronutrients": {
            "carbs": 30,
            "protein": 40,
            "fat": 30
        },
        "keyNutrients": [
            { "name": "Protein", "amount": "1.6-2.2g", "unit": "per kg of body weight" },
            { "name": "Branched-chain amino acids", "amount": "5-10g", "unit": "per day" },
            { "name": "Creatine", "amount": "3-5g", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Lean Meats",
                "icon": "drumstick",
                "foods": ["Chicken Breast", "Turkey", "Lean Beef", "Pork Loin"]
            },
            {
                "name": "Fish and Seafood",
                "icon": "fish",
                "foods": ["Salmon", "Tuna", "Tilapia", "Shrimp"]
            },
            {
                "name": "Dairy",
                "icon": "cheese",
                "foods": ["Greek Yogurt", "Cottage Cheese", "Whey Protein"]
            },
            {
                "name": "Plant-based Proteins",
                "icon": "seedling",
                "foods": ["Lentils", "Chickpeas", "Tofu", "Quinoa"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Egg white omelette with spinach and turkey",
                    "Greek yogurt with berries and protein powder"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Grilled chicken breast with quinoa and vegetables",
                    "Tuna salad with mixed greens"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Lean beef stir-fry with brown rice",
                    "Baked salmon with sweet potato and broccoli"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Protein shake",
                    "Cottage cheese with fruit",
                    "Hard-boiled eggs"
                ]
            }
        ],
        "benefits": [
            "Supports muscle growth and recovery",
            "May aid in weight loss",
            "Can improve satiety"
        ],
        "considerations": [
            "May be hard on the kidneys if protein intake is excessive",
            "Can be challenging for vegetarians",
            "Requires careful planning to ensure balanced nutrition"
        ],
        "category": "Muscle Gain",
        "keywords": ["Muscle Gain", "Strength", "Recovery", "Core Stability"],
        "dietTypes": ["veg", "non-veg", "egg"]
    },
    {
        "name": "Intermittent Fasting",
        "description": "Cycles between periods of eating and fasting to promote fat loss and improve metabolism.",
        "averageCalories": 2000,
        "macronutrients": {
            "carbs": 40,
            "protein": 30,
            "fat": 30
        },
        "keyNutrients": [
            { "name": "All essential nutrients", "amount": "100%", "unit": "of daily needs during eating window" }
        ],
        "foodCategories": [
            {
                "name": "Proteins",
                "icon": "drumstick",
                "foods": ["Lean Meats", "Fish", "Eggs", "Legumes"]
            },
            {
                "name": "Complex Carbohydrates",
                "icon": "bread",
                "foods": ["Whole Grains", "Sweet Potatoes", "Quinoa"]
            },
            {
                "name": "Healthy Fats",
                "icon": "oil",
                "foods": ["Avocado", "Nuts", "Olive Oil", "Fatty Fish"]
            },
            {
                "name": "Fruits and Vegetables",
                "icon": "apple",
                "foods": ["Berries", "Leafy Greens", "Cruciferous Vegetables"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Eating Window",
                "options": [
                    "Balanced meal with protein, complex carbs, and vegetables",
                    "Nutrient-dense smoothie with protein powder and fruits",
                    "Large salad with grilled chicken and avocado"
                ]
            },
            {
                "meal": "Fasting Window",
                "options": [
                    "Water",
                    "Herbal tea",
                    "Black coffee"
                ]
            }
        ],
        "benefits": [
            "Aids in weight loss",
            "Improves metabolism",
            "May enhance longevity"
        ],
        "considerations": [
            "Can be challenging to adapt to initially",
            "May not be suitable for everyone (e.g., pregnant women, people with certain medical conditions)",
            "Requires careful planning to ensure adequate nutrient intake during eating windows"
        ],
        "category": "Weight Loss",
        "keywords": ["Weight Loss", "Metabolism", "Energy", "Endurance"],
        "dietTypes": ["veg", "non-veg", "egg"]
    },
    {
        "name": "Vegan Diet",
        "description": "Excludes all animal products and focuses on plant-based foods.",
        "averageCalories": 1800,
        "macronutrients": {
            "carbs": 55,
            "protein": 15,
            "fat": 30
        },
        "keyNutrients": [
            { "name": "Vitamin B12", "amount": "2.4mcg", "unit": "per day" },
            { "name": "Iron", "amount": "18mg", "unit": "per day" },
            { "name": "Calcium", "amount": "1000mg", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Fruits and Vegetables",
                "icon": "apple",
                "foods": ["Leafy Greens", "Berries", "Citrus Fruits", "Root Vegetables"]
            },
            {
                "name": "Whole Grains",
                "icon": "bread",
                "foods": ["Quinoa", "Brown Rice", "Oats", "Whole Wheat Pasta"]
            },
            {
                "name": "Legumes",
                "icon": "seedling",
                "foods": ["Lentils", "Chickpeas", "Black Beans", "Tofu"]
            },
            {
                "name": "Nuts and Seeds",
                "icon": "seedling",
                "foods": ["Almonds", "Chia Seeds", "Flaxseeds", "Walnuts"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Smoothie bowl with plant-based protein powder",
                    "Tofu scramble with vegetables and whole grain toast"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Lentil and vegetable soup with whole grain bread",
                    "Buddha bowl with quinoa, roasted vegetables, and tahini dressing"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Stir-fry tofu with mixed vegetables and brown rice",
                    "Chickpea curry with cauliflower rice"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Hummus with vegetable sticks",
                    "Trail mix with nuts and dried fruit",
                    "Apple slices with almond butter"
                ]
            }
        ],
        "benefits": [
            "Improves digestion",
            "Supports immune function",
            "May lower risk of certain chronic diseases"
        ],
        "considerations": [
            "Requires careful planning to ensure adequate protein, vitamin B12, iron, and calcium intake",
            "May need to supplement certain nutrients",
            "Can be challenging in social situations or when traveling"
        ],
        "category": "Immune Support",
        "keywords": ["Detox", "Immune Support", "Hydration", "Energy"],
        "dietTypes": ["veg"]
    },
    {
        "name": "Atkins Diet",
        "description": "A low-carbohydrate diet focused on protein and fat consumption.",
        "averageCalories": 1800,
        "macronutrients": {
            "carbs": 10,
            "protein": 30,
            "fat": 60
        },
        "keyNutrients": [
            { "name": "Protein", "amount": "1.2-1.6g", "unit": "per kg of body weight" },
            { "name": "Fiber", "amount": "20-25g", "unit": "per day" },
            { "name": "Omega-3", "amount": "1-2g", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Proteins",
                "icon": "drumstick",
                "foods": ["Beef", "Chicken", "Fish", "Eggs"]
            },
            {
                "name": "Healthy Fats",
                "icon": "oil",
                "foods": ["Olive Oil", "Avocado", "Nuts", "Seeds"]
            },
            {
                "name": "Low-Carb Vegetables",
                "icon": "leaf",
                "foods": ["Spinach", "Broccoli", "Cauliflower", "Zucchini"]
            },
            {
                "name": "Dairy",
                "icon": "cheese",
                "foods": ["Cheese", "Heavy Cream", "Butter"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Bacon and eggs with avocado",
                    "Low-carb smoothie with protein powder and berries"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Chicken salad with mixed greens and olive oil dressing",
                    "Tuna lettuce wraps with mayo"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Steak with buttered vegetables",
                    "Baked salmon with asparagus"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Hard-boiled eggs",
                    "Cheese cubes",
                    "Handful of nuts"
                ]
            }
        ],
        "benefits": [
            "Helps with weight loss",
            "Boosts energy",
            "May improve blood sugar control"
        ],
        "considerations": [
            "Initial phase can be very restrictive",
            "May lead to nutrient deficiencies if not carefully planned",
            "Can be high in saturated fat"
        ],
        "category": "Weight Loss",
        "keywords": ["Weight Loss", "Energy", "Metabolism", "Power"],
        "dietTypes": ["non-veg", "egg"]
    },
    {
        "name": "DASH Diet",
        "description": "Designed to lower blood pressure by emphasizing vegetables, fruits, and low-fat dairy.",
        "averageCalories": 2000,
        "macronutrients": {
            "carbs": 55,
            "protein": 18,
            "fat": 27
        },
        "keyNutrients": [
            { "name": "Sodium", "amount": "1500-2300mg", "unit": "per day" },
            { "name": "Potassium", "amount": "4700mg", "unit": "per day" },
            { "name": "Calcium", "amount": "1250mg", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Fruits and Vegetables",
                "icon": "apple",
                "foods": ["Leafy Greens", "Berries", "Bananas", "Oranges"]
            },
            {
                "name": "Whole Grains",
                "icon": "bread",
                "foods": ["Whole Wheat Bread", "Brown Rice", "Oatmeal"]
            },
            {
                "name": "Lean Proteins",
                "icon": "drumstick",
                "foods": ["Skinless Poultry", "Fish", "Beans"]
            },
            {
                "name": "Low-Fat Dairy",
                "icon": "cheese",
                "foods": ["Skim Milk", "Low-Fat Yogurt", "Low-Fat Cheese"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Oatmeal with berries and low-fat milk",
                    "Whole grain toast with avocado and hard-boiled egg"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Grilled chicken salad with mixed vegetables",
                    "Whole grain wrap with turkey and vegetables"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Baked fish with roasted vegetables and brown rice",
                    "Vegetarian chili with whole grain cornbread"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Fresh fruit",
                    "Low-fat yogurt",
                    "Handful of unsalted nuts"
                ]
            }
        ],
        "benefits": [
            "Improves cardiovascular health",
            "Lowers blood pressure",
            "May reduce risk of diabetes"
        ],
        "considerations": [
            "Requires consistent effort to limit sodium intake",
            "May be challenging for those used to high-salt diets",
            "Requires careful meal planning and preparation"
        ],
        "category": "Cardio Health",
        "keywords": ["Cardio Health", "Endurance", "Flexibility", "Posture"],
        "dietTypes": ["veg", "non-veg", "egg"]
    },
    {
        "name": "Carnivore Diet",
        "description": "A diet that consists entirely of animal products, excluding all plant-based foods.",
        "averageCalories": 2500,
        "macronutrients": {
            "carbs": 0,
            "protein": 50,
            "fat": 50
        },
        "keyNutrients": [
            { "name": "Protein", "amount": "1.5-2.0g", "unit": "per kg of body weight" },
            { "name": "Vitamin B12", "amount": "2.4mcg", "unit": "per day" },
            { "name": "Iron", "amount": "8mg", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Meats",
                "icon": "drumstick",
                "foods": ["Beef", "Pork", "Chicken", "Lamb"]
            },
            {
                "name": "Fish",
                "icon": "fish",
                "foods": ["Salmon", "Tuna", "Mackerel"]
            },
            {
                "name": "Dairy",
                "icon": "cheese",
                "foods": ["Cheese", "Butter", "Cream"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Steak and eggs",
                    "Bacon"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Grilled chicken thighs",
                    "Pork belly"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Roast beef",
                    "Grilled salmon"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Beef jerky",
                    "Pork rinds"
                ]
            }
        ],
        "benefits": [
            "May lead to weight loss",
            "Simplicity in meal planning",
            "High in protein and fat"
        ],
        "considerations": [
            "Lacks essential nutrients from plants",
            "May lead to nutrient deficiencies",
            "Can be restrictive and hard to maintain"
        ],
        "category": "Weight Loss",
        "keywords": ["Weight Loss", "Protein", "Simplicity"],
        "dietTypes": ["non-veg"]
    },
    {
        "name": "Gluten-Free Diet",
        "description": "Excludes gluten, a protein found in wheat, barley, and rye, to manage gluten-related disorders.",
        "averageCalories": 2000,
        "macronutrients": {
            "carbs": 50,
            "protein": 20,
            "fat": 30
        },
        "keyNutrients": [
            { "name": "Fiber", "amount": "25g", "unit": "per day" },
            { "name": "Iron", "amount": "18mg", "unit": "per day" },
            { "name": "Calcium", "amount": "1000mg", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Gluten-Free Grains",
                "icon": "bread",
                "foods": ["Rice", "Quinoa", "Corn", "Buckwheat"]
            },
            {
                "name": "Fruits and Vegetables",
                "icon": "apple",
                "foods": ["All fruits and vegetables"]
            },
            {
                "name": "Proteins",
                "icon": "drumstick",
                "foods": ["Meat", "Fish", "Eggs", "Legumes"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Smoothie with gluten-free protein powder",
                    "Oatmeal made with gluten-free oats"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Quinoa salad with mixed vegetables",
                    "Grilled chicken with steamed broccoli"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Baked fish with roasted sweet potatoes",
                    "Stir-fried tofu with gluten-free soy sauce"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Rice cakes with almond butter",
                    "Fruit"
                ]
            }
        ],
        "benefits": [
            "Helps manage celiac disease and gluten sensitivity",
            "May improve digestive health",
            "Encourages whole food consumption"
        ],
        "considerations": [
            "Can be expensive due to specialty products",
            "May lead to nutrient deficiencies if not well-planned",
            "Requires careful label reading"
        ],
        "category": "Health",
        "keywords": ["Health", "Digestive Health", "Celiac Disease"],
        "dietTypes": ["veg", "non-veg"]
    },
    {
        "name": "Raw Food Diet",
        "description": "Focuses on consuming unprocessed and uncooked foods, primarily fruits, vegetables, nuts, and seeds.",
        "averageCalories": 1800,
        "macronutrients": {
            "carbs": 60,
            "protein": 10,
            "fat": 30
        },
        "keyNutrients": [
            { "name": "Vitamin C", "amount": "65-90mg", "unit": "per day" },
            { "name": "Fiber", "amount": "30g", "unit": "per day" },
            { "name": "Iron", "amount": "18mg", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Fruits and Vegetables",
                "icon": "apple",
                "foods": ["All fruits and vegetables"]
            },
            {
                "name": "Nuts and Seeds",
                "icon": "seedling",
                "foods": ["Almonds", "Walnuts", "Chia Seeds"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Smoothie with raw fruits and vegetables",
                    "Chia pudding with almond milk"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Salad with mixed greens and raw vegetables",
                    "Raw vegetable wraps with hummus"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Zucchini noodles with raw tomato sauce",
                    "Stuffed bell peppers with raw nuts and seeds"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Fresh fruit",
                    "Raw nuts"
                ]
            }
        ],
        "benefits": [
            "May improve digestion",
            "Encourages consumption of whole foods",
            "High in vitamins and minerals"
        ],
        "considerations": [
            "Can be difficult to maintain",
            "May lead to nutrient deficiencies",
            "Requires careful planning"
        ],
        "category": "Health",
        "keywords": ["Health", "Raw Foods", "Nutrition"],
        "dietTypes": ["veg"]
    },
    {
        "name": "Pescatarian Diet",
        "description": "Includes fish and seafood in addition to plant-based foods, while excluding other meats.",
        "averageCalories": 2000,
        "macronutrients": {
            "carbs": 50,
            "protein": 25,
            "fat": 25
        },
        "keyNutrients": [
            { "name": "Omega-3", "amount": "1-2g", "unit": "per day" },
            { "name": "Protein", "amount": "50-100g", "unit": "per day" },
            { "name": "Vitamin B12", "amount": "2.4mcg", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Fish and Seafood",
                "icon": "fish",
                "foods": ["Salmon", "Tuna", "Shrimp"]
            },
            {
                "name": "Fruits and Vegetables",
                "icon": "apple",
                "foods": ["All fruits and vegetables"]
            },
            {
                "name": "Whole Grains",
                "icon": "bread",
                "foods": ["Brown Rice", "Quinoa", "Oats"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Smoked salmon on whole grain toast",
                    "Fruit smoothie with spinach"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Quinoa salad with mixed vegetables and shrimp",
                    "Grilled fish tacos with cabbage slaw"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Baked salmon with asparagus",
                    "Vegetable stir-fry with tofu"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Hummus with vegetable sticks",
                    "Greek yogurt with honey"
                ]
            }
        ],
        "benefits": [
            "Supports heart health",
            "High in omega-3 fatty acids",
            "Encourages a variety of foods"
        ],
        "considerations": [
            "May be expensive due to seafood",
            "Requires careful planning to ensure balanced nutrition",
            "Can be challenging in non-pescatarian settings"
        ],
        "category": "Health",
        "keywords": ["Health", "Omega-3", "Nutrition"],
        "dietTypes": ["veg", "non-veg"]
    },
    {
        "name": "Low-FODMAP Diet",
        "description": "Designed to reduce symptoms of irritable bowel syndrome (IBS) by limiting certain carbohydrates.",
        "averageCalories": 2000,
        "macronutrients": {
            "carbs": 40,
            "protein": 25,
            "fat": 35
        },
        "keyNutrients": [
            { "name": "Fiber", "amount": "25g", "unit": "per day" },
            { "name": "Protein", "amount": "50-100g", "unit": "per day" },
            { "name": "Vitamin D", "amount": "600 IU", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Low-FODMAP Vegetables",
                "icon": "leaf",
                "foods": ["Carrots", "Spinach", "Zucchini"]
            },
            {
                "name": "Proteins",
                "icon": "drumstick",
                "foods": ["Chicken", "Fish", "Eggs"]
            },
            {
                "name": "Gluten-Free Grains",
                "icon": "bread",
                "foods": ["Rice", "Quinoa", "Oats"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Scrambled eggs with spinach",
                    "Oatmeal with blueberries"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Grilled chicken salad with low-FODMAP dressing",
                    "Quinoa bowl with vegetables"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Baked fish with steamed carrots",
                    "Stir-fried chicken with zucchini"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Rice cakes with peanut butter",
                    "Fruit"
                ]
            }
        ],
        "benefits": [
            "May reduce IBS symptoms",
            "Encourages whole food consumption",
            "Supports digestive health"
        ],
        "considerations": [
            "Requires careful planning to avoid high-FODMAP foods",
            "Can be restrictive",
            "May lead to nutrient deficiencies if not well-planned"
        ],
        "category": "Health",
        "keywords": ["Health", "Digestive Health", "IBS"],
        "dietTypes": ["veg", "non-veg"]
    },
    {
        "name": "South Beach Diet",
        "description": "A low-carb diet that emphasizes healthy fats and lean proteins while limiting refined carbs.",
        "averageCalories": 1800,
        "macronutrients": {
            "carbs": 40,
            "protein": 30,
            "fat": 30
        },
        "keyNutrients": [
            { "name": "Fiber", "amount": "25g", "unit": "per day" },
            { "name": "Protein", "amount": "50-100g", "unit": "per day" },
            { "name": "Omega-3", "amount": "1-2g", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Lean Proteins",
                "icon": "drumstick",
                "foods": ["Chicken", "Turkey", "Fish"]
            },
            {
                "name": "Healthy Fats",
                "icon": "oil",
                "foods": ["Olive Oil", "Avocado", "Nuts"]
            },
            {
                "name": "Low-Glycemic Vegetables",
                "icon": "leaf",
                "foods": ["Spinach", "Broccoli", "Cauliflower"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Eggs with spinach and feta",
                    "Smoothie with protein powder and berries"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Grilled chicken salad with olive oil dressing",
                    "Tuna salad with mixed greens"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Baked salmon with asparagus",
                    "Stir-fried chicken with vegetables"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Nuts",
                    "Vegetable sticks with hummus"
                ]
            }
        ],
        "benefits": [
            "May aid in weight loss",
            "Encourages healthy eating habits",
            "Supports heart health"
        ],
        "considerations": [
            "Requires careful planning to avoid refined carbs",
            "May be challenging in social settings",
            "Can be restrictive"
        ],
        "category": "Weight Loss",
        "keywords": ["Weight Loss", "Heart Health", "Nutrition"],
        "dietTypes": ["non-veg", "egg"]
    },
    {
        "name": "Flexitarian Diet",
        "description": "A flexible vegetarian diet that emphasizes plant-based foods while allowing for occasional meat and fish.",
        "averageCalories": 2000,
        "macronutrients": {
            "carbs": 50,
            "protein": 20,
            "fat": 30
        },
        "keyNutrients": [
            { "name": "Fiber", "amount": "30g", "unit": "per day" },
            { "name": "Protein", "amount": "50-100g", "unit": "per day" },
            { "name": "Iron", "amount": "18mg", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Fruits and Vegetables",
                "icon": "apple",
                "foods": ["All fruits and vegetables"]
            },
            {
                "name": "Whole Grains",
                "icon": "bread",
                "foods": ["Brown Rice", "Quinoa", "Oats"]
            },
            {
                "name": "Proteins",
                "icon": "drumstick",
                "foods": ["Chicken", "Fish", "Legumes"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Smoothie with spinach and banana",
                    "Oatmeal with nuts and berries"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Vegetable stir-fry with tofu",
                    "Quinoa salad with chickpeas"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Grilled fish with vegetables",
                    "Pasta with marinara sauce and vegetables"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Fruit",
                    "Nuts"
                ]
            }
        ],
        "benefits": [
            "Encourages a variety of foods",
            "Supports heart health",
            "May aid in weight loss"
        ],
        "considerations": [
            "Requires careful planning to ensure balanced nutrition",
            "Can be challenging in non-flexitarian settings",
            "May lead to nutrient deficiencies if not well-planned"
        ],
        "category": "Health",
        "keywords": ["Health", "Flexibility", "Nutrition"],
        "dietTypes": ["veg", "non-veg"]
    },
    {
        "name": "Whole30 Diet",
        "description": "Focuses on whole, unprocessed foods for 30 days to reset metabolism.",
        "averageCalories": 1500,
        "macronutrients": {
            "carbs": 40,
            "protein": 30,
            "fat": 30
        },
        "keyNutrients": [
            { "name": "Protein", "amount": "60-120g", "unit": "per day" },
            { "name": "Fiber", "amount": "25g", "unit": "per day" },
            { "name": "Omega-3", "amount": "1-2g", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Lean Proteins",
                "icon": "fish",
                "foods": ["Chicken", "Fish (Salmon, Tuna)", "Eggs", "Tofu", "Lentils"]
            },
            {
                "name": "Low Glycemic Vegetables",
                "icon": "leaf",
                "foods": ["Broccoli", "Spinach", "Cucumbers", "Tomatoes", "Bell Peppers"]
            },
            {
                "name": "Fruits",
                "icon": "apple",
                "foods": ["Apples", "Berries", "Oranges", "Grapefruit"]
            },
            {
                "name": "Healthy Fats",
                "icon": "oil",
                "foods": ["Olive Oil", "Nuts (Almonds, Walnuts)", "Avocados"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Egg white omelette with spinach and avocado",
                    "Greek yogurt with berries and almonds"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Grilled chicken with mixed greens and olive oil dressing",
                    "Lentil soup with a side of cucumber salad"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Baked salmon with steamed vegetables",
                    "Tofu stir-fry with broccoli and bell peppers"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Mixed nuts",
                    "Fresh fruit"
                ]
            }
        ],
        "benefits": [
            "May aid in weight loss and improve overall health",
            "Balances energy levels",
            "Reduces inflammation"
        ],
        "considerations": [
            "Requires portion control to maintain balance of macronutrients",
            "May be difficult to follow in social settings"
        ],
        "category": "Weight Management",
        "keywords": ["Weight Loss", "Energy", "Metabolism", "Performance"],
        "dietTypes": ["veg", "non-veg", "egg"]
    },
    {
        "name": "Ayurvedic Diet",
        "description": "Based on balancing the body's energies through food choices according to doshas.",
        "averageCalories": 1800,
        "macronutrients": {
            "carbs": 50,
            "protein": 20,
            "fat": 30
        },
        "keyNutrients": [
            { "name": "Fiber", "amount": "25g", "unit": "per day" },
            { "name": "Protein", "amount": "50-100g", "unit": "per day" },
            { "name": "Vitamin C", "amount": "65-90mg", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Fruits and Vegetables",
                "icon": "apple",
                "foods": ["All fruits and vegetables"]
            },
            {
                "name": "Whole Grains",
                "icon": "bread",
                "foods": ["Brown Rice", "Quinoa", "Oats"]
            },
            {
                "name": "Spices",
                "icon": "leaf",
                "foods": ["Turmeric", "Cumin", "Coriander"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Oatmeal with fruits and nuts",
                    "Smoothie with spinach and banana"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Quinoa salad with mixed vegetables",
                    "Lentil soup with spices"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Baked fish with steamed vegetables",
                    "Vegetable curry with brown rice"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Fresh fruit",
                    "Nuts"
                ]
            }
        ],
        "benefits": [
            "Promotes balance and well-being",
            "Encourages whole food consumption",
            "Supports digestive health"
        ],
        "considerations": [
            "Requires careful planning to ensure balanced nutrition",
            "Can be challenging in non-Ayurvedic settings",
            "May lead to nutrient deficiencies if not well-planned"
        ],
        "category": "Health",
        "keywords": ["Health", "Balance", "Nutrition"],
        "dietTypes": ["veg", "non-veg"]
    },
    {
        "name": "Macrobiotic Diet",
        "description": "Emphasizes whole grains, vegetables, and beans to promote health and longevity.",
        "averageCalories": 2000,
        "macronutrients": {
            "carbs": 50,
            "protein": 20,
            "fat": 30
        },
        "keyNutrients": [
            { "name": "Fiber", "amount": "30g", "unit": "per day" },
            { "name": "Protein", "amount": "50-100g", "unit": "per day" },
            { "name": "Iron", "amount": "18mg", "unit": "per day" }
        ],
        "foodCategories": [
            {
                "name": "Whole Grains",
                "icon": "bread",
                "foods": ["Brown Rice", "Quinoa", "Barley"]
            },
            {
                "name": "Vegetables",
                "icon": "leaf",
                "foods": ["Kale", "Carrots", "Broccoli"]
            },
            {
                "name": "Legumes",
                "icon": "seedling",
                "foods": ["Lentils", "Chickpeas", "Black Beans"]
            }
        ],
        "mealPlan": [
            {
                "meal": "Breakfast",
                "options": [
                    "Brown rice porridge with fruits",
                    "Smoothie with greens and seeds"
                ]
            },
            {
                "meal": "Lunch",
                "options": [
                    "Quinoa bowl with vegetables and beans",
                    "Miso soup with seaweed"
                ]
            },
            {
                "meal": "Dinner",
                "options": [
                    "Stir-fried vegetables with brown rice",
                    "Vegetable stew with whole grains"
                ]
            },
            {
                "meal": "Snacks",
                "options": [
                    "Fresh fruit",
                    "Nuts"
                ]
            }
        ],
        "benefits": [
            "Promotes health and longevity",
            "Encourages whole food consumption",
            "Supports digestive health"
        ],
        "considerations": [
            "Requires careful planning to ensure balanced nutrition",
            "Can be challenging in non-macrobiotic settings",
            "May lead to nutrient deficiencies if not well-planned"
        ],
        "category": "Health",
        "keywords": ["Health", "Longevity", "Nutrition"],
        "dietTypes": ["veg", "non-veg"]
    }
];


EDB = [
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


  const dietPlans = [
    {
        "title": "Zone Diet",
        "description": "Balances macronutrients (proteins, carbohydrates, and fats) to reduce inflammation.",
        "icon": "pie-chart",
        "color": "#8e44ad",
        "dietTypes": ["veg", "non-veg", "egg"],
        "category": "Weight Management",
        "benefits": "May aid in weight loss and improve overall health.",
        "keywords": ["Weight Loss", "Energy", "Metabolism", "Performance"]
    },
    {
        "title": "Keto Diet",
        "description": "A low-carb, high-fat diet that shifts the body into ketosis for fat burning.",
        "icon": "fire",
        "color": "#e74c3c",
        "dietTypes": ["non-veg", "egg"],
        "category": "Weight Loss",
        "benefits": "Promotes fat loss and improves mental focus.",
        "keywords": ["Weight Loss", "Energy", "Performance", "Metabolism"]
    },
    {
        "title": "Mediterranean Diet",
        "description": "Focuses on whole foods like fruits, vegetables, and healthy fats such as olive oil.",
        "icon": "leaf",
        "color": "#27ae60",
        "dietTypes": ["veg", "non-veg", "egg"],
        "category": "Cardio Health",
        "benefits": "Supports heart health and boosts metabolism.",
        "keywords": ["Cardio Health", "Flexibility", "Endurance", "Metabolism"]
    },
    {
        "title": "Paleo Diet",
        "description": "Based on foods that could be hunted or gathered in prehistoric times, like meat, fish, vegetables, and nuts.",
        "icon": "bone",
        "color": "#d35400",
        "dietTypes": ["non-veg", "egg"],
        "category": "Strength",
        "benefits": "Aims to improve strength and overall energy.",
        "keywords": ["Strength", "Energy", "Performance", "Power"]
    },
    {
        "title": "Plant-Based Diet",
        "description": "Focuses on foods primarily from plants, including fruits, vegetables, nuts, seeds, oils, and whole grains.",
        "icon": "seedling",
        "color": "#2ecc71",
        "dietTypes": ["veg"],
        "category": "Immune Support",
        "benefits": "May enhance immune function and promote detox.",
        "keywords": ["Detox", "Immune Support", "Hydration", "Recovery"]
    },
    {
        "title": "High-Protein Diet",
        "description": "Emphasizes protein intake to support muscle gain and recovery.",
        "icon": "drumstick",
        "color": "#2980b9",
        "dietTypes": ["veg", "non-veg", "egg"],
        "category": "Muscle Gain",
        "benefits": "Supports muscle growth and recovery.",
        "keywords": ["Muscle Gain", "Strength", "Recovery", "Core Stability"]
    },
    {
        "title": "Intermittent Fasting",
        "description": "Cycles between periods of eating and fasting to promote fat loss and improve metabolism.",
        "icon": "clock",
        "color": "#34495e",
        "dietTypes": ["veg", "non-veg", "egg"],
        "category": "Weight Loss",
        "benefits": "Aids in weight loss and improves metabolism.",
        "keywords": ["Weight Loss", "Metabolism", "Energy", "Endurance"]
    },
    {
        "title": "Vegan Diet",
        "description": "Excludes all animal products and focuses on plant-based foods.",
        "icon": "carrot",
        "color": "#16a085",
        "dietTypes": ["veg"],
        "category": "Immune Support",
        "benefits": "Improves digestion and supports immune function.",
        "keywords": ["Detox", "Immune Support", "Hydration", "Energy"]
    },
    {
        "title": "Atkins Diet",
        "description": "A low-carbohydrate diet focused on protein and fat consumption.",
        "icon": "hamburger",
        "color": "#c0392b",
        "dietTypes": ["non-veg", "egg"],
        "category": "Weight Loss",
        "benefits": "Helps with weight loss and boosts energy.",
        "keywords": ["Weight Loss", "Energy", "Metabolism", "Power"]
    },
    {
        "title": "DASH Diet",
        "description": "Designed to lower blood pressure by emphasizing vegetables, fruits, and low-fat dairy.",
        "icon": "heartbeat",
        "color": "#3498db",
        "dietTypes": ["veg", "non-veg", "egg"],
        "category": "Cardio Health",
        "benefits": "Improves cardiovascular health and lowers blood pressure.",
        "keywords": ["Cardio Health", "Endurance", "Flexibility", "Posture"]
    },
    {
        "title": "Carnivore Diet",
        "description": "Consists exclusively of animal products such as meat, fish, and eggs.",
        "icon": "meat",
        "color": "#e67e22",
        "dietTypes": ["non-veg"],
        "category": "Strength",
        "benefits": "May enhance muscle gain and physical strength.",
        "keywords": ["Strength", "Muscle Gain", "Power", "Energy"]
    },
    {
        "title": "Gluten-Free Diet",
        "description": "Eliminates gluten, a protein found in wheat, barley, and rye.",
        "icon": "wheat",
        "color": "#f39c12",
        "dietTypes": ["veg", "non-veg", "egg"],
        "category": "Recovery",
        "benefits": "Improves digestion and supports recovery from gluten intolerance.",
        "keywords": ["Recovery", "Immune Support", "Energy", "Flexibility"]
    },
    {
        "title": "Raw Food Diet",
        "description": "Focuses on unprocessed, whole, plant-based foods, primarily fruits and vegetables.",
        "icon": "apple-alt",
        "color": "#2ecc71",
        "dietTypes": ["veg"],
        "category": "Detox",
        "benefits": "Boosts metabolism and supports detoxification.",
        "keywords": ["Detox", "Hydration", "Immune Support", "Metabolism"]
    },
    {
        "title": "Pescatarian Diet",
        "description": "Includes seafood and plant-based foods but excludes other meats.",
        "icon": "fish",
        "color": "#1abc9c",
        "dietTypes": ["veg", "non-veg"],
        "category": "Cardio Health",
        "benefits": "Supports cardiovascular health and boosts flexibility.",
        "keywords": ["Cardio Health", "Flexibility", "Endurance", "Posture"]
    },
    {
        "title": "Low-FODMAP Diet",
        "description": "Reduces fermentable carbs to relieve digestive discomfort.",
        "icon": "leaf",
        "color": "#f1c40f",
        "dietTypes": ["veg", "non-veg", "egg"],
        "category": "Recovery",
        "benefits": "Improves digestion and supports immune function.",
        "keywords": ["Recovery", "Immune Support", "Hydration", "Energy"]
    },
    {
        "title": "South Beach Diet",
        "description": "A low-carb diet focused on lean protein, healthy fats, and low-GI carbs.",
        "icon": "beach",
        "color": "#3498db",
        "dietTypes": ["non-veg", "egg"],
        "category": "Weight Loss",
        "benefits": "Promotes weight loss and improves metabolism.",
        "keywords": ["Weight Loss", "Metabolism", "Energy", "Performance"]
    },
    {
        "title": "Flexitarian Diet",
        "description": "Primarily plant-based but allows for occasional meat and fish consumption.",
        "icon": "leaf",
        "color": "#2ecc71",
        "dietTypes": ["veg", "non-veg", "egg"],
        "category": "Balance",
        "benefits": "Encourages flexibility in diet while improving overall health.",
        "keywords": ["Balance", "Flexibility", "Energy", "Endurance"]
    },
    {
        "title": "Whole30 Diet",
        "description": "Focuses on whole, unprocessed foods for 30 days to reset metabolism.",
        "icon": "leaf",
        "color": "#27ae60",
        "dietTypes": ["veg", "non-veg", "egg"],
        "category": "Detox",
        "benefits": "Supports detox and boosts metabolism.",
        "keywords": ["Detox", "Metabolism", "Hydration", "Recovery"]
    },
    {
        "title": "Ayurvedic Diet",
        "description": "Based on balancing the body's energies through food choices according to doshas.",
        "icon": "om",
        "color": "#9b59b6",
        "dietTypes": ["veg"],
        "category": "Balance",
        "benefits": "Enhances balance and promotes mental and physical well-being.",
        "keywords": ["Balance", "Energy", "Hydration", "Recovery"]
    },
    {
        "title": "Macrobiotic Diet",
        "description": "Emphasizes whole grains, vegetables, and beans to promote health and longevity.",
        "icon": "wheat",
        "color": "#8e44ad",
        "dietTypes": ["veg"],
        "category": "Immune Support",
        "benefits": "Boosts immune function and supports detox.",
        "keywords": ["Immune Support", "Detox", "Energy", "Endurance"]
    }
];

const workoutPlans = [
    {
        name: "Beginner's Bodyweight Blast",
        description: "A gentle introduction to fitness using only your body weight.",
        ageRating: "All ages",
        difficulty: "Easy",
        keywords: ["Strength", "Flexibility", "Balance", "Core Stability"],
        exercises: [
            "Bodyweight Squats",
            "Push-ups",
            "Plank",
            "Lunges",
            "Glute Bridge"
        ]
    },
    {
        name: "30-Day Strength Builder",
        description: "Progressive strength training program for intermediate fitness enthusiasts.",
        ageRating: "16+",
        difficulty: "Medium",
        keywords: ["Strength", "Muscle Gain", "Power", "Endurance"],
        exercises: [
            "Barbell Squats",
            "Deadlifts",
            "Bench Press",
            "Overhead Press",
            "Pull-ups"
        ]
    },
    {
        name: "High-Intensity Interval Madness",
        description: "Intense cardio workouts to maximize calorie burn and improve endurance.",
        ageRating: "18+",
        difficulty: "Hard",
        keywords: ["Cardio Health", "Weight Loss", "Endurance", "Speed"],
        exercises: [
            "Burpees",
            "Mountain Climbers",
            "Jump Squats",
            "High Knees",
            "Sprints"
        ]
    },
    {
        name: "Yoga Flow for Flexibility",
        description: "Improve flexibility and mindfulness with this yoga-focused plan.",
        ageRating: "All ages",
        difficulty: "Easy",
        keywords: ["Flexibility", "Mobility", "Balance", "Recovery"],
        exercises: [
            "Downward Dog",
            "Child's Pose",
            "Cat-Cow",
            "Warrior II",
            "Cobra Pose"
        ]
    },
    {
        name: "Powerlifting Fundamentals",
        description: "Master the basics of powerlifting with this structured program.",
        ageRating: "16+",
        difficulty: "Medium",
        keywords: ["Strength", "Power", "Performance"],
        exercises: [
            "Deadlifts",
            "Squats",
            "Bench Press",
            "Overhead Press",
            "Barbell Row"
        ]
    },
    {
        name: "Extreme Endurance Challenge",
        description: "Push your limits with this advanced endurance-focused plan.",
        ageRating: "18+",
        difficulty: "Hard",
        keywords: ["Endurance", "Performance", "Mental Toughness"],
        exercises: [
            "Long-Distance Running",
            "Cycling",
            "Rowing",
            "Jump Rope",
            "Plyometrics"
        ]
    },
    {
        name: "Core Strength and Stability",
        description: "Build a strong and stable core to enhance your performance in all exercises.",
        ageRating: "All ages",
        difficulty: "Medium",
        keywords: ["Core Stability", "Strength", "Balance", "Mobility"],
        exercises: [
            "Plank",
            "Russian Twists",
            "Leg Raises",
            "Bicycle Crunches",
            "Superman Holds"
        ]
    },
    {
        name: "Agility and Speed Training",
        description: "Enhance your agility and speed with targeted drills and exercises.",
        ageRating: "16+",
        difficulty: "Medium",
        keywords: ["Speed", "Agility", "Endurance", "Performance"],
        exercises: [
            "Ladder Drills",
            "Cone Drills",
            "Sprint Intervals",
            "Lateral Bounds",
            "Box Jumps"
        ]
    },
    {
        name: "Posture Perfection",
        description: "Improve your posture and spinal alignment with this focused plan.",
        ageRating: "All ages",
        difficulty: "Easy",
        keywords: ["Posture", "Flexibility", "Core Stability", "Mobility"],
        exercises: [
            "Wall Angels",
            "Cat-Cow Stretch",
            "Chin Tucks",
            "Thoracic Rotations",
            "Seated Rows"
        ]
    },
    {
        name: "Detox and Hydration Boost",
        description: "A holistic plan focused on detoxing the body and maintaining hydration.",
        ageRating: "All ages",
        difficulty: "Easy",
        keywords: ["Detox", "Hydration", "Immune Support", "Metabolism", "Recovery"],
        exercises: [
            "Gentle Yoga",
            "Breathing Exercises",
            "Meditation",
            "Light Cardio",
            "Foam Rolling"
        ]
    },
    {
        name: "Post-Workout Recovery Routine",
        description: "A light workout plan designed to aid recovery and improve flexibility after intense sessions.",
        ageRating: "All ages",
        difficulty: "Easy",
        keywords: ["Recovery", "Flexibility", "Mobility", "Hydration"],
        exercises: [
            "Foam Rolling",
            "Gentle Stretching",
            "Hip Flexor Stretch",
            "Child’s Pose",
            "Breathing Exercises"
        ]
    },
    {
        name: "Speed and Agility Drills",
        description: "Short, intense workouts focused on boosting speed and agility.",
        ageRating: "16+",
        difficulty: "Medium",
        keywords: ["Speed", "Agility", "Performance", "Endurance"],
        exercises: [
            "Sprint Intervals",
            "Lateral Shuffles",
            "Cone Drills",
            "Plyometric Jumps",
            "Ladder Drills"
        ]
    },
    {
        name: "Endurance Max Challenge",
        description: "A challenging plan that tests and improves your stamina and endurance.",
        ageRating: "18+",
        difficulty: "Hard",
        keywords: ["Endurance", "Performance", "Strength", "Mental Toughness"],
        exercises: [
            "Long-Distance Running",
            "Cycling",
            "Rowing",
            "Burpees",
            "Jump Rope"
        ]
    },
    {
        name: "Power and Explosiveness",
        description: "Build explosive power and strength with these targeted workouts.",
        ageRating: "16+",
        difficulty: "Medium",
        keywords: ["Power", "Strength", "Core Stability", "Performance"],
        exercises: [
            "Box Jumps",
            "Medicine Ball Slams",
            "Deadlifts",
            "Sprints",
            "Power Cleans"
        ]
    },
    {
        name: "Immunity Boost Plan",
        description: "A holistic approach to boost your immune system through exercise and recovery.",
        ageRating: "All ages",
        difficulty: "Easy",
        keywords: ["Immune Support", "Detox", "Hydration", "Recovery"],
        exercises: [
            "Yoga Flow",
            "Breathing Exercises",
            "Meditation",
            "Light Cardio",
            "Stretching"
        ]
    },
    {
        name: "Core and Stability Mastery",
        description: "A workout focused on building a strong core and enhancing stability.",
        ageRating: "All ages",
        difficulty: "Medium",
        keywords: ["Core Stability", "Balance", "Strength", "Mobility"],
        exercises: [
            "Plank Variations",
            "Russian Twists",
            "Bird-Dog",
            "Side Plank",
            "Leg Raises"
        ]
    },
    {
        name: "Metabolism Booster",
        description: "A high-energy workout designed to speed up your metabolism and increase fat burn.",
        ageRating: "16+",
        difficulty: "Medium",
        keywords: ["Metabolism", "Weight Loss", "Endurance", "Energy"],
        exercises: [
            "Burpees",
            "Jumping Jacks",
            "Mountain Climbers",
            "HIIT Circuits",
            "Sprints"
        ]
    }
];