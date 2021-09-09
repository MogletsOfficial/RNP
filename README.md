# RNP
When run, it runs sha256 on the 'seed', extracts the numbers, then uses the first X numbers to determine the winner. If the first X numbers are invalid, it moves onto the next X numbers. If no valid numbers is found, the script recursively runs sha256 on the previous hash until a valid winning number is found.

Hope that made sense :D
