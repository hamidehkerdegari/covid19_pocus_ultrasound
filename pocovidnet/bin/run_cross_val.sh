#!/bin/bash
python3 scripts/train_covid19.py -t 3 -id 'vgg_cam' -lr 1e-3 -d '../data/cross_validation' -s 0
python3 scripts/train_covid19.py -t 3 -id 'vgg_cam' -lr 1e-3 -d '../data/cross_validation' -s 1
python3 scripts/train_covid19.py -t 3 -id 'vgg_cam' -lr 1e-3 -d '../data/cross_validation' -s 2
python3 scripts/train_covid19.py -t 3 -id 'vgg_cam' -lr 1e-3 -d '../data/cross_validation' -s 3
python3 scripts/train_covid19.py -t 3 -id 'vgg_cam' -lr 1e-3 -d '../data/cross_validation' -s 4

