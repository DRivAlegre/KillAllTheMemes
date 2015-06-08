import os
import json

def get_json():
	os.chdir(os.getcwd() + "/pictures/")
	data = []
	imgs = os.listdir(os.getcwd())
	for i in imgs:
		data.append({"url":"pictures/" + i})
	jsondata = open("jsondata.json","wb")
	jsondata.write(json.dumps(data))
	jsondata.close()
