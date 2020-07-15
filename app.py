
import joblib
import pandas as pd
import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle

app = Flask(__name__)


# load the model from disk
#loaded_model = joblib.load('/static/data/finalized_model_joblib.obj')



@app.route('/divinfo', methods=['POST'])
def get_divinfo():
   divinfo = flask.request.get_json()
   print(divinfo)
   return flask.jsonify({"result":f'ok'})


@app.route("/")
def index():
    return render_template("/index.html")

@app.route("/template")
def template():
    return render_template("template.html")

@app.route("/privacy-policy")
def privacy_policy():
    return render_template("privacy-policy.html")


@app.route('/predict')
def predict():
#use the loaded model to make prediction
    result = loaded_model.predict(X_test)
    result_accuracy = loaded_model.score(X_test, y_test)

    return (result, accuracy)




if __name__ == '__main__':
     app.run(debug=True)