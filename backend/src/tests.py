import pytest
import os
import sqlite3


@pytest.fixture(scope='function')
def db(tmpdir):
    file = os.path.join(tmpdir.strpath, "test.db")
    conn = sqlite3.connect(file)
    yield conn
    conn.close()
