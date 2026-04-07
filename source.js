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
  "Other": {"comp_type": "Vanilla", "defn": "User entry"}
}

// strength series definition
var playerProfilesSeries = {
    "Player 1": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "Player 2": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "Player 3": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "Player 4": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "Player 5": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "Player 6": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "Player 7": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "Player 8": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "Standard fast 8": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "Standard fast 9": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "$1 RR": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "$2 RR": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "$3 RR": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "Tempo": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "Loss streak": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
    ],
    "Other": [
        {'stage': '2-1', 'strength': 16.2, 'lambda': ''},
        {'stage': '2-2', 'strength': 16.0, 'lambda': ''},
        {'stage': '2-3', 'strength': 19.3, 'lambda': ''},
        {'stage': '2-5', 'strength': 26.3, 'lambda': ''},
        {'stage': '2-6', 'strength': 34.8, 'lambda': ''},
        {'stage': '2-7', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-1', 'strength': 35.7, 'lambda': ''},
        {'stage': '3-2', 'strength': 44.5, 'lambda': ''},
        {'stage': '3-3', 'strength': 50.3, 'lambda': ''},
        {'stage': '3-5', 'strength': 59.3, 'lambda': ''},
        {'stage': '3-6', 'strength': 62.4, 'lambda': ''},
        {'stage': '3-7', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-1', 'strength': 63.1, 'lambda': ''},
        {'stage': '4-2', 'strength': 70.2, 'lambda': ''},
        {'stage': '4-3', 'strength': 78.3, 'lambda': ''},
        {'stage': '4-5', 'strength': 80.7, 'lambda': ''},
        {'stage': '4-6', 'strength': 83.5, 'lambda': ''},
        {'stage': '4-7', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-1', 'strength': 84.2, 'lambda': ''},
        {'stage': '5-2', 'strength': 89.6, 'lambda': ''},
        {'stage': '5-3', 'strength': 93.4, 'lambda': ''},
        {'stage': '5-5', 'strength': 95.1, 'lambda': ''},
        {'stage': '5-6', 'strength': 95.7, 'lambda': ''},
        {'stage': '5-7', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-1', 'strength': 95.7, 'lambda': ''},
        {'stage': '6-2', 'strength': 96.5, 'lambda': ''},
        {'stage': '6-3', 'strength': 99.8, 'lambda': ''},
        {'stage': '6-5', 'strength': 100.0, 'lambda': ''},
        {'stage': '6-6', 'strength': 101.0, 'lambda': ''},
        {'stage': '6-7', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-1', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-2', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-3', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-5', 'strength': 101.0, 'lambda': ''},
        {'stage': '7-6', 'strength': 101.0, 'lambda': ''}
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

    // tab formatting
    if (tabName === "Simulation Settings" || tabName === "Player Profiles") {
        document.getElementById(tabName).style.display = "flex";
    } else {
        document.getElementById(tabName).style.display = "block";
    }
    evt.currentTarget.className += " active";
    if (tabName === "Player Profiles") {
        window.dispatchEvent(new Event('resize')); // need to manually trigger to visually work w/ chrome devtools?
    }

    // per-tab processing
    if (tabName === "Simulation Settings") {
        // fix dropdowns 
        document.querySelector('#n_sims').value = (numSims >= 1e4) 
                                                  ? numSims.toExponential().replace('+', '').toUpperCase() 
                                                  : numSims.toString();
        document.querySelector('#start_stage').value = startStage;

        // fix tables
        Array.from(document.querySelector('#start_HP').children[0].rows).forEach((row, index) => {
            const playerData = startingHP.find(p => p.Player === (index));
            if (playerData && playerData.HP !== undefined) {
                row.cells[1].innerText = playerData.HP;
            }
        })
        Array.from(document.querySelector('#max_level').children[0].rows).forEach((row, index) => {
            const stageData = maxLevel.find(p => p.stage === (row.cells[0].innerText));
            if (stageData && stageData.level !== undefined) {
                row.cells[1].innerText = stageData.level;
            }
        })
        Array.from(document.querySelector('#matchups_table').children[0].rows).forEach((row, index) => {
            const matchupData = matchups.find(p => p.row === (row.cells[0].innerText));
            if (matchupData !== undefined) {
                row.cells[1].innerText = matchupData.Vanilla;
                row.cells[2].innerText = matchupData.Rock;
                row.cells[3].innerText = matchupData.Paper;
                row.cells[4].innerText = matchupData.Scissors;
            }
        })
        Array.from(document.querySelector('#stage_damage_table').children[0].rows).forEach((row, index) => {
            const stageData = stageDamage.find(p => p.stage === (row.cells[0].innerText));
            if (stageData && stageData.damage !== undefined) {
                row.cells[1].innerText = stageData.damage;
            }
        })
    } else if (tabName === "Player Profiles") {
        // fix dropdowns
        var profileName = document.querySelector('#prof_sel').value;
        document.querySelector('#comp_type').value = playerProfilesMetadata[profileName]["comp_type"];
        document.querySelector('#profile_src').value = playerProfilesMetadata[profileName]["defn"];

        // fix tables and graphs
        updateStrTable()
        allProfilesGraphHandler("init");
        vsLobbyGraphHandler("init");
    }
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
            num = 0;
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
            alert("Please enter a valid number for Level ([3, 10] only)");
            event.target.innerText = "3"; // Reset or handle error
            num = 3;
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
            num = 1.0;
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
            num = 0;
        }

        stageDamage.find(p => p.stage === rowLabel)["damage"] = num;
    }
}

// live handle profile data
function updateStrTable() {
    const profileName = document.querySelector('#prof_sel').value;
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
    if (profile_src_dropdown.value != "User entry") { // refresh if src changed
        playerProfilesSeries[value] = structuredClone(playerProfilesSeries[profile_src_dropdown.value]);
    }
    updateStrTable();
    vsLobbyGraphHandler("update");

    if (!value.includes("Player ")) {
        profile_src_dropdown.disabled = true; // presets are by definition User entry
    } else {
        profile_src_dropdown.disabled = false;
    }
}

function comp_type_dropdown_cb(event) {
    const prof_sel_dropdown = document.querySelector('#prof_sel');
    const value = event.target.value;

    playerProfilesMetadata[prof_sel_dropdown.value]["comp_type"] = value;
    vsLobbyGraphHandler("update")
}

function profile_src_dropdown_cb(event) {
    const prof_sel_dropdown = document.querySelector('#prof_sel');
    const profileName = prof_sel_dropdown.value;
    const value = event.target.value;

    playerProfilesMetadata[profileName]["defn"] = value;
    if (value != "User entry") {
        playerProfilesSeries[profileName] = structuredClone(playerProfilesSeries[value]);
        updateStrTable();
        allProfilesGraphHandler("update");
        vsLobbyGraphHandler("update");
    }
}

function str_table_cb(event){
    if (event.target.contentEditable === 'true') {
        const newValue = event.target.innerText.trim();
        const rowLabel = event.target.parentElement.cells[0].innerText; // e.g., "2-1"
        const colIndex = event.target.cellIndex;
        const prof_sel_dropdown = document.querySelector('#prof_sel');
        var profileName = prof_sel_dropdown.value;
        var val_out;

        var headerName;
        if (colIndex === 1) {
            // Strength
            const num = parseFloat(newValue);
            if (isNaN(num) || num < 0) {
                alert("Please enter a valid number for Strength (non-negative floats only)");
                event.target.innerText = "0"; // Reset or handle error
                val_out = 0;
            } else {
                val_out = num;
            }
            headerName = "strength";
        } else {
            val_out = newValue;
            headerName = "lambda";
        }
        
        // write out values
        playerProfilesSeries[profileName].find(p => p.stage === rowLabel)[headerName] = val_out;
        allProfilesGraphHandler("update");
        vsLobbyGraphHandler("update");
        
        // update src to stop referencing other series
        playerProfilesMetadata[profileName]["defn"] = "User entry";
        const profile_src_dropdown = document.querySelector('#profile_src');
        profile_src_dropdown.value = "User entry";
    }
}

// plot handling
function allProfilesGraphHandler(type){
    const allProfilesGraph = document.getElementById('all_profiles_graph');

    var data = [];
    const x_vals = playerProfilesSeries["Player 1"].map(x => x.stage);
    for (profileName in playerProfilesSeries) {
        var series = {
            x: x_vals,
            y: playerProfilesSeries[profileName].map(x => x.strength),
            type: 'scatter',
            name: profileName
        };
        data.push(series);
    }

    var layout = {
        title: {text: 'Strengths (all profiles)'},
        margin: {
          t: 40,          // Reduces default 100px top margin
          l: 50,          // Tightens left side
          r: 20,          // Tightens right side
          b: 40           // Tightens bottom side
        },
        xaxis: {
          automargin: true,
          title: {
            text: 'Stage',
            standoff: 10  // Reduces space between ticks and title
          },
          tickangle: 270
        },
        yaxis: {
          automargin: true,
          title: {
            text: 'Board strength',
            standoff: 10  // Reduces space between ticks and title
          },
          range: [0, 110]
        }
    };
    var config = {
        responsive:true // maybe disable if performance issues
    };

    if (type === "init") {
        Plotly.newPlot( allProfilesGraph, data, layout, config );
    } else {
        Plotly.react( allProfilesGraph, data, layout, config );
    }
}

// zero error checking quick version solely for plotting
function computeWinrate(str1, str2, type1, type2) {
    var matchup_mult = matchups.find(x => x.row === type1)[type2];
    if (matchup_mult === "") {
        // triangular matrix, check opposite entry
        matchup_mult = matchups.find(x => x.row === type2)[type1];
        str2 = str2.map(x => x*matchup_mult);
    } else {
        str1 = str1.map(x => x*matchup_mult); // matchup mult is multipler on your odds, not your winrate
    }
    return str1.map((x, i) => x/(x+str2[i]));
}

function vsLobbyGraphHandler(type){
    const profileVsLobby = document.getElementById('profile_vs_lobby');
    const prof_sel_dropdown = document.querySelector('#prof_sel');
    const targetProfile = prof_sel_dropdown.value;
    const str1 = playerProfilesSeries[targetProfile].map(x => x.strength);
    const type1 = playerProfilesMetadata[targetProfile]["comp_type"];

    var data = [];
    const x_vals = playerProfilesSeries["Player 1"].map(x => x.stage);
    for (profileName in playerProfilesSeries) {
        if (profileName != targetProfile) {
            var str2 = playerProfilesSeries[profileName].map(x => x.strength);
            const type2 = playerProfilesMetadata[profileName]["comp_type"];
            var y_vals = computeWinrate(str1, str2, type1, type2);

            var series = {
                x: x_vals,
                y: y_vals,
                type: 'scatter',
                name: profileName
            };
            data.push(series);
        }
    }

    var layout = {
        title: {text: `Winrate vs all others (${targetProfile})`},
        margin: {
          t: 40,          // Reduces default 100px top margin
          l: 50,          // Tightens left side
          r: 20,          // Tightens right side
          b: 40           // Tightens bottom side
        },
        xaxis: {
          automargin: true,
          title: {
            text: 'Stage',
            standoff: 10  // Reduces space between ticks and title
          },
          tickangle: 270
        },
        yaxis: {
          automargin: true,
          title: {
            text: 'Win %',
            standoff: 10  // Reduces space between ticks and title
          },
          tickformat: '.0%',
          range: [0, 1.0],
          dtick: 0.1
        }
    };
    var config = {
        responsive:true // maybe disable if performance issues
    };

    if (type === "init") {
        Plotly.newPlot( profileVsLobby, data, layout, config );
    } else {
        Plotly.react( profileVsLobby, data, layout, config );
    }
}

function import_file_cb(event) {
    const file = event.target.files[0];
    if (!file) {console.log("No file selected.");return;}

    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result);
        // console.log('Successfully imported JSON:', jsonData);
        
        // update vars
        numSims = jsonData["numSims"];
        startStage = jsonData["startStage"]
        startingHP = jsonData["startingHP"];
        maxLevel = jsonData["maxLevel"];
        matchups = jsonData["matchups"];
        stageDamage = jsonData["stageDamage"];
        playerProfilesMetadata = jsonData["playerProfilesMetadata"];
        playerProfilesSeries = jsonData["playerProfilesSeries"];
        
      } catch (error) {
        alert("Error: The file is not a valid JSON format.");
      }
    };

    reader.readAsText(file);
}

