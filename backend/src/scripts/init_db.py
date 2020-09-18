import os


# Creates db.sqlite3 if it doesn't already exist
with open(os.path.join(os.path.dirname(__file__), "../db.sqlite3"), 'w') as fp:
    pass
