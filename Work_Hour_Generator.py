# =============================================================================
# Author:       BM Dierks
# Created:      2021/04/13
# Last Edit:    2021/04/13
# Description:  The intended purpose of this script is to generator random
#               work hours and Tasks for ASTER because I cant remember the 
#               hours I worked over the last weeks(time is a weird concept 
#               right now).
#
#               The Script is currently limited as it will only create tasks 
#               and hours for the current month and not for a set time period. 
#               I may fix this in future but most likely not. No real point.
# =============================================================================
import random as rd
import datetime as dt
import math

Work = ['AD',   # Analysis/Design
        'M',    # Manufacturing  
        'T',    # Testing
        'PM',   # Project Management
        'O',    # Outreach
        'C',    # Launch Preparation and Campaign
        'DP',   # Data Analysis and Publication
        'SE']   # System Engineering

# Todays's Date
td = dt.datetime.now().date()

# Define the max and min hours worked
maxHours = 12
minHours = 0

# Define the max Task worked on
maxTasks = 4

for i in range(td.day):
    # assigns the day and hour variables for each day 
    CurrDate = dt.datetime(td.year, td.month, i+1).date()
    Hours = minHours + round(2 * (maxHours - minHours) * rd.random(),0) / 2
    
    # Populate tasks worked on
    Tasks = {}
    TaskCount = math.ceil((maxTasks) * rd.random())
    for j in range(TaskCount):
        Tasks[j] = Work[int(len(Work) * rd.random())]
    
    # Ensures that there are no no tasks on days where no work was done
    if (Hours == 0):
        Tasks = {}
        
    print(CurrDate, ":\t", Hours, "hrs \t\tWorked on: ", list(Tasks.values()))
    
    
# Program Done
print ("DONE!!!") 