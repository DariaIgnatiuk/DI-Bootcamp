import requests
import time

# Google
start_time = time.perf_counter()
requests.get('https://google.com')
response = requests.get("http://api.open-notify.org/iss-now.json")
end_time = time.perf_counter()
elapsed_time = end_time - start_time
print(f"Elapsed time: to load Google {elapsed_time} seconds")

# Ynet
start_time = time.perf_counter()
requests.get('https://www.ynet.co.il/')
response = requests.get("http://api.open-notify.org/iss-now.json")
end_time = time.perf_counter()
elapsed_time = end_time - start_time
print(f"Elapsed time: to load Ynet {elapsed_time} seconds")

# IMDB
start_time = time.perf_counter()
requests.get('https://www.imdb.com/')
response = requests.get("http://api.open-notify.org/iss-now.json")
end_time = time.perf_counter()
elapsed_time = end_time - start_time
print(f"Elapsed time: to load IMDB {elapsed_time} seconds")