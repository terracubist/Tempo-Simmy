// ================ vars ===================================

var numSims = 100;
var startStage = "2-1";
var startingHP = [
    {"Player": 1, "HP": 100},
    {"Player": 2, "HP": 100},
    {"Player": 3, "HP": 100},
    {"Player": 4, "HP": 100},
    {"Player": 5, "HP": 100},
    {"Player": 6, "HP": 100},
    {"Player": 7, "HP": 100},
    {"Player": 8, "HP": 100}
]
var maxLevel = [
    {'stage':'2-1', 'level': 4},
    {'stage':'2-2', 'level': 4},
    {'stage':'2-3', 'level': 5},
    {'stage':'2-5', 'level': 5},
    {'stage':'2-6', 'level': 6},
    {'stage':'2-7', 'level': 6},
    {'stage':'3-2', 'level': 7},
    {'stage':'3-3', 'level': 7},
    {'stage':'3-5', 'level': 7},
    {'stage':'3-6', 'level': 7},
    {'stage':'3-7', 'level': 8},
    {'stage':'4-1', 'level': 8},
    {'stage':'4-2', 'level': 9},
    {'stage':'4-3', 'level': 9},
    {'stage':'4-5', 'level': 10},
    {'stage':'4-6', 'level': 10},
    {'stage':'4-7', 'level': 10},
    {'stage':'5-1', 'level': 10},
    {'stage':'5-2', 'level': 10},
    {'stage':'5-3', 'level': 10},
    {'stage':'5-5', 'level': 10},
    {'stage':'5-6', 'level': 10},
    {'stage':'5-7', 'level': 10},
    {'stage':'6-1', 'level': 10},
    {'stage':'6-2', 'level': 10},
    {'stage':'6-3', 'level': 10},
    {'stage':'6-5', 'level': 10},
    {'stage':'6-6', 'level': 10},
    {'stage':'6-7', 'level': 10},
    {'stage':'7-1', 'level': 10},
    {'stage':'7-2', 'level': 10},
    {'stage':'7-3', 'level': 10},
    {'stage':'7-5', 'level': 10},
    {'stage':'7-6', 'level': 10}
]
var matchups = [
  {"row": "Vanilla",  "Vanilla": 1.0, "Rock": 1.0,  "Paper": 1.0, "Scissors": 1.0},
  {"row": "Rock",     "Vanilla": "",  "Rock": 1.0,  "Paper": 0.5, "Scissors": 2.0},
  {"row": "Paper",    "Vanilla": "",  "Rock": "",   "Paper": 1.0, "Scissors": 0.5},
  {"row": "Scissors", "Vanilla": "",  "Rock": "",   "Paper": "",  "Scissors": 1.0},
]
var stageDamage = [
    {'stage':'2', 'damage': 2},
    {'stage':'3', 'damage': 6},
    {'stage':'4', 'damage': 7},
    {'stage':'5', 'damage': 10},
    {'stage':'6', 'damage': 12},
    {'stage':'7', 'damage': 17},  
]

// non-series profile data
var playerProfilesMetadata = {
  "Player 1": {"comp_type": "Vanilla", "defn": "User entry"},
  "Player 2": {"comp_type": "Vanilla", "defn": "User entry"},
  "Player 3": {"comp_type": "Vanilla", "defn": "User entry"},
  "Player 4": {"comp_type": "Vanilla", "defn": "User entry"},
  "Player 5": {"comp_type": "Vanilla", "defn": "User entry"},
  "Player 6": {"comp_type": "Vanilla", "defn": "User entry"},
  "Player 7": {"comp_type": "Vanilla", "defn": "User entry"},
  "Player 8": {"comp_type": "Vanilla", "defn": "User entry"},
  "Standard fast 8": {"comp_type": "Vanilla", "defn": "User entry"},
  "Standard fast 9": {"comp_type": "Vanilla", "defn": "User entry"},
  "$1 RR": {"comp_type": "Vanilla", "defn": "User entry"},
  "$2 RR": {"comp_type": "Vanilla", "defn": "User entry"},
  "$3 RR": {"comp_type": "Vanilla", "defn": "User entry"},
  "Tempo": {"comp_type": "Vanilla", "defn": "User entry"},
  "Loss streak": {"comp_type": "Vanilla", "defn": "User entry"},
}

