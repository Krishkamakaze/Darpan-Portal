import requests
import json


URL = "http://127.0.0.1:8000/studentapi/"

def update_data():
    data = {
        'rollnumber' : 220104031,
        'studentName' : 'Kriti',
    }
    header = {'content-Type':'application/json'}
    json_data = json.dumps(data)
    r = requests.put(url = URL , headers = header , data=json_data)
    data = r.json()
    print(data)

update_data()