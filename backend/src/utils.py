import os
import sqlite3


def get_db_connection():
    return sqlite3.connect(os.path.join(os.path.dirname(__file__), "db.sqlite3"))


def read_csv(filename):
    '''
    Parses a txt file from data directory.

    Parameters:
        filename (string): Name of the file from data directory that you want to read. Ex: "routes"
    '''
    with open(os.path.join(os.path.dirname(__file__),f'../data/{filename}.txt'), 'r') as csv:
        for line in csv.readlines():
            print(line)
