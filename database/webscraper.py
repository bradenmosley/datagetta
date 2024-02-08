import time
import requests
import os

from bs4 import BeautifulSoup

from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException


GLOBAL_URL = "https://www.baseball-reference.com"

CONFERENCES = [
    # Power 5
    'Southeastern',
    'Atlantic Coast',
    'Big 12',
    'Big Ten',
    'Pac-12',
    # Group of 5
    'American Athletic',
    'C-USA',
    'Mid-American',
    'Mountain West',
    'Sun Belt',
    # Other
    'Atlantic 10',
    'Big East',
    'Big West',
    'Big South',
    'Colonial',
    'America East',
    'Atlantic Sun',
    'Horizon',
    'Metro Atlantic',
    'Ivy',
    'Northeast',
    'Missouri Valley',
    'Ohio Valley',
    'Patriot',
    'Southern Conf',
    'Southland',
    'Southwestern Conf',
    'Summit',
    'West Coast Conf',
    'Western Athletic',
]

YEAR = "2023"

BROSWER = None

def web_scraper():
    # Scrapes all players from D1 teams from the given year
    url = GLOBAL_URL + "/register/league.cgi?group=College&YEAR=" + YEAR

    # Gets the main page
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    table = soup.find('table', id='league_batting')

    with open('players.md', 'w') as f:
        f.write('')

    for conference in CONFERENCES:
        with open('players.md', 'a') as f:
            f.write('# ' + conference + '\n')

        # Gets the conference page
        conf = table.find('a', string=conference)
        conf_url = GLOBAL_URL + conf.attrs['href']
        BROSWER.get(conf_url)

        # Waits for the page to load from the javascript
        WebDriverWait(BROSWER, 10).until(ec.presence_of_element_located((By.ID, 'regular_season')))

        # Gets the table of teams from the conference
        conf_soup = BeautifulSoup(BROSWER.page_source, 'html.parser')
        conf_table = conf_soup.find('table', id='regular_season')
        teams = conf_table.find_all('a')

        for team in teams:
            team_url = GLOBAL_URL + team.attrs['href']
            try:
                BROSWER.get(team_url)
                team_soup = BeautifulSoup(BROSWER.page_source, 'html.parser')

                WebDriverWait(BROSWER, 10).until(ec.presence_of_element_located((By.ID, 'standard_roster')))

                # Gets the table of players from the team
                team_table = team_soup.find('table', id='standard_roster')
                all_a = team_table.find_all('a')

                # Writes the players to the file
                with open('players.md', 'a') as f:
                    f.write('## ' + team.text + '\n')

                    for a in all_a:
                        f.write("- " + a.text + '\n')
            
            except TimeoutException:
                print('TimeoutException')
                BROSWER.quit()

    BROSWER.quit()


if __name__ == '__main__':
    try:
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')
        options.add_argument('--log-level=3')

        BROSWER = webdriver.Chrome(options=options)
        web_scraper()
        
    except KeyboardInterrupt:
        BROSWER.quit()
        print('\nExiting...')
        exit(0)