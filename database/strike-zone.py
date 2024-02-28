# Python file that retreives PitchCall, PlateLocHeight, and PlateLocSide from
# CSV file and tracks statistics pertaining to pitch data
# @Author: Jacob Munroe 
# @Version: 2/21/2024

import csv



# Values AU Baseball uses for strike zone
min_plate_side = -0.86
max_plate_side = 0.86
max_plate_height = 3.55
min_plate_height = 1.77



# Returns if the pitch call was a strike or not
def pitchCallResult(pitch_call):
    if (pitch_call == 'StrikeCalled' or pitch_call == "StrikeSwinging" or pitch_call == "FoulBall"):
        return 1
    elif(pitch_call == "InPlay"):
        return 2
    else:
        return 0
    
# Returns if the pitch was within the defined "strike zone"
def strikeZoneResult(z_pos, x_pos):
    if((z_pos < max_plate_height and z_pos > min_plate_height) or abs(x_pos) < max_plate_side):
        return 1 # 1 for a strike
    else:
        return 0 # 0 for a ball


# Function that will read from a CSV file, report each PitchCall and if the
# pitch was in the AU strike zone.
#
# Prints chases out of zone, balls called strikes, and strikes called balls.
# Returns array in this order Strikes, Balls, 
def readCSVZone(file_name):
    # Numbers to be incremented if true
    ball_called_strike = 0
    strike_called_ball = 0
    chases = 0

    # Reading CSV file
    with open(file_name) as csv_file:

        # For reading CSV file
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0 # Handling first line case

        # total number of pitches
        total_pitches = 0

        # Numbers to be incremented if true
        strike_called = 0
        strike_swinging = 0
        foul_balls = 0
        ball_called = 0
        in_play = 0
        strike_called_legit = 0
        ball_called_legit = 0
        ball_called_strike = 0
        strike_called_ball = 0
        chases = 0

        # Going through each row
        for row in csv_reader:
            if line_count == 0:
                # print(f'Column names are {row[21]}, {row[40]} and {row[41]}') # Column Names
                line_count += 1
            else:
                # Values from CSV file
                z_pos = float(row[40])
                x_pos = float(row[41])
                pitch_call = row[21]

                # increment pitch
                total_pitches += 1

                # Getting total number of Strikes Called
                if (pitch_call == "StrikeCalled"):
                    strike_called += 1

                # Getting total number of Swinging Strikes
                if (pitch_call == "StrikeSwinging"):
                    strike_swinging += 1

                # Getting total number of Foul Balls
                if (pitch_call == "FoulBall" or pitch_call == "FoulBallNotFieldable"):
                    foul_balls += 1

                # Getting total number of Balls called
                if (pitch_call == "BallCalled"):
                    ball_called += 1

                # Total number of balls in play
                if (pitch_call == "InPlay"):
                    in_play += 1

                # Checking if pitch was a strike in the zone
                if(strikeZoneResult(z_pos, x_pos) == 1):
                    # print(pitch_call + " in the zone.")
                    # Checking if it was a strike in the zone
                    if(pitch_call == "StrikeCalled"):
                        strike_called_legit += 1
                    # Checking if the strike was CALLED a ball
                    if(pitch_call == "BallCalled"):
                        strike_called_ball += 1
                # Else pitch is a ball
                else: 
                    # print(pitch_call + " out of the zone.")
                    # Checking if ball was called out of zone
                    if(pitch_call == "BallCalled"):
                        ball_called_legit += 1
                    # Checking if the ball was CALLED a strike
                    if(pitch_call == "StrikeCalled"):
                        ball_called_strike += 1
                    # Checking for swings outside of zone
                    if(pitch_call == "StrikeSwinging" or "FoulBall" or "InPlay"):
                        chases += 1


        # Printing output
        print(f"Total number of pitches: {total_pitches}")
        print(f"Total strikes: {strike_called + strike_swinging}")
        print(f"Swinging Strikes: {strike_swinging}")
        print(f"Strikes Called: {strike_called}")
        print(f"Total Foul Balls: {foul_balls}")
        print(f"Total Balls Called: {ball_called}")
        print(f"Total In Play: {in_play}")
        print(f"Strikes Called In Zone: {strike_called_legit}")
        print(f"Balls Called Out of Zone: {ball_called_legit}")
        print(f"Strikes called balls: {strike_called_ball}")
        print(f"Balls called strikes: {ball_called_strike}")
        print(f"Chases out of zone: {chases}")
        
        # Setting values for return array
        return {total_pitches, strike_called + strike_swinging, strike_swinging, strike_called,
                    foul_balls, ball_called, in_play, strike_called_legit, ball_called_legit, 
                    strike_called_ball, ball_called_strike, chases}



#readCSVZone('2023_11_10_14_48_14_TM.csv')
readCSVZone('20240216-PlainsmanPark-1.csv')