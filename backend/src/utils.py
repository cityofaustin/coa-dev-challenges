import os
import sqlite3


def _get_db_connection():
    return sqlite3.connect(os.path.join(os.path.dirname(__file__), "db.sqlite3"))
