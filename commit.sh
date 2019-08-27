#!/bin/bash
git add *
git commit -m "update"
git pull
git push
mshta vbscript:Execute("msgbox "" Git commit! "":close")