// strength series definition
var playerProfilesSeries = {
    "Player 1": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ],
    "Player 2": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ],
    "Player 3": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ],
    "Player 4": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ],
    "Player 5": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ],
    "Player 6": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ],
    "Player 7": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ],
    "Player 8": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ],
    "Standard fast 8": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ],
    "Standard fast 9": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ],
    "$1 RR": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ],
    "$2 RR": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ],
    "$3 RR": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ],
    "Tempo": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ],
    "Loss streak": [
        {'stage': '2-1', 'strength': 35, 'lambda': ''},
        {'stage': '2-2', 'strength': 40, 'lambda': ''},
        {'stage': '2-3', 'strength': 45, 'lambda': ''},
        {'stage': '2-5', 'strength': 50, 'lambda': ''},
        {'stage': '2-6', 'strength': 55, 'lambda': ''},
        {'stage': '2-7', 'strength': 60, 'lambda': ''},
        {'stage': '3-1', 'strength': 65, 'lambda': ''},
        {'stage': '3-2', 'strength': 70, 'lambda': ''},
        {'stage': '3-3', 'strength': 75, 'lambda': ''},
        {'stage': '3-5', 'strength': 80, 'lambda': ''},
        {'stage': '3-6', 'strength': 85, 'lambda': ''},
        {'stage': '3-7', 'strength': 90, 'lambda': ''},
        {'stage': '4-1', 'strength': 95, 'lambda': ''},
        {'stage': '4-2', 'strength': 100, 'lambda': ''},
        {'stage': '4-3', 'strength': 105, 'lambda': ''},
        {'stage': '4-5', 'strength': 110, 'lambda': ''},
        {'stage': '4-6', 'strength': 115, 'lambda': ''},
        {'stage': '4-7', 'strength': 120, 'lambda': ''},
        {'stage': '5-1', 'strength': 125, 'lambda': ''},
        {'stage': '5-2', 'strength': 130, 'lambda': ''},
        {'stage': '5-3', 'strength': 135, 'lambda': ''},
        {'stage': '5-5', 'strength': 140, 'lambda': ''},
        {'stage': '5-6', 'strength': 145, 'lambda': ''},
        {'stage': '5-7', 'strength': 150, 'lambda': ''},
        {'stage': '6-1', 'strength': 155, 'lambda': ''},
        {'stage': '6-2', 'strength': 160, 'lambda': ''},
        {'stage': '6-3', 'strength': 165, 'lambda': ''},
        {'stage': '6-5', 'strength': 170, 'lambda': ''},
        {'stage': '6-6', 'strength': 175, 'lambda': ''},
        {'stage': '6-7', 'strength': 180, 'lambda': ''},
        {'stage': '7-1', 'strength': 185, 'lambda': ''},
        {'stage': '7-2', 'strength': 190, 'lambda': ''},
        {'stage': '7-3', 'strength': 195, 'lambda': ''},
        {'stage': '7-5', 'strength': 200, 'lambda': ''},
        {'stage': '7-6', 'strength': 205, 'lambda': ''}
    ]
};

// ================ funcs ===================================

// tab handling
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  if (tabName === "Simulation Settings" || tabName === "Player Profiles") {
    document.getElementById(tabName).style.display = "flex";
  } else {
    document.getElementById(tabName).style.display = "block";
  }
  evt.currentTarget.className += " active";
}

function n_sims_dropdown_cb(event) {
    numSims = parseFloat(event.target.value);
}

function start_stage_dropdown_cb(event) {
    startStage = event.target.value;
}

