import {greet} from './greeting.js';
import { colorfulMessage } from './colorful-message.js';
import {read} from './files/read-file.js';

console.log(greet('Leia'));
colorfulMessage();
read('./files/file-data.txt');