function export_button_cb(event) {
    var data = ({
                    "numSims" : numSims,
                    "startStage" : startStage,
                    "startingHP" : startingHP,
                    "maxLevel" : maxLevel,
                    "matchups" : matchups,
                    "stageDamage" : stageDamage,
                    "playerProfilesMetadata" : playerProfilesMetadata,
                    "playerProfilesSeries" : playerProfilesSeries
                });
    var output_str = JSON.stringify(data);

    const blob = new Blob([output_str], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.setAttribute('download', 'tempo_simmy_settings.json');
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);

}

// set up backend
async function startPyodideEnv() {

    // set up status messages
    const status_indicator = document.getElementById("load-status");
    status_indicator.innerText = "Loading simulation environment...";

    const pyodide = await loadPyodide();
    window.pyodide = pyodide;
    status_indicator.innerText += "Done.\nLoading dependencies...";

    // Set up a custom batched handler to capture print output
    const outputArray = [];
    pyodide.setStdout({
      batched: (message) => {
        outputArray.push(message);
      }
    });

    // load dependencies
    await pyodide.loadPackage(["pandas", "numpy", "scipy", "networkx"], (message) => {
          // 'message' often contains strings like "Loading..." or progress data
          console.log("Loading packages...");
      }
    ).then(() => {
        status_indicator.innerText += "Done.\nLoading Monte Carlo logic...";
    });

    pyodide.runPython(await (await fetch("./lobby_sim.py")).text())
    status_indicator.innerText += "Done.";

    console.log("Captured output:", outputArray.join('\n'));

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

// import settings
const import_button = document.querySelector('#import_btn');
import_button.addEventListener('click', (event) => {document.getElementById('json_import_input').click();});
const fileInput = document.getElementById('json_import_input');
fileInput.addEventListener('change', (event) => {import_file_cb(event);});

// export settings
const export_button = document.querySelector('#export_btn');
export_button.addEventListener('click', (event) => {export_button_cb(event);});

// ================ graphing init ===================================
allProfilesGraphHandler("init");
vsLobbyGraphHandler("init");

// ================ set up python env ===================================

startPyodideEnv(); //disabling while figuring out html/css