function start_HP_cb(event) {
    if (event.target.contentEditable === 'true') {
        const newValue = event.target.innerText.trim();
        const rowLabel = event.target.parentElement.cells[0].innerText; // e.g., "2-1"
        
        // Strength
        const num = parseInt(newValue);
        if (isNaN(num) || num < 0) {
            alert("Please enter a valid number for HP (non-negative integers only)");
            event.target.innerText = "0"; // Reset or handle error
        }

        startingHP.find(p => p.Player === parseInt(rowLabel))["HP"] = num;
    }
}

function max_level_cb(event) {
    if (event.target.contentEditable === 'true') {
        const newValue = event.target.innerText.trim();
        const rowLabel = event.target.parentElement.cells[0].innerText; // e.g., "2-1"
        
        // Strength
        const num = parseInt(newValue);
        if (isNaN(num) || num < 3 || num > 10) {
            alert("Please enter a valid number for Level (positive integers only)");
            event.target.innerText = "3"; // Reset or handle error
        }

        maxLevel.find(p => p.stage === rowLabel)["level"] = num;
    }
}

function matchups_table_cb(event) {
    if (event.target.contentEditable === 'true') {
        const newValue = event.target.innerText.trim();
        const rowLabel = event.target.closest('tr').cells[0].innerText; // e.g., "2-1"
        const colIndex = event.target.parentElement.cellIndex;
        const colName = ["Vanilla", "Rock", "Paper", "Scissors"][colIndex-1];
        
        // Strength
        const num = parseFloat(newValue);
        if (isNaN(num) || num < 0) {
            alert("Please enter a valid number for this matchup multiplier (non-negative floats only)");
            event.target.innerText = "1.0"; // Reset or handle error
        }

        matchups.find(p => p.row === rowLabel)[colName] = num;
    }
}

function stage_damage_table_cb(event) {
    if (event.target.contentEditable === 'true') {
        const newValue = event.target.innerText.trim();
        const rowLabel = event.target.parentElement.cells[0].innerText; // e.g., "2-1"
        
        // Strength
        const num = parseInt(newValue);
        if (isNaN(num) || num < 0) {
            alert("Please enter a valid number for stage damage (non-negative integers only)");
            event.target.innerText = "0"; // Reset or handle error
        }

        stageDamage.find(p => p.stage === rowLabel)["damage"] = num;
    }
}

