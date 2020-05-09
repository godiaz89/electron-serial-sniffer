#!/bin/bash

pwd
whoami
ls -lh
cp -R build/* /opt/appmon/frontend
sudo systemctl restart appmonfe

