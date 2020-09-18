import pytest
import os
import sqlite3


@pytest.fixture(scope='function')
def conn(tmpdir):
    file = os.path.join(tmpdir.strpath, "test.db")
    conn = sqlite3.connect(file)
    yield conn
    conn.close()


def test_db_conn(conn):
    assert type(conn) == sqlite3.Connection