// live handle profile data
function updateStrTable(profileName) {
    const data = playerProfilesSeries[profileName];
    const tbody = document.querySelector("#edit_str_table");
    tbody.innerHTML = ""; // Clear existing rows

    data.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.stage}</td>
            <td contenteditable="true" class="unlocked-cell">${row.strength}</td>
            <td contenteditable="true" class="unlocked-cell">${row.lambda}</td>
        `;
        tbody.appendChild(tr);
    });
}

function prof_sel_dropdown_cb(event) {
    const comp_type_dropdown = document.querySelector('#comp_type');
    const profile_src_dropdown = document.querySelector('#profile_src');
    const value = event.target.value;

    comp_type_dropdown.value = playerProfilesMetadata[value]["comp_type"];
    profile_src_dropdown.value = playerProfilesMetadata[value]["defn"];
    if (profile_src_dropdown.value != "User entry") {
        playerProfilesSeries[value] = structuredClone(playerProfilesSeries[profile_src_dropdown.value]);
    }
    updateStrTable(value);
}

function comp_type_dropdown_cb(event) {
    const prof_sel_dropdown = document.querySelector('#prof_sel');
    const value = event.target.value;

    playerProfilesMetadata[prof_sel_dropdown.value]["comp_type"] = value;  
}

function profile_src_dropdown_cb(event) {
    const prof_sel_dropdown = document.querySelector('#prof_sel');
    const profileName = prof_sel_dropdown.value;
    const value = event.target.value;

    playerProfilesMetadata[profileName]["defn"] = value;
    if (value != "User entry") {
        playerProfilesSeries[profileName] = structuredClone(playerProfilesSeries[value]);
        updateStrTable(profileName);
    }
}

function str_table_cb(event){
    if (event.target.contentEditable === 'true') {
        const newValue = event.target.innerText.trim();
        const rowLabel = event.target.parentElement.cells[0].innerText; // e.g., "2-1"
        const colIndex = event.target.cellIndex;
        const prof_sel_dropdown = document.querySelector('#prof_sel');
        var profileName = prof_sel_dropdown.value;

        var headerName;
        if (colIndex === 1) {
            // Strength
            const num = parseInt(innerText);
            if (isNaN(num)) {
                alert("Please enter a valid number for Strength (integers only)");
                event.target.innerText = "0"; // Reset or handle error
            }
            headerName = "strength";
        } else {
            headerName = "lambda";
        }
        
        playerProfilesSeries[profileName].find(p => p.stage === rowLabel)[headerName] = innerText;
    }
}

// set up backend
async function startPyodideEnv() {

    const pyodide = await loadPyodide();
    window.pyodide = pyodide;

    // Set up a custom batched handler to capture print output
    const outputArray = [];
    pyodide.setStdout({
      batched: (message) => {
        outputArray.push(message);
      }
    });

    // load dependencies
    const status_indicator = document.getElementById("load-status");
    await pyodide.loadPackage(["pandas", "numpy", "scipy", "networkx"], (message) => {
          // 'message' often contains strings like "Loading..." or progress data
          console.log("Loading packages...");
      }
    ).then(() => {
        status_indicator.textContent = "Finished loading.";
    });

    pyodide.runPython(await (await fetch("./pyodide_test.py")).text())

}

// ================ script ===================================

// set up home page
document.getElementById("defaultOpen").click();

// ================ listener init ===================================

// numSims saving
const n_sims_dropdown = document.querySelector('#n_sims');
n_sims_dropdown.addEventListener('change', (event) => {n_sims_dropdown_cb(event);});

// startStage saving
const start_stage_dropdown = document.querySelector('#start_stage');
start_stage_dropdown.addEventListener('change', (event) => {start_stage_dropdown_cb(event);});

// startingHP saving
const start_HP = document.querySelector('#start_HP');
start_HP.addEventListener('blur', (event) => {start_HP_cb(event);}, true);

// maxLevel saving
const max_level = document.querySelector('#max_level');
max_level.addEventListener('blur', (event) => {max_level_cb(event);}, true);

// matchups saving
const matchups_table = document.querySelector('#matchups_table');
matchups_table.addEventListener('blur', (event) => {matchups_table_cb(event);}, true);

// stageDamage saving
const stage_damage_table = document.querySelector('#stage_damage_table');
stage_damage_table.addEventListener('blur', (event) => {stage_damage_table_cb(event);}, true);

// profile select dropdown change
const prof_sel_dropdown = document.querySelector('#prof_sel');
prof_sel_dropdown.addEventListener('change', (event) => {prof_sel_dropdown_cb(event);});
prof_sel_dropdown.value = "Player 1";
prof_sel_dropdown.dispatchEvent(new Event('change', { bubbles: true })); // initialize on player 1

// comp type saving
const comp_type_dropdown = document.querySelector('#comp_type');
comp_type_dropdown.addEventListener('change', (event) => {comp_type_dropdown_cb(event);});

// profile source saving
const profile_src_dropdown = document.querySelector('#profile_src');
profile_src_dropdown.addEventListener('change', (event) => {profile_src_dropdown_cb(event);});

// profile edit saving
const str_table = document.querySelector('#str_table');
str_table.addEventListener('blur', (event) => {str_table_cb(event);}, true); // The 'true' is important here to capture the blur event correctly on parent

// ==============================================================

// set up python env

// startPyodideEnv(); //disabling while figuring out html/css
// console.log("Captured output:", outputArray.join('\n'));

