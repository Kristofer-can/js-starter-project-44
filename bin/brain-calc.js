#!/usr/bin/env node

import { fistPlay } from '../src/index.js'; // eslint-disable-line import/extensions
import { rule, playCALC } from '../src/games/calc.js'; // eslint-disable-line import/extensions

fistPlay(rule, playCALC);
