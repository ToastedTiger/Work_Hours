 // =============================================================================
 // Author:       BM Dierks
 // Created:      2021/05/06
 // Last Edit:    2021/05/06
 // Description:  The intended purpose of this script is to generator random
 //               work hours and Tasks for ASTER because I cant remember the 
 //               hours I worked over the last weeks(time is a weird concept 
 //               right now).
 // 
 //               The Script is currently limited as it will only create tasks 
 //               and hours for the current month and not for a set time period. 
 //               I may fix this in future but most likely not. No real point.
 //
 //               Note that Date object has the following input parameters:
 //               Date(Year, Month, Day, Hour, Min, Sec) where Month is 0-indexed.
 //               To get the current date and time leave all arguments blank.
 //
 //               This is a replica of Work_Hour_Generator.py written in node.js
 //               however for the sake of learning.
 // =============================================================================


const Work = ['AD',   // Analysis/Design
            'M',    // Manufacturing  
            'T',    // Testing
            'PM',   // Project Management
            'O',    // Outreach
            'C',    // Launch Preparation and Campaign
            'DP',   // Data Analysis and Publication
            'SE']   // System Engineering

// Define start and end date
const startDate = new Date(2021, 0, 1,0,0,0) 
const endDate = new Date()                         // Leave arguments blank for today's date
const timeSpan = (endDate-startDate)/(3600000*24)

// Define min and max hours worked
const maxHours = 12
const minHours = 2

// Define max tasks worked per day
const maxTasks = 4

for (var i = 0; i <= timeSpan; i++)
    {
    // Assigns the day and hour vars for each day
    var CurrDate = new Date(startDate.getFullYear(), startDate.getMonth(), i+2)
    var Hours = minHours + Math.round(2 * (maxHours - minHours) * Math.random()) / 2

    // Populate tasks worked on
    var Tasks = []
    var TaskCount = Math.ceil(maxTasks * Math.random())
    for (var j = 0; j<TaskCount; j++)
        Tasks[j] = Work[Math.floor(Math.random() * Work.length)] 
    
        
    // Ensures days without work have no hours
    if (Hours == 0)
        Tasks = []

    // Print Results
    console.log(CurrDate, ":\t", Hours, "\thrs\t\tWorked on: ", Tasks)
    }


// Program Done 
console.log("DONE!!!")